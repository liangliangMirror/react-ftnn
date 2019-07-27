import React from 'react';
import GpTitle from './gptitle';
import './gupiao.scss'
import { connect } from 'react-redux'
import Timesharingplan from './sharingplan.js'
const axios = require('axios');
class Gupiao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutemap: null,
            details: null,
            time: null,
            jsq: null,
            times: null,
        }
    }
    componentWillUnmount() {
        this.props.dispatch({
            type: "SORT",
            ok: true,
        })
        clearInterval(this.state.jsq)
    }
    async componentWillMount() {
        let date = new Date()
        this.state.time = date.getTime();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let hour = date.getHours();
        let minute = date.getMinutes() * 1 > 10 ? date.getMinutes() : `0${date.getMinutes()}`;
        let seconds = date.getSeconds();
        this.setState({
            times: `${month}/${day} ${hour}:${minute}:${seconds}`
        })
        this.ajax(this.state.time)
        // const { data: { data: minute } } = await axios.get(`http://localhost:3100/api/trade/quote-minute-v2?security_id=${this.props.location.state.id}&_=${time}‬`);
        // const { data: { data: details } } = await axios.get(`http://localhost:3100/api/trade/quote-basic-v3?security_id=${this.props.location.state.id}&_=${time}`);
    }
    componentDidMount() {
        this.setState({
            jsq: setInterval(() => {
                this.ajax(this.state.time)
            }, 5000)
        })

    }
    async ajax(time) {
        const { data: { data: minutemap } } = await axios.get(`http://localhost:3100/api/trade/quote-minute-v2?security_id=67010082052546&_=${time}‬`);
        const { data: { data: details } } = await axios.get(`http://localhost:3100/api/trade/quote-basic-v3?security_id=67010082052546&_=${time}`);
        this.setState({
            minutemap: { ...minutemap },
            details: { ...details },
            time: new Date().getTime(),
        })
    }
    render() {
        return (
            <div className="gupiao">
                <div className="gphead">
                    <p className="p1">
                        <span style={{ marginRight: "10px" }}>
                            {this.state.minutemap !== null ? this.state.minutemap.security_id : ""}</span>
                        <span> {this.state.minutemap !== null ? this.state.details.quote.security_name : ""}</span>
                    </p>
                    <p><span> 交易中  {this.state.times}</span>
                        <span></span>
                    </p>
                </div>
                <GpTitle {...this.state.details} />
                <div className="gpmx">
                    <Timesharingplan {...this.state.minutemap} />
                    <div className="mx">
                        <p className="p">
                            <span className="spamwhite">逐条明细</span>
                            <span>成交统计</span>
                        </p>
                        <div className="mxdiv">
                            <span>
                                <span>15:59 </span>
                                <span className="greenspan">123456</span>
                            </span>
                            <span className="redspan">800</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(Gupiao);