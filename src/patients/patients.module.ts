import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { DatabaseModule } from '../database/database.module';
import { patientsProviders } from './patients.provider';
import { EmailService } from 'src/notification/notification.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PatientsController],
  providers: [...patientsProviders, PatientsService, EmailService],
})
export class PatientsModule {}
