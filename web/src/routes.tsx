import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// importando landing
import Landing from './pages/Landing';
// e a pagina do mapa dos orfanatos
import OrphanagesMap from './pages/OrphanagesMap'

function Routes() {
    // colocamos exact, abaixo, para que ele nao mostre 2 rotas ao mesmo tempo
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrphanagesMap} />
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;