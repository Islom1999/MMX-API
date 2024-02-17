import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { BaseClientController } from 'src/base';
import { Product } from 'src/entity/entity_client';
import { PermissionsClient, PermissionsClientGuard, SetDbNameInterceptor } from 'src/common';
import { UnitCreateDto, UnitUpdateDto } from '../unit/dto/unit.dto';
import { ProductCreateDto, ProductUpdateDto } from './dto/product.dto';
import { ProductGroupCreateDto, ProductGroupUpdateDto } from './dto/product-group.dto';

@UseInterceptors(SetDbNameInterceptor)
@Controller('product')
export class ProductController {

  constructor(private readonly _service: ProductService) {}

  @PermissionsClient('view')
  @UseGuards(PermissionsClientGuard)
  @Post('group')
  createGroup(@Body() data: ProductGroupCreateDto) {
    return this._service.createGroup(data);
  }

  @PermissionsClient('view')
  @UseGuards(PermissionsClientGuard)
  @Post()
  createProduct(@Body() data: ProductCreateDto) {
    return this._service.createProduct(data);
  }

  @Get()
  getAllProduct() {
    return this._service.findAllProduct();
  }

  // @Get()
  // getAllGroup() {
  //   return this._service.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id:string) {
    return this._service.findOne(id);
  }

  @Patch('group/:id')
  updateGroup(@Param('id') id:string, @Body() data:ProductGroupUpdateDto) {
    return this._service.updateGroup(id, data);
  }

  @Patch(':id')
  updateProduct(@Param('id') id:string, @Body() data:ProductUpdateDto) {
    return this._service.updateProduct(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id:string) {
    return this._service.delete(id);
  }

}
