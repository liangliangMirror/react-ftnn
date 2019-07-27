import React from 'react';
import axios from 'axios';
import './Column.scss';

class Column extends React.Component {
    constructor(prpos){
        super(prpos)
        this.state={
            mm:[],
            page:1,
        }
        this.getdata = this.getdata.bind(this)
        this.gun = this.gun.bind(this)
    }
    async getdata() {

        let mm = (await axios.get("https://cnodejs.org/api/v1/topics", {
            params: {
                limit: 25,
                page: this.state.page
            }
        })).data.data

        // 延迟加载
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 500);
        })

        console.log(mm)

        this.setState({
            mm: [...this.state.mm, ...mm],
            page: ++this.state.page
        })
    }
    gun() {
        let scrollTop =
            document.documentElement.scrollTop || document.getElementsByClassName("more")[0].scrollTop;

        let windowHeight = document.getElementsByClassName("more")[0].clientHeight;

        let scrollHeight = document.getElementsByClassName("more")[0].scrollHeight;

        let ih = scrollHeight - scrollTop - windowHeight

        if (ih <= 1) {
            this.getdata()
        }
    }

    componentWillMount() {
        this.getdata();
    }
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
                {
                    this.state.mm.map(item => {
                        return (
                        <div className="journalism" key={item.id}>
                            <p className="portrait">
                                <img src={item.author.avatar_url} className="tx" alt="头像"/>
                                <span><em>{item.author.loginname}</em><em style={{color:'#d8d8d8'}}>{item.last_reply_at}</em></span>
                                <span className="span">{item.title}</span>
                                <span style={{width:'25%',height:'5rem',float:'right'}}><img style={{width:'100%',height:'100%'}} src={require('./keji.jpg')} alt="头像"/></span>
                                <span className="spacing">澳大利亚竞争监管机构(ACCC)周四发表声明，对ANZ Termials Pty Ltd 计划收购Graincorp Limited (ASCO)</span>
                            </p>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Column;