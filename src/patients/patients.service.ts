import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PatientEntity } from './patients.entity';
import { CreatePatientDto } from './dto/create-patient.dto';

@Injectable()
export class PatientsService {
  constructor(
    @Inject('PATIENTS_REPOSITORY')
    private readonly patientsRepository: Repository<PatientEntity>,
  ) {}

  async create(patientDto: CreatePatientDto): Promise<PatientEntity> {
    const newPatient = new PatientEntity();
    newPatient.id = Math.floor(Math.random() * 1000000);
    newPatient.name = patientDto.name;
    newPatient.email = patientDto.email;
    newPatient.phone = patientDto.phone;
    newPatient.photo = patientDto.photo;

    return await this.patientsRepository.save(newPatient);
  }

  async findAll(): Promise<PatientEntity[]> {
    return await this.patientsRepository.find();
  }

  async findOne(id: number): Promise<PatientEntity | undefined> {
    return await this.patientsRepository.findOne({ where: { id: id } });
  }

  // Add more methods as needed: update, delete, find by email, etc.
}
