import { Controller, Get, Res } from '@nestjs/common';
//gw suka kelupaan yang ini , tambahin controller, get,res nya juga

import { AppService } from './app.service';
import type { Response } from 'express';
// disini juga jgn lupa import type  yang respons from express

import { db } from './database/database';
// ini jgn lupa di import setelah masukin database nya

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/dashboard')
  dashboard(@Res() res: Response) {
    res.send('Dashboard');
  }

  @Get('/ping')
  ping() {
    return 'OK';
  }

  @Get('/test-db')
  async testDb(@Res() res: Response) {
    const [rows] = await db.query('SELECT * FROM users');
    res.json(rows);
  }


}
