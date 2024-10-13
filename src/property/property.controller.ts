import {
  Body,
  Controller,
  Get,
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
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne() {
    return this.propertyService.findOne();
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  create(@Body() body: CreatePropertyZodDto) {
    return this.propertyService.create();
  }

  @Patch(':id')
  update(
    @RequestHeader(
      new ValidationPipe({ validateCustomDecorators: true, whitelist: true }),
    )
    header: HeadersDto,
  ) {
    return this.propertyService.update();
  }
}
