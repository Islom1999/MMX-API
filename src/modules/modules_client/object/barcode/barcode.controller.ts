import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { BarcodeService } from './barcode.service';
import { PermissionsClient, PermissionsClientGuard, SetDbNameInterceptor } from 'src/common';
import { BarcodeCreateDto, BarcodeUpdateDto } from './dto/barcode.dto';

@UseInterceptors(SetDbNameInterceptor)
@Controller('barcode')
export class BarcodeController{

  constructor(private readonly _service: BarcodeService) {}

  @PermissionsClient('view')
  @UseGuards(PermissionsClientGuard)
  @Post()
  create(@Body() data: BarcodeCreateDto) {
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
  update(@Param('id') id:string, @Body() data:BarcodeUpdateDto) {
    return this._service.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id:string) {
    return this._service.delete(id);
  }
}
