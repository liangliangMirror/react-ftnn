import React from 'react';
import F2 from '@antv/f2';
class TimeSharingplan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: []
        }

    }
    componentDidMount() {
        this.updata(this.state.date)
    }
    updata(data) {
        var chart = new F2.Chart({
            id: 'myChart',
            width: 220,
            height: 260,
        });

        chart.source((data), {
            value: {
                tickCount: 5,
                min: 0
            },
            day: {
                range: [0, 1]
            }
        });
        chart.tooltip({
            showCrosshairs: true,
            showItemMarker: false,
            onShow: function onShow(ev) {
                var items = ev.items;
                items[0].name = null;
                items[0].value = '$ ' + items[0].value;
            }
        });
        chart.axis('day', {
            label: function label(text, index, total) {
                var textCfg = {};
                if (index === 0) {
                    textCfg.textAlign = 'left';
                } else if (index === total - 1) {
                    textCfg.textAlign = 'right';
                }
                return textCfg;
            }
        });
        chart.line().position('day*value');
        chart.render();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.list !== undefined ? this.state.date.length === nextProps.list.length : true) {
        } else {
            let data = [];
            nextProps.list.map(item =>
                data.push({
                    day: item.time,
                    value: item.price,
                })
            )
            this.setState({
                date: data
            })
            this.updata(data)
        }
    }
    render() {
        return (
            <div id="c1" >
                <canvas id="myChart" width="355" height="260" />
            </div>
        )
    }
}

export default TimeSharingplan;