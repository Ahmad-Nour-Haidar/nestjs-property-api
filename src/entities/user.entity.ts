import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  avatar_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  password: string;

  @OneToMany(() => Property, (property) => property.user)
  properties: Property[];

  @ManyToMany(() => Property, (property) => property.liked_by)
  @JoinTable({
    name: 'user_liked_properties',
    joinColumn: {
      name: 'user_id', // Foreign key column for User entity
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'property_id', // Foreign key column for Property entity
      referencedColumnName: 'id',
    },
  })
  liked_properties: Property[];
}
