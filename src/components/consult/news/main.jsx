
import React, { Component } from 'react';

import './main.scss'
/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
class Main extends Component {

    render() {
        return (
            <div className="news-main1">
                <div className="news-main-item">
                    <div className="main-item-left">
                        <h3>富士康的喜与忧 与苹果捆绑的诸多挑战</h3>
                        <p className="left-time">10分钟前</p>
                    </div>
                    <div className="main-item-right">
                        <img src="https://pubimg.futunn.com/201907270121186410c350a87d4.jpg" alt="" />
                    </div>
                </div>

                <div className="news-main-item">
                    <div className="main-item-left">
                        <h3>历次降息与美股走势考：美联储降息可以避免“熊的咆哮”吗？</h3>
                        <p className="left-time">25分钟前</p>
                    </div>
                    <div className="main-item-right">
                        <img src="https://pubimg.futunn.com/201907270121188483b461894a2.jpg" alt="" />
                    </div>
                </div>

                <div className="news-main-item">
                    <div className="main-item-left">
                        <h3>5张图看懂科创板首周成绩单</h3>
                        <p className="left-time">36分钟前</p>
                    </div>
                    <div className="main-item-right">
                        <img src="https://pubimg.futunn.com/201907270121184998242dc4098.jpg" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;