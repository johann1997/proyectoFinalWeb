import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Modules/Home';
import Login from './Modules/Login';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
        </Switch>
    );
}

export default Routes;