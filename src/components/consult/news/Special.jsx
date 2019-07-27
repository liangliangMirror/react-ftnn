import React, { Component } from 'react';
import './special.scss'
class Special extends Component {
    render() {
        return (
            <div className="special">
                <div className="special-head">
                    <h3>专题</h3>
                    <span>全部专题</span>
                </div>

                <div className="special-content">
                    <div className="special-content-item">
                        <div className="content-item-left">
                            <img src="https://pubimg.futunn.com/2019071801182765cb4374fe191.png" alt=""/>
                        </div>
                        <div className="content-item-right">
                            <h4>富途点评</h4>
                            <p>富途点评 | 谷歌盘后意外大涨8%，云业务正在后程发。。。</p>
                        </div>
                    </div>
                    <div className="special-content-item">
                        <div className="content-item-left">
                            <img src="https://pubimg.futunn.com/20190718011827736eafab91649.jpg" alt="" />
                        </div>
                        <div className="content-item-right">
                            <h4>财报前瞻</h4>
                            <p>提前挖掘财报重点，投资机会一网打尽！</p>
                        </div>
                    </div>
                    <div className="special-content-item">
                        <div className="content-item-left">
                            <img src="https://pubimg.futunn.com/2019072601208453fd1864018ac.jpg" alt="" />
                        </div>
                        <div className="content-item-right">
                            <h4>达闼科技赴美IPO</h4>
                            <p>成立于2015年初的达闼科技是全球首家云端智能机器人运营商，拥有62项注册专利，海外注册专利7项。</p>
                        </div>
                    </div>

                    <div className="special-content-item">
                        <div className="content-item-left">
                            <img src="https://pubimg.futunn.com/2019042500949771c4cc6c7d73b.png" alt="" />
                        </div>
                        <div className="content-item-right">
                            <h4>富途研选</h4>
                            <p>优中选优的高含金量研究报告，为投资者呈现其中的行业数据和逻辑精华。研报结论未必全部应验，但其思考过程对喜爱研究基本面的投资者弥足珍贵。</p>
                        </div>
                    </div>
                    <div className="special-content-item">
                        <div className="content-item-left">
                            <img src="https://pubimg.futunn.com/2019041200938367d9ed5257870.jpg" alt="" />
                        </div>
                        <div className="content-item-right">
                            <h4>富途港股策略</h4>
                            <p>富途港股策略带你每周复盘港股，关注股市最新动向。</p>
                        </div>
                    </div>
                    <div className="special-content-item">
                        <div className="content-item-left">
                            <img src="https://pubimg.futunn.com/201904120093836606791b3c813.jpg" alt="" />
                        </div>
                        <div className="content-item-right">
                            <h4>富途美股情报局</h4>
                            <p>倾听华尔街的声音，抓住最新的动态。</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }
}

export default Special;