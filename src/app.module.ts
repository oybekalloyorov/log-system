import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logs/logger.service';
import { LogGateway } from './logs/log.gateway';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ActivityInterceptor } from './logs/activity.interceptor';
import { LogController } from './logs/log.controller';

@Module({
  imports: [],
  controllers: [AppController, LogController],
  providers: [AppService,
    LoggerService,
    LogGateway,
    {
      provide: APP_INTERCEPTOR,
      useClass: ActivityInterceptor
    }
  ],
})
export class AppModule { }
