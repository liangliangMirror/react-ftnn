import React from 'react'
import axios from 'axios'
import {Row,Col} from 'antd'
import './daily.scss'
class DailyTask extends React.Component{ 
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    async componentWillMount(){
        let {data:{data}} = await axios.get('https://www.easy-mock.com/mock/5d3a740e7cc539577c39d666/futunn/dailytask')
        // console.log(data);
        this.setState({data})
    } 
    render(){
        return <div className='dailytask'>
       {
           this.state.data.map(item=>{
            return <Row className='h4-row' key={item.task_id}>
            <Col span={6}>
                <img src={item.task_icon} alt='' />
            </Col>
            <Col span={12}>
                <h4>{item.task_name}</h4>
                <h6>积分 +{item.task_score}</h6>
            </Col>
            <Col><span>去完成</span></Col>
        </Row>
           })
       }
    </div>
    }    
}

export default DailyTask