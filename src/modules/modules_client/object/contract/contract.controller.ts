import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ContractService } from './contract.service';
import { PermissionsClient, PermissionsClientGuard, SetDbNameInterceptor } from 'src/common';
import { ContractCreateDto, ContractUpdateDto } from './dto/contract.dto';

@UseInterceptors(SetDbNameInterceptor)
@Controller('contract')
export class ContractController {

  constructor(private readonly _service: ContractService) {}

  @PermissionsClient('view')
  @UseGuards(PermissionsClientGuard)
  @Post()
  create(@Body() data: ContractCreateDto) {
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
  update(@Param('id') id:string, @Body() data: ContractUpdateDto) {
    return this._service.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id:string) {
    return this._service.delete(id);
  }

}
