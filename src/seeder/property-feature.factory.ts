import { faker } from '@faker-js/faker';
import { PropertyFeature } from '../entities/property-feature.entity';
import { setSeederFactory } from 'typeorm-extension';

export const PropertyFeatureFactory = setSeederFactory(PropertyFeature, () => {
  const feature = new PropertyFeature();
  feature.area = faker.number.int({ min: 25, max: 2500 });
  feature.bathrooms = faker.number.int({ min: 1, max: 3 });
  feature.bedrooms = faker.number.int({ min: 1, max: 3 });
  feature.parking_spots = faker.number.int({ min: 1, max: 3 });
  feature.has_balcony = faker.datatype.boolean();
  feature.has_garden_yard = faker.datatype.boolean();
  feature.has_swimming_pool = faker.datatype.boolean();

  return feature;
});
