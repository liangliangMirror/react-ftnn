import React from 'react';
import GpTitle from './gptitle';
import './gupiao.scss'
import { connect } from 'react-redux'
const axios = require('axios');
class Gupiao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutemap: null,
            details: null,
            time: null,
        }
    }
    componentWillUnmount() {
        this.props.dispatch({
            type: "SORT",
            ok: true,
        })
    }
    async componentWillMount() {
        let date = new Date()
        let time = date.getTime();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let hour = date.getHours();
        let minute = date.getMinutes() * 1 > 10 ? date.getMinutes() : `0${date.getMinutes()}`;
        let seconds = date.getSeconds();
        const { data: { data: minutemap } } = await axios.get(`http://localhost:3100/api/trade/quote-minute-v2?security_id=67010082052546&_=${time}‬`);
        const { data: { data: details } } = await axios.get(`http://localhost:3100/api/trade/quote-basic-v3?security_id=67010082052546&_=${time}`);
        // const { data: { data: minute } } = await axios.get(`http://localhost:3100/api/trade/quote-minute-v2?security_id=${this.props.location.state.id}&_=${time}‬`);
        // const { data: { data: details } } = await axios.get(`http://localhost:3100/api/trade/quote-basic-v3?security_id=${this.props.location.state.id}&_=${time}`);
        this.setState({
            minutemap: { ...minutemap },
            details: { ...details },
            time: `${month}/${day} ${hour}:${minute}:${seconds}`
        })
        console.log(this.state.minutemap, this.state.details, this.state.time)
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
                    <p><span> 交易中  {this.state.time}</span>
                        <span></span>
                    </p>
                </div>
                <GpTitle {...this.state.details} />
            </div>
        )
    }
}

export default connect(state => state)(Gupiao);