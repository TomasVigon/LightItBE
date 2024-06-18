import { Controller, Post, Body, Get, Param, Res } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientEntity } from './patients.entity';
import { EmailService } from 'src/notification/notification.service';
import { Response } from 'express';

@Controller('patients')
export class PatientsController {
  constructor(
    private readonly patientsService: PatientsService,
    private readonly notificationService: EmailService,
  ) {}

  @Post()
  async create(
    @Body() createPatientDto: CreatePatientDto,
    @Res() res: Response,
  ) {
    try {
      const patientCreation =
        await this.patientsService.create(createPatientDto);
      res.status(201).send(patientCreation);
      this.notificationService.sendEmail(patientCreation.email);
    } catch (error) {
      res.status(500).send({
        error:
          error.message || 'Unknown error occurred. Failed to create patient',
      });
    }
  }

  @Get()
  async findAll(): Promise<PatientEntity[]> {
    return this.patientsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PatientEntity | undefined> {
    return this.patientsService.findOne(id);
  }

  // Add more endpoints as needed
}
