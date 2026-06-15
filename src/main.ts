import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express'
// jangan lupa guys di import in NestFactory sama NestExpressApplication nya 


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');
  //disini set views nya dulu , sama set engine nya jadi ejs biar bisa nampilin views 

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
