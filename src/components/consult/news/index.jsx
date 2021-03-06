import React, { Component } from 'react';
// 走马灯
import ConsultCarousel from './carousel'
// 快讯
import Flash from './flash'
// 主要内容
import Main from './main'
// 专题
import Special from './Special'


import './news.scss'


class News extends Component {

    render() {
        return (
            <div className="news">
                <div className="news-consult">
                    <ConsultCarousel />
                </div>
                <div className="news-flash">
                    <Flash />
                </div>
                <div className="news-main">
                    <Main />
                </div>
                <div className="news-special">
                    <Special />
                </div>
            </div>
        )
    }
}

export default News;