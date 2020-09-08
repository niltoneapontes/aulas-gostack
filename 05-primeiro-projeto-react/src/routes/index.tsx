import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

//o "exact" serve para que, ao encontrar a barra na rota de repository, o Route não acesse a dashboard.
// sem o Switch, a rota Repository seria "adicionada" à Dashboard ao acessar "/repository".

export default Routes;
