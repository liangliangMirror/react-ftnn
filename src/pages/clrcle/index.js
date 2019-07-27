import React from 'react';
import {NavLink} from 'react-router-dom';
import Router from '../../router/circle/index';
import './clrcle.scss';

class Clrcle extends React.Component{  
    constructor(props){
      super(props);
      this.state = {
        navs:[
          {
            name:'Condition',
            path:'/condition',
            title:<i className="iconfont icon-earth" style={{fontSize:'22px'}}/>
          },
          {
            name:'Recommend',
            path:'/recommend',
            title:<i className="iconfont icon-tag" style={{fontSize:'22px'}} />
          },
          {
            name:'Column',
            path:'/column',
            title:<i className="iconfont icon-pic-left" style={{fontSize:'22px'}} />
          },
          {
            name:'Classroom',
            path:'/classroom',
            title:<i className="iconfont icon-crown" style={{fontSize:'22px'}} />
          }, 
          {
            name:'Inform',
            path:'/inform',
            title:<i className="iconfont icon-bell" style={{fontSize:'22px'}} />
          }
        ],
        current:'Condition'
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(data){
      this.setState({
        current:data.key
      })
  
      let currentRouter = this.state.navs.filter(item=>item.name === data.key)[0];
      this.props.history.push(currentRouter.path)
    }
    
    render(){
      let {navs} = this.state;
    return (
      <div className="clrcle" style={{height:'100%'}}>
          < div className="div" >
                <div className="ull">
                    {
                        navs.map((item, index) => {
                            return (
                                <span key={index}> <NavLink to={"/clrcle" + item.path}>
                                    {item.title}
                                </NavLink></span>
                            )
                        })
                    }
                </div>
                    <Router />
            </div >
      </div>
      );
    }
  }

export default Clrcle;