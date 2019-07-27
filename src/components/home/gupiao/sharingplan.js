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
        // let data = this.state.date

        this.updata(this.state.date)
    }
    updata(data) {
        var chart = new F2.Chart({
            id: 'myChart',
            width: 220,
            height: 260,
            // pixelRatio: window.devicePixelRatio
        });

        chart.source((data), {
            value: {
                tickCount: 10,
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
            console.log(nextProps.list)
            this.updata(data)
        }
    }
    componentDidUpdate() {
        // F2.Animate.registerAnimation('lineUpdate', function (updateShape, animateCfg) {
        //     var cacheShape = updateShape.get('cacheShape'); // 该动画 shape 的前一个状态
        //     var cacheAttrs = cacheShape.attrs; // 上一个 shape 属性
        //     var oldPoints = cacheAttrs.points; // 上一个状态的关键点
        //     var newPoints = updateShape.attr('points'); // 当前 shape 的关键点

        //     var oldLength = oldPoints.length;
        //     var newLength = newPoints.length;
        //     var deltaLength = newLength - oldLength;

        //     var lastPoint = newPoints[newPoints.length - 1];
        //     for (var i = 0; i < deltaLength; i++) {
        //         oldPoints.push(lastPoint);
        //     }

        //     updateShape.attr(cacheAttrs);
        //     updateShape.animate().to({
        //         attrs: {
        //             points: newPoints
        //         },
        //         duration: 800,
        //         easing: animateCfg.easing
        //     });
        // });

        // var data = [];
        // // 添加数据，模拟数据，可以指定当前时间的偏移的秒
        // function getRecord(offset) {
        //     offset = offset || 0;
        //     return {
        //         time: new Date().getTime() + offset * 1000,
        //         value: Math.random() + 10
        //     };
        // }

        // data.push(getRecord(-2));
        // data.push(getRecord(-1));
        // data.push(getRecord());

        // var chart = new F2.Chart({
        //     id: 'mountNode',
        //     pixelRatio: window.devicePixelRatio
        // });

        // var defs = {
        //     time: {
        //         type: 'timeCat',
        //         mask: 'HH:mm:ss',
        //         range: [0, 1]
        //     },
        //     value: {
        //         tickCount: 5,
        //         min: 8
        //     }
        // };
        // chart.source(data, defs);
        // chart.axis('time', {
        //     label: function label(text, index, total) {
        //         var textCfg = {
        //             text: ''
        //         };
        //         if (index === 0) {
        //             textCfg.textAlign = 'left';
        //             textCfg.text = text;
        //         } else if (index === total - 1) {
        //             textCfg.textAlign = 'right';
        //             textCfg.text = text;
        //         }
        //         return textCfg;
        //     }
        // });

        // chart.line().position('time*value').animate({
        //     update: {
        //         animation: 'lineUpdate'
        //     }
        // });

        // chart.render();

        // setInterval(function () {
        //     data.push(getRecord());
        //     chart.changeData(data);
        // }, 1000);
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