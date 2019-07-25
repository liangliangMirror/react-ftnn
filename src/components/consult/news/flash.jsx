
import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

class Flash extends Component {

    render() {
        return (
            <div className="flash">
                <div className="newsimg" style={{
                    float: "left", textAlign: "center", lineHeight: "110px",
                    width: "110px",
                    height: "80px",
                    paddingTop: "10px"
                }}>
                    <img style={{ height: "70px" }} src="https://pubimg.futunn.com/20190724012034192fcb05e05d5.jpg" alt="" />
                </div>
                <WingBlank style={{
                    width: "200px",

                    height: "80px",
                    float: "left",

                }}>
                    <Carousel className="my-carousel"
                        vertical
                        dots={false}
                        dragging={false}
                        swiping={false}
                        autoplay
                        infinite

                    >
                        <div className="v-item">66666666666</div>
                        <div className="v-item">77777777777</div>
                        <div className="v-item">88888888888</div>
                    </Carousel>
                </WingBlank>
            </div>
        )
    }
}

export default Flash;