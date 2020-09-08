import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

import AppError from '../errors/AppError';

/**
 * [x] Recebimento das informações;
 * [/] Tratar os erros e exceções;
 * [ ] Acesso ao Repositório;
 */

interface Request {
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

class CreateAppointmentService {
  public async execute({ provider_id, date }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date); // é uma regra de negócio (pois os eventos só ocorrem a cada hora.)

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked.');
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
