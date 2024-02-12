import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { UnitService } from './unit.service';
import { UnitCreateDto, UnitUpdateDto } from './dto/unit.dto';
import { PermissionsClient, PermissionsClientGuard, SetDbNameInterceptor } from 'src/common';

@UseInterceptors(SetDbNameInterceptor)
@Controller('unit')
export class UnitController{

  constructor(private readonly _service: UnitService) {}

  @PermissionsClient('view')
  @UseGuards(PermissionsClientGuard)
  @Post()
  create(@Body() data: UnitCreateDto) {
    return this._service.create(data);
  }

  @Get()
  getAll() {
    return this._service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id:string) {
    return this._service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id:string, @Body() data:UnitUpdateDto) {
    return this._service.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id:string) {
    return this._service.delete(id);
  }
}
