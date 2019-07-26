import React from 'react'
import './simulation.scss'
import {Col,Row} from 'antd'




// 模拟炒股
function Simulation(){
    return <div className='simulation'>
        <div className='simulation-top'>
            <Row>
                <Col span={4}>
                    <img src='https://avatar.futunn.com/201907240427313646ae2a75dbb.jpg' alt=''/>
                </Col>
                <Col span={20}>
                    <h4>因为刚好遇见你</h4>
                    <p>12345678</p>
                </Col>
            </Row>
        </div>
        <div className='simulation-money'>
            <h2>港股模拟练习</h2>
            <h3><span>资产净值（港元）</span><span>今日盈亏</span></h3>
            <h1>1,000,000.00</h1>
            <Row className='simulation-money-row'>
                <Col span={8}>
                    <h3>证劵市值</h3>
                    <p>0.00</p>
                </Col>
                <Col span={8}>
                    <h3>可用资金</h3>
                    <p>1,000,000.00</p>
                </Col>
                <Col span={8}>
                    <h3>总盈亏金额</h3>
                    <p>0.00</p>
                </Col>
            </Row>
            <Row className='simulation-money-row'>
                <Col span={6}>
                    <img src='http://m-mcdn.futunn.com/images/simulate/card-icon-1.gif' alt='' />
                    <p>买卖股票</p>
                </Col>
                <Col span={6}>
                    <i  style={{backgroundImage:'url(http://m-mcdn.futunn.com/images/simulate/card-icon-2.png)'}}/>
                    <p>订单历史</p>
                </Col>
                <Col span={6}>
                <i style={{backgroundImage:'url(http://m-mcdn.futunn.com/images/simulate/card-icon-3.png)'}}/>                    
                    <p>高手排行</p>
                </Col>
                <Col span={6}>
                <i style={{backgroundImage:'url(http://m-mcdn.futunn.com/images/simulate/card-icon-4.png)'}}/>
                    
                    <p>热门股票</p>
                </Col>
            </Row>
        </div>
        <div className='simulation-table'>

        </div>
    </div>
}

export default Simulation