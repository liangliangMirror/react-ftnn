import React, { Component } from 'react';
import './more.scss';

class More extends Component {
    render() {
        return (
            <div className="more">
                <div className="more-item">
                    <div className="more-item-up">
                        <div className="more-item-up-left">
                            <div className="head">
                                <img src="https://pubimg.futunn.com/20190725012052472bd14392008.png" alt="" />
                                <span>江涵视野</span>
                            </div>
                        </div>
                        <div className="more-item-up-right">
                            <span className="time">07-24 21:00</span>
                        </div>
                    </div>

                    <div className="more-item-dowm">
                        <div className="more-item-left">
                            <h3>50亿美元罚款--细看Facebook七宗罪</h3>
                            <p>美国啊实打实的asdasd 按时打算打算啊实打实的按时打算打算多阿萨德</p>
                        </div>
                        <div className="more-item-right">
                            <img className="item-img" src="https://pubimg.futunn.com/20190725012052024b6ac294865.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default More;


