import { Controller, Get, Res, Post, Body, Param } from '@nestjs/common';
import type { Response } from 'express';
import { CategoriesService } from './categories.service';


@Controller('categories')
export class CategoriesController {
    constructor(
        private readonly categoriesService: CategoriesService,
    ) { }

    @Get('/delete/:id')
    async delete(
        @Param('id') id: number,
        @Res() res: Response,
    ) {

        await this.categoriesService.delete(id);

        return res.redirect('/categories');
    }

    @Get('/edit/:id')
    async editPage(
        @Param('id') id: number,
        @Res() res: Response,
    ) {

        const category =
            await this.categoriesService.findById(id);

        res.render('categories/edit', {
            category,
        });
    }

    @Post('/create')
    async store(
        @Body() body: any,
        @Res() res: Response,
    ) {

        await this.categoriesService.create(body);

        return res.redirect('/categories');
    }

    @Get('/create')
    createPage(
        @Res() res: Response,
    ) {
        res.render('categories/create');
    }


    @Get()
    async index(@Res() res: Response) {

        const categories =
            await this.categoriesService.findAll();

        res.render('categories/index', {
            categories,
        });
    }

    @Post('/edit/:id')
    async update(
        @Param('id') id: number,
        @Body() body: any,
        @Res() res: Response,
    ) {
        await this.categoriesService.update(id, body);
        return res.redirect('/categories');
    }

}