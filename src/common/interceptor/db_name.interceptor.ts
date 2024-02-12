import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';
import { DbContextService } from '../context/db.context';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserClient } from 'src/entity/entity_admin/user_client';
import { Organization } from 'src/entity/entity_admin/organisation';


@Injectable()
export class SetDbNameInterceptor implements NestInterceptor {

  constructor(
    @InjectRepository(UserClient)
    private _userRepo: Repository<UserClient>,  
    @InjectRepository(Organization)
    private _orgRepo: Repository<Organization>,  
    private userContextService: DbContextService,
  ) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const request:Request = context.switchToHttp().getRequest();
    const tokenData = await this.extractTokenData(request);
    
    this.userContextService.set_db_name = tokenData;

    return next.handle();
  }

  private async extractTokenData(request: Request): Promise<string> {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new Error('Authorization header mavjud emas');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new Error('Token mavjud emas');
    }   

    try {
        const decoded = jwt.verify(token, process.env.AT_SECRET_CLIENT);
    
        const user_id:string = String(decoded['sub'])
        
        const userData = await this._userRepo.findOne({where: {id: user_id}})
        const organization = await this._orgRepo.findOne({where: {id: userData.organisation_id}})

        if(!organization && !organization?.is_active){
            throw new HttpException("This organisation not active", HttpStatus.BAD_REQUEST)
        }

        return organization.database_name;
    } catch (error) {
        throw new Error('Token mavjud emas');
    }
  }
}
