import React from 'react';
import All from '../../components/home/maxin/all'
import Harbor from '../../components/home/maxin/harbor'
import Beauty from '../../components/home/maxin/beauty'
import Deep from '../../components/home/maxin/deep'
import Gupiao from '../../components/home/gupiao/gupiao'
import { Route, Switch, Redirect } from 'react-router-dom';
class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/home/all" component={All} />
                <Route path="/home/harbor" component={Harbor} />
                <Route path="/home/beauty" component={Beauty} />
                <Route path="/home/deep" component={Deep} />
                <Route path="/home/deep" component={Deep} />
                <Route path="/home/gupiao" component={Gupiao} />
                <Redirect to="/home/all" />
            </Switch>
        )
    }

}

export default Router;