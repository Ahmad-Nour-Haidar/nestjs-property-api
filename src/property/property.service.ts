import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}

  async findAll(paginationDTO: PaginationDto) {
    const properties = await this.propertyRepo.find({
      skip: paginationDTO.skip(),
      take: paginationDTO.take(),
    });

    return {
      message: 'Properties retrieved successfully',
      properties,
    };
  }

  async findOne(id: number) {
    const property = await this.propertyRepo.findOne({ where: { id } });

    if (!property) {
      throw new NotFoundException({
        message: `Property with ID ${id} not found`,
        error: 'Not Found',
      });
    }

    return {
      message: 'Property found successfully',
      property,
    };
  }

  async create(dto: CreatePropertyDto) {
    try {
      const property = await this.propertyRepo.save(dto);

      return {
        message: 'Property created successfully',
        property,
      };
    } catch (error) {
      throw new HttpException(
        {
          message: 'Failed to create property',
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: number, dto: UpdatePropertyDto) {
    const property = await this.propertyRepo.findOne({ where: { id } });

    if (!property) {
      throw new NotFoundException({
        message: `Property with ID ${id} not found`,
        error: 'Not Found',
      });
    }
    await this.propertyRepo.update({ id }, dto);

    return {
      message: 'Property updated successfully',
      property: { ...property, ...dto },
    };
  }

  async delete(id: number) {
    const result = await this.propertyRepo.delete({ id });

    if (result.affected !== 1) {
      throw new NotFoundException({
        message: `Property with ID ${id} not found`,
        error: 'Not Found',
      });
    }
  }
}
