import { startOfHour } from 'date-fns';
import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

/**
 * [x] Recebimento das informações;
 * [/] Tratar os erros e exceções;
 * [ ] Acesso ao Repositório;
 */

interface IRequest {
  provider_id: string;
  date: Date;
}

/**
 * Dependency Inversion (SOLID): Passar uma dependência como parâmetro para o constructor de uma classe,
 * para que todas as classes utilizem o mesmo repositório.
 */

/**
 * DRY: Don't Repeat Yourself
 */

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({ provider_id, date }: IRequest): Promise<Appointment> {
    const appointmentDate = startOfHour(date); // é uma regra de negócio (pois os eventos só ocorrem a cada hora.)

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked.');
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
