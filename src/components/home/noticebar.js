import React from 'react';
// import axios from 'axios';
import { Carousel, WingBlank } from 'antd-mobile';
import './noticebar.scss';
const axios = require("axios")
class NoticeBar extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [0, 1,],
        }
    }
    componentWillMount() {
        this.ajax();
    }
    async ajax() {
        const { data: { data: shdata } } = await axios.get(`http://localhost:3100/api/quote/index-quote?_=1563959648218`);
        this.setState({
            data: [...shdata.indexList,]
        })
    }
    render() {
        return (
            <div>
                <WingBlank>
                    <Carousel className="my-carousel"
                        vertical
                        dots={false}
                        dragging={false}
                        swiping={false}
                        autoplay
                        infinite
                    >
                        {
                            this.state.data.map((item, idx) => {
                                console.log(item.change_ratio)
                                return (
                                    <div className={"v-item div-s div-sx"} key={idx}>
                                        <span className="span1">{item.security_name}</span>
                                        <span className="span2">{item.price}</span>
                                        <span className="span3">+{item.change}</span>
                                        <span className="span4">{item.change_ratio}</span>
                                    </div>
                                )
                            })
                        }

                        {/* <div className="v-item">carousel 2</div> */}
                        {/* <div className="v-item">carousel 3</div> */}
                    </Carousel>
                </WingBlank>
            </div>
        )
    }
}
export default NoticeBar;