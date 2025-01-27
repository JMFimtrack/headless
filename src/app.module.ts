import { Module, NestMiddleware, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { AuthModule } from './auth/auth.module';

import { AuthMiddleware } from "./units/auth/auth.middleware";

@Module({
  imports: [DataModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AuthMiddleware).forRoutes(
      { path: '', method: RequestMethod.GET },
      { path: 'auth', method: RequestMethod.GET },
      { path: 'data', method: RequestMethod.GET},
      { path: 'data', method: RequestMethod.POST}
    );
  }
}
