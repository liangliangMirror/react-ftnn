import React from 'react';
import './Classroom.scss';

class Classroom extends React.Component {
    constructor(prpos){
        super(prpos)
        this.state={
            gu:[
                {
                    id:1,
                    titles:'股票基本知识',
                    title:'交易规则、如何交易、如何收费',
                    img:require('./tz.jpg'),
                    time:'201995'
                },
                {
                    id:2,
                    titles:'投资基本知识',
                    title:'如何看准时机下手应该下手的股票',
                    img:require('./tz2.jpg'),
                    time:'199220'
                }
            ],
            piao:[
                {
                    id:1,
                    titles:'投资的方法',
                    title:'投资规则、如何投资、如何抛出',
                    img:require('./tz.jpg'),
                    time:'63512'
                },
                {
                    id:2,
                    titles:'如何分辨好股坏股',
                    title:'怎么看准时机去抓取股票，如何出手',
                    img:require('./tz2.jpg'),
                    time:'51344'
                }
            ],
            jiao:[
                {
                    id:1,
                    titles:'谷歌赔偿股份下降',
                    title:'谷歌经过一系列事件决定付出赔付',
                    img:require('./tz.jpg'),
                    time:'124563'
                },
                {
                    id:2,
                    titles:'牛熊股票的时机',
                    title:'如何看准时机下手最飘得股票',
                    img:require('./tz2.jpg'),
                    time:'999221'
                }
            ],
            page:1,
        }
    }
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
                    {
                        this.state.gu.map(item=>{
                            return (
                            <div className="door" key={item.id}>
                                <p><img src={item.img} alt="投资"/></p>
                                <p style={{background:'white',margin:'0 1rem',lineHeight:'1.2rem'}}>
                                    <em style={{fontSize:'16px',color:'black'}}>{item.titles}</em><br />
                                    <span style={{fontSize:'12px'}}>{item.title}</span><br />
                                    <><span style={{fontWeight:'500',color:'#bb000b'}}>{item.time}</span><span>次播放</span></>
                                </p>
                            </div>
                            )
                        })
                    }
                </div>
                <div className="noob">
                    <><span></span><span>投资分析基础</span></>
                    {
                        this.state.piao.map(item=>{
                            return (
                            <div className="door" key={item.id}>
                                <p><img src={item.img} alt="投资"/></p>
                                <p style={{background:'white',margin:'0 1rem',lineHeight:'1.2rem'}}>
                                    <em style={{fontSize:'16px',color:'black'}}>{item.titles}</em><br />
                                    <span style={{fontSize:'12px'}}>{item.title}</span><br />
                                    <><span style={{fontWeight:'500',color:'#bb000b'}}>{item.time}</span><span>次播放</span></>
                                </p>
                            </div>
                            )
                        })
                    }
                </div>
                <div className="noob">
                    <><span></span><span>热点专题</span></>
                    {
                        this.state.jiao.map(item=>{
                            return (
                            <div className="door" key={item.id}>
                                <p><img src={item.img} alt="投资"/></p>
                                <p style={{background:'white',margin:'0 1rem',lineHeight:'1.2rem'}}>
                                    <em style={{fontSize:'16px',color:'black'}}>{item.titles}</em><br />
                                    <span style={{fontSize:'12px'}}>{item.title}</span><br />
                                    <><span style={{fontWeight:'500',color:'#bb000b'}}>{item.time}</span><span>次播放</span></>
                                </p>
                            </div>
                            )
                        })
                    }
                </div>
                <p className="foots"><img src={require('./ktfoot.jpg')} alt="选择我们"/></p>
            </div>     
        )
    }
}

export default Classroom;