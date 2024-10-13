import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class PropertyFeature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  parking_spots: number;

  @Column()
  area: number;

  @Column()
  has_balcony: boolean;

  @Column()
  has_garden_yard: boolean;

  @Column()
  has_swimming_pool: boolean;

  @OneToOne(() => Property, (property) => property.property_feature)
  @JoinColumn()
  property: Property;
}
