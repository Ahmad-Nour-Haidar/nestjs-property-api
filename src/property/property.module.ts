import { Module, ValidationPipe } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [PropertyController],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    },
    PropertyService,
  ],
})
export class PropertyModule {}
