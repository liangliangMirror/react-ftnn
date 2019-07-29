import React, { Component } from 'react';
import { NavLink, Switch, Route, withRouter, Redirect } from 'react-router-dom';
// 样式
import "./header.scss";

import News from './news/index';
import Column from './column/index'
import Newflash from './newflash/index'
import Mine from './mine/index'
import Calendar from './calendar/index'
import Push from './push/index'



class ConsultHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                {
                    title: '要闻',
                    path: '/news',
                    name: "NEWS"
                },
                {
                    title: '专栏',
                    path: '/column',
                    name: "COLUMN"
                },
                {
                    title: '快讯',
                    path: '/newflash',
                    name: "NEWFLASH"
                },
                {
                    title: '自选',
                    path: '/mine',
                    name: "MINE"
                },
                {
                    title: '财经日历',
                    path: '/calendar',
                    name: "CALENDAR"
                },
                {
                    title: '推送',
                    path: '/push',
                    name: "PUSH"
                }
            ]
        }

        this.go = this.go.bind(this);
    }

    go(path) {

    }

    render() {

        return (
            <div>
                <ul className="consult-header">
                    {
                        this.state.tabs.map(item => {
                            return (

                                <li className="consult-header-item" key={item.name} onClick={this.go.bind(this, item.path)}
                                >
                                    <NavLink to={"/consult" + item.path} activeClassName="active">
                                        {item.title}
                                    </NavLink>
                                </li>

                            )
                        })
                    }
                </ul>
                <Switch>
                    <Route path={"/consult/news"} component={News} />
                    <Route path={"/consult/column"} component={Column} />
                    <Route path={"/consult/newflash"} component={Newflash} />
                    <Route path={"/consult/mine"} component={Mine} />
                    <Route path={"/consult/calendar"} component={Calendar} />
                    <Route path={"/consult/push"} component={Push} />
                    <Redirect to="/consult/news" exact />
                </Switch>

            </div>
        )
    }

}


ConsultHeader = withRouter(ConsultHeader)
export default ConsultHeader;

