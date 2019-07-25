import React, { Component } from 'react';
import axios from 'axios';
import './pushitem.scss';


class PushItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            page: 98079,
            time: Date.now()
        }

        this.getdata = this.getdata.bind(this);
    }

    async getdata() {
        let news = (await axios.get("http://localhost:3100/api/stock/stock-rank?plate_id=3000005&_=" + this.state.time)).data

        console.log(news)
    }

    componentWillMount() {
        this.getdata()
    }

    render() {
        return (
            <div className="push-item">
                <div className="item">
                    <div className="item-left">
                        <h3 className="push-title">push-title</h3>
                        <p className="time">time</p>
                    </div>
                    <div className="item-right">
                        item-right
                        <img className="push-img" src="" alt="" />
                    </div>
                </div>
            </div>
        )
    }


}

export default PushItem;