import React, { Component } from 'react';
import More from "./more"


class Column extends Component {
    render() {
        return (
            <div className="column" style={{ padding: "0.5em" }}>
                <More />
            </div>
        )
    }
}

export default Column;