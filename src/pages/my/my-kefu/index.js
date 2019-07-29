import React from 'react'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'

function MyKefu(){
    return <div style={{padding:'12px',backgroundColor:'#fff',margin:'20px 0 0 0'}} >
        <Link to='/help'>
            <Icon type="phone" />
            <span style={{marginLeft:'10px'}}>客服中心</span>
        </Link>
    </div>
}

export default MyKefu