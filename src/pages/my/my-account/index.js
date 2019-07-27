import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'

function MyAccount(){
   
    return <div style={{padding:'12px',backgroundColor:'#fff',margin:'20px 0'}}>
        <Link to='/reg'>
            <Icon type="user" />
            <span style={{marginLeft:'10px'}}>证劵用户</span>
        </Link>
    </div>
}

export default MyAccount