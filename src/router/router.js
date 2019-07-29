import React from 'react';
import Home from '../pages/home/'
import Clrcle from '../pages/clrcle/'
import Consult from '../pages/consult/'
import My from '../pages/my/'
import { Route, Redirect, Switch } from 'react-router-dom';

import Farm from '../pages/my/my-other/otherRouter/Farm'
import Quotation from '../pages/my/my-other/otherRouter/Quotation'
import Activity from '../pages/my/my-other/otherRouter/Activity'
import Task from '../pages/my/my-other/otherRouter/Task'
import Invitation from '../pages/my/my-other/otherRouter/Invitation'
import Simulation from '../pages/my/my-other/otherRouter/Simulation'
import Staff from '../pages/my/my-other/otherRouter/Staff'
import Help from '../pages/my/my-kefu/help'
import HelpDetails from '../pages/my/my-kefu/details'
import MyReg from '../pages/my/my-account/my-reg'
import RegStcku from '../pages/my/my-account/my-stcku'
import MyKecheng from '../pages/my/my-picture/my-kecheng'



class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/home" component={Home} >
                </Route>
                <Route path="/aaa" component={Home} />
                <Route path="/clrcle" component={Clrcle} />
                <Route path="/consult" component={Consult} />
                {/* <Route path="/my" component={My} /> */}
                {/* <Route path="/my" render={props => (<My />)} /> */}
                <Route path="/my" component={My} />
                { /*render 渲染方式*/}
                {/* <Route path="/my" exact render={props => (
                    //路由拦截
                    <Redirect to={{ pathname: '/clrcle', state: { from: props.location } }} />
                )} /> */}
                <Route path='/farm' component={Farm}></Route>
                <Route path='/quotation' component={Quotation}></Route>
                <Route path='/activity' component={Activity}></Route>
                <Route path='/task' component={Task}></Route>
                <Route path='/invitation' component={Invitation}></Route>
                <Route path='/simulation' component={Simulation}></Route>
                <Route path='/staff' component={Staff}></Route>
                <Route path='/help' component={Help}></Route>
                <Route path='/helpdetails' component={HelpDetails}></Route>
                <Route path='/reg' component={MyReg}></Route>
                <Route path='/stcku' component={RegStcku}></Route>
                <Route path='/mykecheng' component={MyKecheng}></Route>


                <Redirect from="/" to="/home" exact />
            </Switch>
        )
    }

}

export default Router;