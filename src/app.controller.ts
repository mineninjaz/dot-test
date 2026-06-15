import { Controller, Get, Res } from '@nestjs/common';
//gw suka kelupaan yang ini , tambahin controller, get,res nya juga

import { AppService } from './app.service';
import type { Response } from 'express';
// disini juga jgn lupa import type  yang respons from express

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Get('/login')
  login(@Res() res: Response) {
    res.render('login');
  }

}
