import React from 'react';
import './Classroom.scss';

class Classroom extends React.Component {
    render() {
        return (
            <div className="cl">
                <p><img src={require('./classroomlogo.jpg')} alt="课堂"/></p>
                <ul className="signs">
                    <li><em className="iconfont icon-star" style={{fontSize:'24px',background: '#68b3fc'}} /><span>精选课程</span></li>
                    <li><em className="iconfont icon-bank" style={{fontSize:'24px',background: '#fc8943'}} /><span>全部课程</span></li>
                    <li><em className="iconfont icon-file-text" style={{fontSize:'24px',background: '#cd6efe'}} /><span>股票百科</span></li>
                    <li><em className="iconfont icon-book-fill" style={{fontSize:'24px',background: '#ffd350'}} /><span>我的课程</span></li>
                </ul>
                <div className="noob">
                    <><span></span><span>新手入门</span></>
                    <div className="door">
                        <p></p>
                        <p style={{background:'white',margin:'0 1rem'}}>
                            <em>股票基本知识</em>
                            <span>交易规则、如何交易、如何收费</span><br />
                            <><span>201995</span><span>次播放</span></>
                        </p>
                    </div>
                    {/*<><span></span><span>交易进阶</span></>
                    <><span></span><span>IPO打折</span></>
                    <><span></span><span>软件使用秘籍</span></> */}
                </div>
                <div className="noob">
                    <><span></span><span>投资分析基础</span></>
                    <div className="door">
                        <p></p>
                        <p style={{background:'white',margin:'0 1rem'}}>
                            <em>股票基本知识</em>
                            <span>交易规则、如何交易、如何收费</span><br />
                            <><span>201995</span><span>次播放</span></>
                        </p>
                    </div>
                </div>
                <div className="noob">
                    <><span></span><span>热点专题</span></>
                    <div className="door">
                        <p></p>
                        <p style={{background:'white',margin:'0 1rem'}}>
                            <em>股票基本知识</em>
                            <span>交易规则、如何交易、如何收费</span><br />
                            <><span>201995</span><span>次播放</span></>
                        </p>
                    </div>
                </div>
                <p className="foots"><img src={require('./ktfoot.jpg')} alt="选择我们"/></p>
            </div>     
        )
    }
}

export default Classroom;