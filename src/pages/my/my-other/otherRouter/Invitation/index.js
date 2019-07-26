import React from 'react'
import './invitation.scss'
import {Row,Col, Menu} from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem';



// 邀请有礼
class Invitation extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[{
                img:'https://cdn.futunn.com/images/activity/newInvite/inviteRewardIco04.png',
                h3:'好友完成注册',
                p:'500积分（仅能获得1次）'
            },{
                img:'https://cdn.futunn.com/images/activity/newInvite/inviteRewardIco01.png',
                h3:'好友完成开户',
                p:'一周港股免佣'
            },{
                img:'https://cdn.futunn.com/images/activity/newInvite/inviteRewardIco02.png',
                h3:'好友入金 HKD20,000',
                p:'最低60天港股免佣或200元现金'
            },{
                img:'https://cdn.futunn.com/images/activity/newInvite/inviteRewardIco03.png',
                h3:'好友转仓 HKD30,000',
                p:'最低60天港股免佣或300元现金'
            }],
            current:'1',
            str:'开户'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        this.setState({
            current:e.key,
            str:e.item.props.children.slice(2)
        })
        // console.log(e.item.props.children.slice(2));
        
    }
     render(){
        return <div className='invitation'>
            <img src='https://cdn.futunn.com/images/activity/newInvite/top-h5.png' alt='' />
            <div className='invitation-div1'>
                <h2><span>邀请奖励</span><span>查看我的奖励</span></h2>
                {
                    this.state.data.map(item=>{
                        return <Row key={item.h3}>
                            <Col span={6}>
                                <img src={item.img} alt='' />
                            </Col>
                            <Col span={18}>
                                <h3>{item.h3}</h3>
                                <p>{item.p}</p>
                            </Col>
                        </Row>
                    })
                }
            </div>
            <div className='invitation-div2'>
                <h2>我的邀请记录</h2>
                <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                    <MenuItem key='1'>邀请开户</MenuItem>
                    <MenuItem key='2'>邀请入金</MenuItem>
                    <MenuItem key='3'>邀请转仓</MenuItem>
                </Menu>
                <ul className='invitation-ul'>
                    <p><span>昵称</span><span>{this.state.str}进度</span></p>

                </ul>
            </div>
            <p className='invitation-p'>Copyright © 2019 Futu, Inc. All Rights Reserved.</p>
        </div>
    }
    
}

export default Invitation