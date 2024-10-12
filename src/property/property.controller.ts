import {
  Body,
  Controller,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  createPropertySchema,
  CreatePropertyZodDto,
} from './dto/create-property-zod.dto';
import { ZodValidationPipe } from './pipes/zod-validation-pipe';
import { RequestHeader } from './pipes/request-header-pipe';
import { HeadersDto } from './dto/headers.dto';

@Controller('property')
export class PropertyController {
  @Post()
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  create(@Body() body: CreatePropertyZodDto) {
    return body;
  }

  @Patch(':id')
  update(
    @RequestHeader(
      new ValidationPipe({ validateCustomDecorators: true, whitelist: true }),
    )
    header: HeadersDto,
  ) {
    return header;
  }
}
