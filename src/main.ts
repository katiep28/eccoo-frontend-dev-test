import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as nunjucks from 'nunjucks';
import { join } from 'path';
import { Logger } from '@nestjs/common';

const viewPaths = [
  join(__dirname, '..', 'views')
];
const port = 8080;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  nunjucks.configure(viewPaths, {
    express: app,
    noCache: true,
    throwOnUndefined: true,
  });
  app.setViewEngine('html');

  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/assets/' });

  await app.listen(port);
  Logger.log(`App listening on port ${port}`, 'Main');
}
bootstrap();
