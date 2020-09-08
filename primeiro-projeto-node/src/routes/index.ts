import { Router } from 'express';

import usersRouter from './users.routes';
import appointmentsRouter from './appointments.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter); // o "use" irá funcionar para qualquer rota.
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
