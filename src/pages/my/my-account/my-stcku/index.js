import React from 'react'
import './stcku.scss'
import {Row,Col} from 'antd'


class RegStcku extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[{
                title:'资金',
                btns:['存入资金','提取资金','货币兑换','资金历史']
            },{
                title:'股票',
                btns:['新股认购','转入股票','转出股票','股票历史']
            },{
                title:'其他',
                btns:['计算佣金','我的收藏','我的结单']
            }]
        }
    }
    render(){
        return <div className='reg-stcku'>
       <div className='reg-stcku-top'>
            <Row>
                <Col span={4}>
                    <img src='https://avatar.futunn.com/201907240427313646ae2a75dbb.jpg/50' alt=''/>
                </Col>
                <Col span={20}>
                    <h4>因为刚好遇见你</h4>
                    <p>12345678</p>
                </Col>
            </Row>
        </div>
        {
            this.state.list.map(item=>{
                return <div className='reg-stcku-list'>
                    <h3>{item.title}</h3>
                    <Row>
                        {
                            item.btns.map(item=>{
                                return <Col span={6}>
                                    <i></i>
                                    <p>{item}</p>
                                </Col>
                            })
                        }
                        
                    </Row>
                    </div>
            })
        }
        
    </div>
    }  
}

export default RegStcku