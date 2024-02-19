import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { PassportDataService } from './passport-data.service';
import { PermissionsClient, PermissionsClientGuard, SetDbNameInterceptor } from 'src/common';
import { PassportDataCreateDto, PassportDataUpdateDto } from './dto/passport-data.dto';

@UseInterceptors(SetDbNameInterceptor)
@Controller('passport-data')
export class PassportDataController {

  constructor(private readonly _service: PassportDataService) {}

  @PermissionsClient('view')
  @UseGuards(PermissionsClientGuard)
  @Post()
  create(@Body() data: PassportDataCreateDto) {
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
  update(@Param('id') id:string, @Body() data:PassportDataUpdateDto) {
    return this._service.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id:string) {
    return this._service.delete(id);
  }
  
}
