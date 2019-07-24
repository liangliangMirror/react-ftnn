import React from 'react';
import './all.scss';
const axios = require("axios")
class All extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            id: 1563955185254,
        }

    }
    componentWillMount() {
        this.ajax(this.state.id);
    }
    componentDidMount() {

        setInterval(() => {
            this.ajax(this.state.id);
            this.setState({
                id: this.state.id + 2
            })
        }, 5000)
    }
    async  ajax(id) {
        const { data: { data: shdata } } = await axios.get(`http://localhost:3100/api/stock/stock-rank?plate_id=3000005&_=${id}`);
        this.setState({
            data: [
                ...shdata.downTopList,
                ...shdata.raiseTopList,
                ...shdata.turnoverTopList,
            ]
        })
    }
    render() {
        return (
            <ul className="all">
                {
                    this.state.data.map((item) => {
                        return (
                            <li className="li" key={item.security_id}>
                                <div className="left">
                                    <span><i className={item.price_direct}>{item.price_direct}</i> {item.security_name} </span>
                                    <span>{item.security_code}</span>
                                </div>
                                <div className={item.change_ratio.slice(0, 1) !== "-" ? "rigth " : "green rigth"}>
                                    <div>{item.last_price}</div>
                                    <div>
                                        <span className={item.change_ratio.slice(0, 1) !== "-" ? "" : "span_green"}>{item.change_ratio}</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default All;