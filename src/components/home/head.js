import React from 'react';
import './head.scss';
import { NavLink } from 'react-router-dom'
class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [
                {
                    wenzi: "全部",
                    to: "/all"
                }, {
                    wenzi: "港股",
                    to: "/harbor"
                }, {
                    wenzi: "美股",
                    to: "/beauty"
                }, {
                    wenzi: "沪深",
                    to: "/deep"
                }]
        }
    }
    render() {
        return (
            < div className="div" >
                <div className="ul">
                    {
                        this.state.title.map((item, index) => {
                            return (
                                <span key={index}> <NavLink to={"/home" + item.to}>
                                    {item.wenzi}
                                </NavLink></span>
                            )
                        })
                    }
                </div>
                <i className="icon-down iconfont "></i>
            </div >
        )
    }
}
export default Head;