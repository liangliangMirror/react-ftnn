import React, { Component } from 'react';
import axios from 'axios';
import './more.scss';
// import ConsultCarousel from '../news/carousel';

class More extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            page: 1,
        }

        this.getdata = this.getdata.bind(this)
        this.gun = this.gun.bind(this)
    }

    async getdata() {

        let news = (await axios.get("https://cnodejs.org/api/v1/topics", {
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

        console.log(news)

        this.setState({
            news: [...this.state.news, ...news],
            page: ++this.state.page
        })
    }

    gun() {
        let scrollTop =
            document.documentElement.scrollTop || document.getElementsByClassName("more")[0].scrollTop;

        let windowHeight = document.getElementsByClassName("more")[0].clientHeight;
        // document.documentElement.clientHeight || document.getElementsByClassName("more")[0].clientHeight;

        let scrollHeight = document.getElementsByClassName("more")[0].scrollHeight;
        // document.documentElement.scrollHeight || document.getElementsByClassName("more")[0].scrollHeight;

        let ih = scrollHeight - scrollTop - windowHeight

        console.log(scrollTop, windowHeight, scrollHeight, ih)

        if (ih <= 1) {
            this.getdata()
        }
    }

    componentWillMount() {
        this.getdata();
    }

    render() {
        return (
            <div className="more" onScroll={this.gun}>
                {/* 渲染template */}
                {/* <div className="more-item">
                    <div className="more-item-up">
                        <div className="more-item-up-left">
                            <div className="head">
                                <img src="https://pubimg.futunn.com/20190725012052472bd14392008.png" alt="" />
                                <span>江涵视野</span>
                            </div>
                        </div>
                        <div className="more-item-up-right">
                            <span className="time">07-24 21:00</span>
                        </div>
                    </div>

                    <div className="more-item-dowm">
                        <div className="more-item-left">
                            <h3>50亿美元罚款--细看Facebook七宗罪</h3>
                            <p>美国啊实打实的asdasd 按时打算打算啊实打实的按时打算打算多阿萨德</p>
                        </div>
                        <div className="more-item-right">
                            <img className="item-img" src="https://pubimg.futunn.com/20190725012052024b6ac294865.jpg" alt="" />
                        </div>
                    </div>
                </div> */}
                {
                    this.state.news.map(item => {
                        return (
                            <div className="more-item" key={item.id}>
                                <div className="more-item-up">
                                    <div className="more-item-up-left">
                                        <div className="head">
                                            <img src={item.author.avatar_url} alt="" />
                                            <span>{item.author.loginname}</span>
                                        </div>
                                    </div>
                                    <div className="more-item-up-right">
                                        <span className="time">{item.last_reply_at.slice(5, 19)}</span>
                                    </div>
                                </div>

                                <div className="more-item-dowm">
                                    <div className="more-item-left">
                                        <h3>{item.title}</h3>
                                        <p>美国啊实打实的asdasd 按时打算打算啊实打实的按时打算打算多阿萨德</p>
                                    </div>
                                    <div className="more-item-right">
                                        <img className="item-img" src="https://pubimg.futunn.com/20190725012052024b6ac294865.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default More;


