
import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import './flash.scss';

class Flash extends Component {

    render() {
        return (
            <div className="flash">
                <div className="newsimg">
                    <img src="https://pubimg.futunn.com/20190724012034192fcb05e05d5.jpg" alt="" />
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
                        <div className="v-item">谷歌二季度财报显示，营收389.4亿美元，超过市场预期381.5亿美元，增速19%，高于市场预期17%。</div>
                        <div className="v-item">麦当劳发布2019年Q1财报，数据显示，麦当劳Q1营收49.6亿美元，高于市场预估的49.3亿美元，但同比下降3.5%</div>
                        <div className="v-item">近日，达闼科技子在提交给美国证券交易委员会的一份文件中表示，该公司寻求在美国IPO，计划融资5亿美元。</div>
                    </Carousel>
                </WingBlank>
            </div>
        )
    }
}

export default Flash;