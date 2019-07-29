import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './carousel.scss'

export default class ConsultCarousel extends React.Component {

    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['https://pubimg.futunn.com/2019072701210357753ec6f6d13.jpg', 'https://pubimg.futunn.com/2019072601208934a229f6517cb.jpg', 'https://pubimg.futunn.com/201907260120882692bca10ff54.jpg'],
            });
        }, 100);
    }
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    autoplayInterval={2000}
                    cellSpacing={5}
                    slideWidth={0.9}
                   
                >
                    {this.state.data.map(val => (
                        <button
                            key={val}
                            href="###"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`${val}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </button>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}



