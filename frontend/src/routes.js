import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SigInPage from './pages/SigInPage'
import SignUpPage from './pages/SignUpPage'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'
import PasswordForgetPage from './pages/PasswordForget'
import PasswordChangePage from './pages/PasswordChange'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SigInPage} />
                <Route path="/register" component={SignUpPage} />
                <Route path="/profile" component={Profile} />
                <Route path="/resetPassword" component={PasswordForgetPage} />
                <Route path="/changePassword" component={PasswordChangePage} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}