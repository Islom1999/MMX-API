import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { PermissionsClient, PermissionsClientGuard, SetDbNameInterceptor } from 'src/common';
import { PassportDataCreateDto, PassportDataUpdateDto } from '../passport-data/dto/passport-data.dto';
import { CurrencyCreateDto, CurrencyUpdateDto } from './dto/currency.dto';

@UseInterceptors(SetDbNameInterceptor)
@Controller('currency')
export class CurrencyController {

  constructor(private readonly _service: CurrencyService) {}

  @PermissionsClient('view')
  @UseGuards(PermissionsClientGuard)
  @Post()
  create(@Body() data: CurrencyCreateDto) {
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
  update(@Param('id') id:string, @Body() data: CurrencyUpdateDto) {
    return this._service.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id:string) {
    return this._service.delete(id);
  }
  
}
