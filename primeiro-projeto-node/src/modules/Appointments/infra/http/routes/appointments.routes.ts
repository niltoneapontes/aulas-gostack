import { Router } from 'express';

import ensureAuthenticated from '@modules/Users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsController = new AppointmentsController();
const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await this.ormRepository.find();
//   return response.json(appointments);
// });

// http:localhost:3333/appointments

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
