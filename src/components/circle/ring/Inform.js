import React from 'react';
import './Inform.scss';

class Inform extends React.Component {
    render() {
        return (
            <div className="shu">
                <img src={require('./xxi.jpg')} style={{width:'100%',height:'100%'}} alt="消息"/>
            </div>
        )
    }
}

export default Inform;