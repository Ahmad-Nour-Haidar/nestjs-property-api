import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import {
  createPropertySchema,
  CreatePropertyZodDto,
} from './dto/create-property-zod.dto';
import { ZodValidationPipe } from './pipes/zod-validation-pipe';

@Controller('property')
export class PropertyController {
  @Post()
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  create(@Body() body: CreatePropertyZodDto) {}
}
