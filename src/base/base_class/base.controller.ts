import { Body, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { BaseService } from './base.service';
import { validate, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export abstract class BaseController<M, D extends object, U extends object> {
    protected dtoClassCreate(): new () => D{
        return {} as new () => D;
    };
    protected dtoClassUpdate(): new () => U{
        return {} as new () => U;
    };

    constructor(protected service: BaseService<M, D, U>) {}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    async create(@Body() data: D) {
        const _data = plainToInstance(this.dtoClassCreate(), data);
        const errors = await validate(_data);

        if (errors.length > 0) {
            const validationErrors = errors.flatMap(error => this.mapValidationErrors(error));
            throw new HttpException({
                message: validationErrors,
            }, HttpStatus.BAD_REQUEST);
        }

        return this.service.create(_data);
    }

    @HttpCode(HttpStatus.OK)
    @Get()
    async findAll(): Promise<M[]> {
        return this.service.findAll();
    }

    @HttpCode(HttpStatus.OK)
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<M | undefined> {
        return this.service.findOne(id);
    }

    @HttpCode(HttpStatus.OK)
    @Put(':id')
    async update(@Param('id') id: string, @Body() data: U): Promise<M> {
        const _data = plainToInstance(this.dtoClassUpdate(), data);
        const errors = await validate(_data);

        if (errors.length > 0) {
            const validationErrors = errors.flatMap(error => this.mapValidationErrors(error));
            throw new HttpException({
                message: validationErrors,
            }, HttpStatus.BAD_REQUEST);
        }

        return this.service.update(id, _data);
    }

    @HttpCode(HttpStatus.OK)
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<M> {
        return this.service.delete(id);
    }

    private mapValidationErrors(error: ValidationError): string[] {
        const constraints = error.constraints ? Object.values(error.constraints) : [];
        if (error.children && error.children.length > 0) {
          return error.children.flatMap(childError => this.mapValidationErrors(childError));
        }
        return constraints;
    }
}
