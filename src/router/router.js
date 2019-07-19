import React from 'react';
import Home from '../pages/home/'
import Clrcle from '../pages/clrcle/'
import Consult from '../pages/consult/'
import My from '../pages/my/'
import { Route, Redirect, Switch } from 'react-router-dom';
class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/clrcle" component={Clrcle} />
                <Route path="/consult" component={Consult} />
                <Route path="/my" component={My} />
                <Redirect from="/" to="/home" exact />
            </Switch>
        )
    }

}

export default Router;