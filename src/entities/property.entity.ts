import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PropertyFeature } from './property-feature.entity';
import { User } from './user.entity';
import { PropertyType } from './property-type.entity';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('float', { default: 0 })
  price: number;

  @OneToOne(
    () => PropertyFeature,
    (propertyFeature) => propertyFeature.property,
    { cascade: true },
  )
  property_feature: PropertyFeature;

  @ManyToOne(() => User, (user) => user.properties)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToMany(() => User, (user) => user.liked_properties)
  liked_by: User[];

  @ManyToOne(() => PropertyType)
  type: PropertyType;
}
