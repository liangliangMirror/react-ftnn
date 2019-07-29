import React from 'react'
import {List,Icon} from 'antd'
import './activity.scss'


// 活动中心
class Activity extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[{
                icon:'gift',
                title:'奖励领取'
            },{
                icon:'container',
                title:'免用攻略'
            },{
                icon:'pound-circle',
                title:'模拟炒股'
            }],
            imgs:[{
                    id:1,
                    imgurl:'https://pubimg.futunn.com/20190701011386710558bc8a54b.png'
                },{
                    id:2,
                    imgurl:'https://pubimg.futunn.com/201906140103850158a5c4fe5a7.jpg'
                },{
                    id:3,
                    imgurl:'https://pubimg.futunn.com/2019050900963559b3e81827cab.jpg'
                },{
                    id:4,
                    imgurl:'https://pubimg.futunn.com/20180600390340db19b987a27.png'
                },{
                    id:5,
                    imgurl:'https://pubimg.futunn.com/201804003159349b85b7db0b9.jpg'
                },{
                    id:6,
                    imgurl:'https://pubimg.futunn.com/2018030029290320afd1580ec.jpg'
                }]
        }
    }
    render(){
        return <div className='activity'>
            <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={this.state.data}
            renderItem={item => (
            <List.Item>
                <p><Icon type={item.icon} theme="twoTone"></Icon></p>
                <p>{item.title}</p>
            </List.Item>
            )}/>
            {
                this.state.imgs.map(item=><img src={item.imgurl} alt={item.id} key={item.id}/>)
            }
            <p className='activity-p'>查看往期活动</p>
        </div>
    }  
}

export default Activity