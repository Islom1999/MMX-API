import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ContragentService } from './contragent.service';
import { PermissionsClient, PermissionsClientGuard, SetDbNameInterceptor } from 'src/common';
import { ContragentCreateDto, ContragentUpdateDto } from './dto/contragent.dto';

@UseInterceptors(SetDbNameInterceptor)
@Controller('contragent')
export class ContragentController {

  constructor(private readonly _service: ContragentService) {}

  @PermissionsClient('view')
  @UseGuards(PermissionsClientGuard)
  @Post()
  create(@Body() data: ContragentCreateDto) {
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
  update(@Param('id') id:string, @Body() data: ContragentUpdateDto) {
    return this._service.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id:string) {
    return this._service.delete(id);
  }

}
