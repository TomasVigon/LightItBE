import { DataSource } from 'typeorm';
import { PatientEntity } from './patients.entity';

export const patientsProviders = [
  {
    provide: 'PATIENTS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PatientEntity),
    inject: ['DATA_SOURCE'],
  },
];
