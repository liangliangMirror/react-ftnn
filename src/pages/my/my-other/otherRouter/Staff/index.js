import React from 'react'
import './staff.scss'
import {Row,Col,Carousel} from 'antd'



// 员工中心
function Staff(){
    return <div className='my-other-staff'>
       <p>
           已有20462名员工加入
       </p>
       <div className='staff-div'>
           <h2>专享特权</h2>
        <Row>
            <Col span={8}>
                <i></i>
                <h6>企业用户</h6>
                <h6>专属客服</h6>
            </Col>
            <Col span={8}>
                <i></i>
                <h6>每周限量</h6>
                <h6>免佣奖励</h6>
            </Col>
            <Col span={8}>
                <i></i>
                <h6>司庆日</h6>
                <h6>免费股票</h6>
            </Col>
        </Row>
       </div>
       <div className='staff-div'>
           <h2>投资福利</h2>
        <Row>
            <Col span={8}>
                <i></i>
                <h6>每月交易</h6>
                <h6>额外奖励</h6>
            </Col>
            <Col span={8}>
                <i></i>
                <h6>融资利息</h6>
                <h6>折扣优惠</h6>
            </Col>
            <Col span={8}>
                <i></i>
                <h6>港美股打新</h6>
                <h6>0手续费</h6>
            </Col>
        </Row>
       </div>
       <div className='staff-qiye'>
            <h1>以下企业员工已加入专区</h1> 
            <Carousel>
                <div>
                <h3>1</h3>
                </div>
                <div>
                <h3>2</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div>
            </Carousel>
       </div>
       <h4>Copyright © 2019 FUTU. All Rights Reserved.</h4>
       <div className='staff-btm'>
           <p>进入我的福利专区</p>
       </div>
    </div>
}

export default Staff