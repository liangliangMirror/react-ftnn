import React from 'react';
import './Recommend.scss';

class Recommend extends React.Component {
    constructor(prpos){
        super(prpos)
            this.state={
                ren:[
                    {
                        id:1,
                        title:'雲狄',
                        time:'1小时前',
                        zan:'20',
                        img:require('./txtwo.jpg'),
                    },
                    {
                        id:2,
                        title:'桔梗',
                        time:'2小时前',
                        zan:'12',
                        img:require('./txcs.jpg'),
                    },
                    {
                        id:3,
                        title:'乐基',
                        time:'2小时前',
                        zan:'8',
                        img:require('./tz.jpg'),
                    }
                ],
                page:1,
                }
            }
    render() {
        return (
            <div className="recommendation">
                <ul className="sign">
                    <li><em className="iconfont icon-mobile-fill" style={{fontSize:'24px',background: '#006186'}} /><span>新手入门</span></li>
                    <li><em className="iconfont icon-barchart" style={{fontSize:'24px',background: '#0e105f'}} /><span>实盘专区</span></li>
                    <li><em className="iconfont icon-piechart-circle-fil" style={{fontSize:'24px',background: '#2169e6'}} /><span>新股专区</span></li>
                    <li><em className="iconfont icon-stock" style={{fontSize:'24px',background: '#ffdb91'}} /><span>财经专区</span></li>
                </ul>
                {
                    this.state.ren.map(item=>{
                        return (
                            <div className="interest" key={item.id}>
                                <p className="p"><span>你可能感兴趣</span><span><em className="iconfont icon-ellipsis" style={{fontSize:'24px'}} /></span></p>
                                <p className="portrait">
                                    <img src={item.img} className="tx" alt="头像"/>
                                    <span className="span"><em>{item.title}</em>参与了讨论</span>
                                    <span className="spant"><em className="iconfont icon-plus" style={{fontSize:'16px',color:'#50a6f2'}} />关注</span>
                                    <span className="spanr">{item.time}</span>    
                                </p>
                                <p className="essay">
                                    <span className="wei">#如何看待脸书缴付50亿美金罚金?</span>
                                    <span className="pin"><em>$Facebook(FB.US)$</em>还真的罚的不轻，然后那边反垄断又开始了...<em>$谷歌(GOOG.US)$ $苹果(AALS.US)$</em>都逃不了</span>
                                    <img src={require('./pin.jpg')} className="tx" alt="tu" style={{height:'2.5rem',margin:'0.5rem 0'}}/>
                                </p>
                                <p className="zan">
                                    <span><em className="iconfont icon-like-fill" style={{fontSize:'16px',color:'#ffd2bb'}} /><em>{item.zan}</em></span><span style={{float:'right'}}><em>2</em>评论·<em>10612</em>浏览</span>
                                </p>
                                <p className="discuss">
                                    <span><em className="iconfont icon-like" style={{fontSize:'16px',color:'#cdcdcd'}} />赞</span>
                                    <span><em className="iconfont icon-message-fill" style={{fontSize:'16px',color:'#cdcdcd'}} />评论</span>
                                    <span><em className="iconfont icon-share" style={{fontSize:'16px',color:'#cdcdcd'}} />分享</span>
                                </p>
                                <p className="speak">
                                    <span><em>杭州小卡西</em> : 也才跌了一个点</span>
                                    <span><em>chinyc</em> ：$5B真的不多。关键是不用上法庭。今天federal Trade Commiss的chair都说不多，但是如果上法庭还不一定拿到那么多。关键是要看以后要如何管理。目前的法律无法适用了</span>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Recommend;