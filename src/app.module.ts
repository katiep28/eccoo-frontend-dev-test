import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * This sets up the main NestJS app
 * 
 * We define the controllers (i.e. the routes) and
 * providers (e.g. services, utilities) that are
 * available in the app here. Nest takes care of
 * the rest.
 */
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
