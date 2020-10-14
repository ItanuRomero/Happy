import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// importando landing
import Landing from './pages/Landing';
// e a pagina do mapa dos orfanatos
import OrphanagesMap from './pages/OrphanagesMap'
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';


function Routes() {
    // colocamos exact, abaixo, para que ele nao mostre 2 rotas ao mesmo tempo
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrphanagesMap} />
            <Route path="/orphanages/create" component={CreateOrphanage} />
            <Route path="/orphanages/:id" component={Orphanage} />
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;