import React from 'react';
import './Condition.scss';

import { Carousel, WingBlank } from 'antd-mobile';
class Condition extends React.Component {
    state = {
        data: ['1', '2', '3','4','5','6','7','8','9','10'],
        imgHeight: 176,
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: ['1', '2', '3','4','5','6','7','8','9','10'],
          });
        });
      }
    render() {
        return (
            <div className="fen">
                <div className="uli">
                    <p className="portrait">
                        <img src={require('./txcs.jpg')} className="tx" alt="头像"/>
                        <span><i className="iconfont icon-edit" style={{fontSize:'18px'}} />分享心情或投资心得</span>
                        <span className="grass">草稿(1)</span>
                    </p>
                    <ul className="share">
                        <li><em className="iconfont icon-plus-square" style={{fontSize:'20px',color:'#50a6f2'}} /><span>照片</span></li>
                        <li><em className="iconfont icon-edit-square" style={{fontSize:'20px',color:'#ff9a12'}} /><span>专栏</span></li>
                        <li><em className="iconfont icon-video" style={{fontSize:'20px',color:'#f566b4'}} /><span>直播</span></li>
                    </ul>
                </div>
                <div className="uli">
                    <ul className="sign">
                        <li><em className="iconfont icon-calendar" style={{fontSize:'24px',background: '#ff7a2d'}} /><span>签到</span></li>
                        <li><em className="iconfont icon-share" style={{fontSize:'24px',background: '#ff4b0c'}} /><span>游戏</span></li>
                        <li><em className="iconfont icon-home-fill" style={{fontSize:'24px',background: '#3492fd'}} /><span>商城</span></li>
                        <li><em className="iconfont icon-share" style={{fontSize:'24px',background: '#fdba52'}} /><span>模拟炒股</span></li>
                    </ul>
                </div>
                <div className="discuss">
                    <p><span>热门讨论</span><span>></span></p>
                        <WingBlank>
                            <Carousel className="space-carousel"
                            frameOverflow="visible"
                            cellSpacing={25}
                            slideWidth={0.4}
                            autoplay={false}
                            infinite={false}
                            dots={false}
                            afterChange={index => this.setState({ slideIndex: index })}
                            >
                            {this.state.data.map((val, index) => (
                                <a
                                key={val}
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    height: this.state.imgHeight,
                                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                }}
                                >
                                <span className="tao">#浑水失手?如何看待安踏股价创新高?</span>
                                <span className="lun"><img src={require('./txtwo.jpg')} alt="头像"/><em>正在讨论</em></span>
                                </a>
                            ))}
                            </Carousel>
                        </WingBlank>
                </div>
                <div className="interest">
                    <p className="p"><span>你可能感兴趣</span><span><em className="iconfont icon-ellipsis" style={{fontSize:'24px'}} /></span></p>
                    <p className="portrait">
                        <img src={require('./txcs.jpg')} className="tx" alt="头像"/>
                        <span className="span"><em>雲狄</em>发表了文章</span>
                        <span className="spant"><em className="iconfont icon-plus" style={{fontSize:'16px',color:'#50a6f2'}} />关注</span>
                        <span className="spanr">05-25 21:15
                            <em className="iconfont icon-fire-fill" style={{fontSize:'16px',color:'#fe4c0e',margin:'0'}} />
                            <em className="iconfont icon-crown-fill" style={{fontSize:'16px',color:'#febe40'}} />
                        </span>    
                    </p>
                    <p className="essay">
                    <img src={require('./gushi.jpg')} className="tx" alt="gushi" style={{height:'100%',width:'100%'}}/>
                    </p>
                    <p className="zan">
                        <span><em className="iconfont icon-like-fill" style={{fontSize:'16px',color:'#ffd2bb'}} /><em>19</em></span><span style={{float:'right'}}><em>13</em>评论·<em>14262</em>浏览</span>
                    </p>
                    <p className="discuss">
                        <span><em className="iconfont icon-like" style={{fontSize:'16px',color:'#cdcdcd'}} />赞</span>
                        <span><em className="iconfont icon-message-fill" style={{fontSize:'16px',color:'#cdcdcd'}} />评论</span>
                        <span><em className="iconfont icon-share" style={{fontSize:'16px',color:'#cdcdcd'}} />分享</span>
                    </p>
                    <p className="speak">
                        <span><em>远未见底</em>回复<em>雲狄</em> ：你好啊！</span>
                        <span><em>雲狄</em>回复<em>远未见底</em> ：你也好！</span>
                    </p>
                </div>
                <div className="interest">
                    <p className="p"><span>你可能感兴趣</span><span><em className="iconfont icon-ellipsis" style={{fontSize:'24px'}} /></span></p>
                    <p className="portrait">
                        <img src={require('./txcs.jpg')} className="tx" alt="头像"/>
                        <span className="span"><em>雲狄</em>发表了文章</span>
                        <span className="spant"><em className="iconfont icon-plus" style={{fontSize:'16px',color:'#50a6f2'}} />关注</span>
                        <span className="spanr">05-25 21:15
                            <em className="iconfont icon-fire-fill" style={{fontSize:'16px',color:'#fe4c0e',margin:'0'}} />
                            <em className="iconfont icon-crown-fill" style={{fontSize:'16px',color:'#febe40'}} />
                        </span>    
                    </p>
                    <p className="essay">
                    <img src={require('./gushi.jpg')} className="tx" alt="gushi" style={{height:'100%',width:'100%'}}/>
                    </p>
                    <p className="zan">
                        <span><em className="iconfont icon-like-fill" style={{fontSize:'16px',color:'#ffd2bb'}} /><em>19</em></span><span style={{float:'right'}}><em>13</em>评论·<em>14262</em>浏览</span>
                    </p>
                    <p className="discuss">
                        <span><em className="iconfont icon-like" style={{fontSize:'16px',color:'#cdcdcd'}} />赞</span>
                        <span><em className="iconfont icon-message-fill" style={{fontSize:'16px',color:'#cdcdcd'}} />评论</span>
                        <span><em className="iconfont icon-share" style={{fontSize:'16px',color:'#cdcdcd'}} />分享</span>
                    </p>
                    <p className="speak">
                        <span><em>远未见底</em>回复<em>雲狄</em> ：你好啊！</span>
                        <span><em>雲狄</em>回复<em>远未见底</em> ：你也好！</span>
                    </p>
                </div>
                <div className="interest">
                    <p className="p"><span>你可能感兴趣</span><span><em className="iconfont icon-ellipsis" style={{fontSize:'24px'}} /></span></p>
                    <p className="portrait">
                        <img src={require('./txcs.jpg')} className="tx" alt="头像"/>
                        <span className="span"><em>雲狄</em>发表了文章</span>
                        <span className="spant"><em className="iconfont icon-plus" style={{fontSize:'16px',color:'#50a6f2'}} />关注</span>
                        <span className="spanr">05-25 21:15
                            <em className="iconfont icon-fire-fill" style={{fontSize:'16px',color:'#fe4c0e',margin:'0'}} />
                            <em className="iconfont icon-crown-fill" style={{fontSize:'16px',color:'#febe40'}} />
                        </span>    
                    </p>
                    <p className="essay">
                    <img src={require('./gushi.jpg')} className="tx" alt="gushi" style={{height:'100%',width:'100%'}}/>
                    </p>
                    <p className="zan">
                        <span><em className="iconfont icon-like-fill" style={{fontSize:'16px',color:'#ffd2bb'}} /><em>19</em></span><span style={{float:'right'}}><em>13</em>评论·<em>14262</em>浏览</span>
                    </p>
                    <p className="discuss">
                        <span><em className="iconfont icon-like" style={{fontSize:'16px',color:'#cdcdcd'}} />赞</span>
                        <span><em className="iconfont icon-message-fill" style={{fontSize:'16px',color:'#cdcdcd'}} />评论</span>
                        <span><em className="iconfont icon-share" style={{fontSize:'16px',color:'#cdcdcd'}} />分享</span>
                    </p>
                    <p className="speak">
                        <span><em>远未见底</em>回复<em>雲狄</em> ：你好啊！</span>
                        <span><em>雲狄</em>回复<em>远未见底</em> ：你也好！</span>
                    </p>
                </div>
                <div className="interest">
                    <p className="p"><span>你可能感兴趣</span><span><em className="iconfont icon-ellipsis" style={{fontSize:'24px'}} /></span></p>
                    <p className="portrait">
                        <img src={require('./txcs.jpg')} className="tx" alt="头像"/>
                        <span className="span"><em>雲狄</em>发表了文章</span>
                        <span className="spant"><em className="iconfont icon-plus" style={{fontSize:'16px',color:'#50a6f2'}} />关注</span>
                        <span className="spanr">05-25 21:15
                            <em className="iconfont icon-fire-fill" style={{fontSize:'16px',color:'#fe4c0e',margin:'0'}} />
                            <em className="iconfont icon-crown-fill" style={{fontSize:'16px',color:'#febe40'}} />
                        </span>    
                    </p>
                    <p className="essay">
                    <img src={require('./gushi.jpg')} className="tx" alt="gushi" style={{height:'100%',width:'100%'}}/>
                    </p>
                    <p className="zan">
                        <span><em className="iconfont icon-like-fill" style={{fontSize:'16px',color:'#ffd2bb'}} /><em>19</em></span><span style={{float:'right'}}><em>13</em>评论·<em>14262</em>浏览</span>
                    </p>
                    <p className="discuss">
                        <span><em className="iconfont icon-like" style={{fontSize:'16px',color:'#cdcdcd'}} />赞</span>
                        <span><em className="iconfont icon-message-fill" style={{fontSize:'16px',color:'#cdcdcd'}} />评论</span>
                        <span><em className="iconfont icon-share" style={{fontSize:'16px',color:'#cdcdcd'}} />分享</span>
                    </p>
                    <p className="speak">
                        <span><em>远未见底</em>回复<em>雲狄</em> ：你好啊！</span>
                        <span><em>雲狄</em>回复<em>远未见底</em> ：你也好！</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Condition;