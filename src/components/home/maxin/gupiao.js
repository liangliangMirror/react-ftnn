import React from 'react';
const axios = require('axios');
class Gupiao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentWillMount() {
        let time = new Date().getTime()
        const { data: { data: minute } } = await axios.get(`http://localhost:3100/api/trade/quote-minute-v2?security_id=${this.props.location.state.id}&_=${time}‬`);
        const { data: { data: details } } = await axios.get(`http://localhost:3100/api/trade/quote-basic-v3?security_id=${this.props.location.state.id}&_=${time}`);
        console.log(minute, details, time)
    }
    render() {
        return (
            <div>
                Gupiao
            </div>
        )
    }
}

export default Gupiao;