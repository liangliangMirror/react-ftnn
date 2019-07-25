import React, { Component } from 'react';
// import { Tabs, WhiteSpace, Flex } from 'antd-mobile';
// 走马灯
import ConsultCarousel from './carousel'
// 快讯
import Flash from './flash'
// 主要内容
import Main from './main'

import './news.scss'

class News extends Component {

    render() {
        return (
            <div>
                <div className="news-consult">
                    <ConsultCarousel />
                </div>
                <div className="news-flash">
                    <Flash />
                </div>
                <div className="news-main">
                    <Main />
                </div>
            </div>
        )
    }
}

export default News;