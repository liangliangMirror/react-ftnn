import React from 'react';
import './sort.scss';
function Ii() {
    return (<i className="i">
        <i className="up icon"></i>
        <i className="down icon"></i>
    </i>)
}

class Sort extends React.Component {
    constructor() {
        super();
        this.state = {
            title: ["价格", "涨跌幅"]
        }
    }
    render() {
        return (
            <div className="sort">
                <div className="flex">
                    <span className="span">名称代码  <Ii /></span>
                    <p className="p">
                        {
                            this.state.title.map((item, idx) => {
                                return (<span className="span" key={idx}> {item}<i> <Ii /></i></span>)
                            })
                        }

                    </p>
                </div>
            </div>
        )
    }
}
export default Sort;