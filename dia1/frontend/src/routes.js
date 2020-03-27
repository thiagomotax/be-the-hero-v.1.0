import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes(){

    return(
        <BrowserRouter> {/*base*/}
            <Switch> {/*switch garante que apenas uma rota sera chamada*/}
                <Route path="/" exact component={Login} /> {/*rota inicial, exact pra todas as outras rotas que tem / não casarem com essa*/}
                <Route path="/register" component={Register} /> {/*rota registro*/}
            </Switch>

        </BrowserRouter>
    )
}