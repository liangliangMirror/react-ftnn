import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect, withRouter } from 'react-router-dom';
// 样式
import "./header.scss";


import News from './news/news';

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
        console.log(this.props);
        console.log(path);

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
                    {/* <Redirect from="" to="" exact /> */}
                </Switch>

            </div>
        )
    }

}


ConsultHeader = withRouter(ConsultHeader)
export default ConsultHeader;

