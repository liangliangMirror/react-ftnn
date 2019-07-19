import React from 'react';
import { connect } from 'react-redux'//redux的使用
class Home extends React.Component {
    render() {
        return (
            <div>
                主页
            </div>
        )
    }
}

export default connect(state => {
    return state;
})(Home);