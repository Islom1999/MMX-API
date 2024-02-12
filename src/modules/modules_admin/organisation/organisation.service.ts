import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrganisationDto } from './dto/organisation.dto';
import { exec } from 'child_process';
import { Organization } from 'src/entity/entity_admin';

@Injectable()
export class OrganisationService {
  constructor(
    @InjectRepository(Organization)
    private _orgRepo: Repository<Organization>,
  ) {}

  async create(dto: OrganisationDto): Promise<Organization> {
    const database_name = this.formatDbName(dto.database_name)

    const model = this._orgRepo.create({...dto, database_name});
    const new_model = await this._orgRepo.save(model);

    await this.migrateDatabase(new_model.database_name)
    
    return new_model;
  }

  async findAll(): Promise<Organization[]> {
    const model = await this._orgRepo.find({});
    return model;
  }

  async findOne(id: string): Promise<Organization | undefined> {
    const model = await this._orgRepo.findOne({
      where: { id },
    });
    if (!model)
      throw new HttpException("Couldn't find model", HttpStatus.NOT_FOUND);
    return model;
  }

  async update(id: string, dto: OrganisationDto): Promise<Organization> {
    await this._orgRepo.update(id, dto);
    const model = await this._orgRepo.findOne({ where: { id } });
    return model;
  }

  async delete(id: string): Promise<any> {
    const model = await this._orgRepo.findOne({ where: { id } });
    if (!model)
      throw new HttpException('Not found model', HttpStatus.NOT_FOUND);
    await this._orgRepo.delete(model.id);
    return model;
  }

  private async migrateDatabase(tenantDatabaseName: string) {
    const dockerCommand = `docker exec 78ad62ac0b87 psql -U islomdev -c "CREATE DATABASE ${tenantDatabaseName};"`;
  
    return new Promise((resolve, reject) => {
      exec(dockerCommand, (error, stdout, stderr) => {
        if (error) {
          console.error(`Migratsiya xatosi: ${error}`);
          return reject(new HttpException('Migrations failed', HttpStatus.GATEWAY_TIMEOUT));
        }
        console.log(`Migratsiya muvaffaqiyatli: ${stdout}`);
        resolve(stdout);
      });
    });
  }

  private formatDbName(dbName: string) {
    if (!dbName) {
      return `mmx_${Date.now()}`;
    }
    let formatted = dbName
    
    formatted = formatted.replace(/^\d+/, "");

    // Faqat harflar, raqamlar va probellar qoldirish
    formatted = formatted.replace(/[^a-zA-Z0-9_]/g, "");
  
    // Kichik harflarga o'tkazish
    formatted = formatted.toLowerCase();
  
    // Probellarni "_" bilan almashtirish
    formatted = formatted.replace(/\s+/g, "_");
  
    return `mmx_${formatted}`;
  }
}
