import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import type { Response } from 'express';
import { AuthService } from './auth.service';
import { db } from '../database/database';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get('/login')
    loginPage(@Res() res: Response) {
        res.render('login');
    }

    @Post('/login')
    async login(
        @Body() body: any,
        @Res() res: Response,
    ) {
        const { username, password } = body;

        const user = await this.authService.validateUser(
            username,
            password,
        );

        if (!user) {
            return res.render('login', {
                error: 'Username atau Password salah',
            });
        }

        return res.redirect('/dashboard');
    }
}