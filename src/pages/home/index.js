import React from 'react';
import { connect } from 'react-redux'//redux的使用
import './index.scss';
import Head from '../../components/home/head';
import Sort from '../../components/home/sort';
import NoticeBar from '../../components/home/noticebar';
import { withRouter } from 'react-router-dom';
import Router from '../../router/home/index'
class Home extends React.Component {

    render() {
        return (
            <div className="inside">
                <div className="head">
                    <Head />
                </div>
                <div className="Sort"> <Sort /></div>
                <div className="Content"><Router /> </div>
                <div className="NoticeBar"> <NoticeBar /></div>
            </div>
        )
    }
}
Home = withRouter(Home);

export default connect(state => {
    return state;
})(Home);