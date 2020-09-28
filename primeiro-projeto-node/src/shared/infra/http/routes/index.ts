import { Router } from 'express';

import usersRouter from '@modules/Users/infra/http/routes/users.routes';
import appointmentsRouter from '@modules/Appointments/infra/http/routes/appointments.routes';
import providersRouter from '@modules/Appointments/infra/http/routes/providers.routes';
import sessionsRouter from '@modules/Users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/Users/infra/http/routes/password.routes';
import profileRouter from '@modules/Users/infra/http/routes/profile.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter); // o "use" irá funcionar para qualquer rota.
routes.use('/providers', providersRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
