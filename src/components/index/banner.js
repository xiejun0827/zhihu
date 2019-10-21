import React from "react"
import axios from "axios"

import {Carousel, WingBlank} from 'antd-mobile';

class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [1, 2, 3, 4, 5],
            imgHeight: 176,
            arr: [],
            crr: [],
        }
    }

    componentWillMount() {
        // simulate img loading
        axios.get("/api/4/news/latest").then((res) => {
            this.setState({
                data: res.data.top_stories,
                arr:res.data.stories
            });
            setTimeout(() => {
                this.setState({
                    data: this.state.data,
                });
            }, 100);
        })
    }

    render() {
        return (
            <div className="banner">
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        autoplayInterval={3000}
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        // afterChange={index => console.log('slide to', index)}}
                    >
                        {this.state.data.map((val, ind) => (
                            <a
                                key={ind}
                                href={val.url}
                                style={{display: 'inline-block', width: '100%', height: "2.12rem"}}
                                className="aaa"
                            >
                                <img
                                    src={val.image}
                                    alt=""
                                    style={{width: '100%', verticalAlign: 'top', height: "2.12rem"}}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({imgHeight: 'auto'});
                                    }}
                                />
                                <p>{val.title}</p>
                            </a>
                        ))
                        }
                    </Carousel>
                </WingBlank>
            </div>
        )
    }
}
export default Banner