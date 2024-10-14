import { IsInt, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { DEFAULT_PAGE_SIZE } from '../../utils/constants';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @IsInt()
  @IsPositive()
  page: number = 1; // Default page number

  @IsOptional()
  @IsNumber()
  @IsInt()
  @IsPositive()
  limit: number = DEFAULT_PAGE_SIZE; // Default limit per page

  // Method to calculate the 'skip' value for pagination
  skip(): number {
    return (this.page - 1) * this.limit;
  }

  take(): number {
    return this.limit;
  }

  // Method to return pagination details (skip and limit)
  getPaginationDetails(): { skip: number; take: number } {
    return {
      skip: this.skip(),
      take: this.limit,
    };
  }
}
