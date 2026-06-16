import { Controller, Get, Res, Post, Body, Param, Query } from '@nestjs/common';
import type { Response } from 'express';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(
        private readonly productsService: ProductsService,
    ) { }

    @Get()
    async index(
        @Query('search') search: string,
        @Res() res: Response,
    ) {

        const products = await this.productsService.findAll(search);

        res.render('products/index', {
            products,
            search,
        });

    }

    @Get('/detail/:id')
    async detailPage(@Param('id') id: number, @Res() res: Response) {
        const product = await this.productsService.findById(id);
        res.render('products/detail', { product });
    }

    @Get('/create')
    async createPage(@Res() res: Response) {
        const categories = await this.productsService.getAllCategories();
        res.render('products/create', { categories });
    }

    @Post('/create')
    async store(@Body() body: any, @Res() res: Response) {
        await this.productsService.create(body);
        return res.redirect('/products');
    }

    @Get('/edit/:id')
    async editPage(@Param('id') id: number, @Res() res: Response) {
        const product = await this.productsService.findById(id);
        const categories = await this.productsService.getAllCategories();
        res.render('products/edit', { product, categories });
    }

    @Post('/edit/:id')
    async update(@Param('id') id: number, @Body() body: any, @Res() res: Response) {
        await this.productsService.update(id, body);
        return res.redirect('/products');
    }

    @Get('/delete/:id')
    async delete(@Param('id') id: number, @Res() res: Response) {
        await this.productsService.delete(id);
        return res.redirect('/products');
    }

}