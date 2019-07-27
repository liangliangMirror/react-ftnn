import React from 'react';
import './Column.scss';

class Column extends React.Component {
    render() {
        return (
            <div className="zhuan">
                <p className="publish">
                    <em className="iconfont icon-edit" style={{fontSize:'24px'}} /><span>发表专栏文章</span>
                </p>
                <div className="entire">
                    <p><span>全部</span><span>精华</span><span>热门</span></p>
                    <p>智能排序ˇ</p>
                </div>
                <div className="journalism">
                    <p className="portrait">
                        <img src={require('./txcs.jpg')} className="tx" alt="头像"/>
                        <span><em>61澳股资讯</em><em style={{color:'#d8d8d8'}}>10分钟前</em></span>
                        <span className="span">Graincorp 业余出售受阻，仍需等待ACCC最终决定</span>
                        <span style={{width:'25%',height:'5rem',float:'right'}}><img style={{width:'100%',height:'100%'}} src={require('./txcs.jpg')} alt="头像"/></span>
                        <span className="spacing">澳大利亚竞争监管机构(ACCC)周四发表声明，对ANZ Termials Pty Ltd 计划收购Graincorp Limited (ASCO)</span>
                    </p>
                </div>
                <div className="journalism">
                    <p className="portrait">
                        <img src={require('./txcs.jpg')} className="tx" alt="头像"/>
                        <span><em>61澳股资讯</em><em style={{color:'#d8d8d8'}}>10分钟前</em></span>
                        <span className="span">Graincorp 业余出售受阻，仍需等待ACCC最终决定</span>
                        <span style={{width:'25%',height:'5rem',float:'right'}}><img style={{width:'100%',height:'100%'}} src={require('./txcs.jpg')} alt="头像"/></span>
                        <span className="spacing">澳大利亚竞争监管机构(ACCC)周四发表声明，对ANZ Termials Pty Ltd 计划收购Graincorp Limited (ASCO)</span>
                    </p>
                </div>
                <div className="journalism">
                    <p className="portrait">
                        <img src={require('./txcs.jpg')} className="tx" alt="头像"/>
                        <span><em>61澳股资讯</em><em style={{color:'#d8d8d8'}}>10分钟前</em></span>
                        <span className="span">Graincorp 业余出售受阻，仍需等待ACCC最终决定</span>
                        <span style={{width:'25%',height:'5rem',float:'right'}}><img style={{width:'100%',height:'100%'}} src={require('./txcs.jpg')} alt="头像"/></span>
                        <span className="spacing">澳大利亚竞争监管机构(ACCC)周四发表声明，对ANZ Termials Pty Ltd 计划收购Graincorp Limited (ASCO)</span>
                    </p>
                </div>
                <div className="journalism">
                    <p className="portrait">
                        <img src={require('./txcs.jpg')} className="tx" alt="头像"/>
                        <span><em>61澳股资讯</em><em style={{color:'#d8d8d8'}}>10分钟前</em></span>
                        <span className="span">Graincorp 业余出售受阻，仍需等待ACCC最终决定</span>
                        <span style={{width:'25%',height:'5rem',float:'right'}}><img style={{width:'100%',height:'100%'}} src={require('./txcs.jpg')} alt="头像"/></span>
                        <span className="spacing">澳大利亚竞争监管机构(ACCC)周四发表声明，对ANZ Termials Pty Ltd 计划收购Graincorp Limited (ASCO)</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Column;