import React from 'react'
import {Menu} from 'antd'
import {Link,Route,Switch,Redirect} from 'react-router-dom'


import GrowTask from './GrowTask'
import DailyTask from './DailyTask'
import AccomplishTask from './AccomplishTask'

// 任务中心
class Task extends React.Component{
    constructor(){
        super();
        this.state = {
            navs:[{
                name:'GrowTask',
                title:'成长任务',
                path:'/grow'
            },{
                name:'DailyTask',
                title:'每日任务',
                path:'/daily'
            },{
                name:'AccomplishTask',
                title:'成就任务',
                path:'/accomplish'
            }],
            current:'GrowTask'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        this.setState({
            current:e.key
        })
    }
    render(){
        let {match} = this.props
        return <div>
            <Menu style={{textAlign:'center'}} onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
                {
                    this.state.navs.map(item=>{
                        return  <Menu.Item key={item.name}>
                        <Link to={match.url+item.path}>{item.title}</Link>
                    </Menu.Item>
                    })
                }           
        </Menu>
        <Switch>
            <Route path={match.url+'/grow'} component={GrowTask} />
            <Route path={match.url+'/daily'} component={DailyTask} />
            <Route path={match.url+'/accomplish'} component={AccomplishTask} />
            <Redirect from={match.url} to={match.url+'/grow'}/>
        </Switch>
        </div>
    }
    
}

export default Task