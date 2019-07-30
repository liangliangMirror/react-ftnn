import React from 'react';
import { NavBar } from 'antd-mobile';
import './head.scss'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class HeadFtnn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: 0
        }
        this.middle = this.middle.bind(this);
    }
    middle(idx) {
        this.setState({
            idx,
        })
    }
    componentWillMount() {
        this.props.dispatch({
            type: "BBB"
        })
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    leftContent={
                        [
                            <i className={!this.props.data.head.leftbutton ? "" : "icon-arrowleft iconfont"} style={{ fontSize: "20px" }} key="0" />,
                        ]
                    }
                    rightContent={
                        this.props.data.head[2].rigthicon.map((item, idx) => {
                            return (
                                <i className={`iconfont icon ${item.icon}`} key={idx} style={idx === this.props.data.head[2].rigthicon.length - 1 ? { margin: 0 } : {}} />
                            )
                        })
                    }>
                    {
                        this.props.data.head[1].headmiddle.map((item, idx) => {
                            return (
                                <span key={idx} className={this.state.idx === idx ? 'fontChange' : ''} onClick={this.middle.bind(this, idx)}>{item}</span>
                            )
                        })
                    }
                </NavBar>
            </div>
        )
    }
}
HeadFtnn = withRouter(HeadFtnn);

export default connect(state => state)(HeadFtnn);
