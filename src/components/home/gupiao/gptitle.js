import React from 'react';
import './gptitle.scss'
class GpTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { ...props },
            text: [
                "变化",
                "换手率",
                "类型",
                "状况",
                "拥有",
                "属于",
                "名字",
                "标价",
                "交易价",
                "盈利",
                "市价",
                "面值",
                "成交量",
                "证券",
                "走向",
                "趋势",
                "观望",
                "最高价",
                "最低价",
                "对比",
                "涨跌",
                "数据价格",
                "上市价",
                "市净率",
                "周期",
                "变化比率"
            ]
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps === this.props) {
            console.log(123)
        } else {
            this.setState({
                data: {
                    ...nextProps
                },
                arr: { ...nextProps.quote }
            })
        }
    }
    render() {
        return (
            <ul className="gpul">
                {
                    this.state.data.quote !== undefined ? Object.keys(this.state.data.quote).map((item, idx) => {
                        return (
                            idx > 2 ?
                                <li key={idx} >
                                    <span>{this.state.text[idx - 5]}</span>
                                    <span className={idx < 8 ? "gpredcolor" : "gpspan"}>{item === "mv" ? (this.state.data.quote[item] / 1000000).toFixed(2) + "万" : this.state.data.quote[item]}</span>
                                </li> : ""
                        )
                    }) : ""
                }
            </ul>
        )
    }
}

export default GpTitle;