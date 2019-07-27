import React from 'react';
import Condition from '../../components/circle/ring/Condition';
import Recommend from '../../components/circle/ring/Recommend';
import Column from '../../components/circle/ring/Column';
import Classroom from '../../components/circle/ring/Classroom';
import Inform from '../../components/circle/ring/Inform';
import { Route, Switch, Redirect } from 'react-router-dom';
class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/clrcle/Condition" component={Condition} />
                <Route path="/clrcle/Recommend" component={Recommend} />
                <Route path="/clrcle/Column" component={Column} />
                <Route path="/clrcle/Classroom" component={Classroom} />
                <Route path="/clrcle/Inform" component={Inform} />
                <Redirect to="/clrcle/Condition" />
            </Switch>
        )
    }

}

export default Router;