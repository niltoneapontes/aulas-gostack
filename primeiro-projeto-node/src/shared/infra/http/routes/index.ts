import { Router } from 'express';

import usersRouter from '@modules/Users/infra/http/routes/users.routes';
import appointmentsRouter from '@modules/Appointments/infra/http/routes/appointments.routes';
import sessionsRouter from '@modules/Users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter); // o "use" irá funcionar para qualquer rota.
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
