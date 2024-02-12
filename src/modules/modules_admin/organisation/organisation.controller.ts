import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { Organization } from 'src/entity/entity_admin/organisation';
import { OrganisationDto } from './dto/organisation.dto';
import { PermissionsAdmin, PermissionsAdminGuard } from 'src/common';

@Controller('organisation')
export class OrganisationController {
  constructor(private readonly _service: OrganisationService) {}

  @PermissionsAdmin('view')
  @UseGuards(PermissionsAdminGuard)
  @Post()
  async create(
    @Body() dto: OrganisationDto,
  ): Promise<Organization> {
    return this._service.create(dto);
  }

  @PermissionsAdmin('view')
  @UseGuards(PermissionsAdminGuard)
  @Get()
  async findAll(): Promise<Organization[]> {
    return this._service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Organization> {
    return this._service.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: OrganisationDto,
  ): Promise<Organization> {
    return this._service.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this._service.delete(id);
  }
}
