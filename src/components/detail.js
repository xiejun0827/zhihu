import React from "react"
import "../asstes/detail.css"
import axios from "axios"
import Store from "../Store/index"

let sum = 0;
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: "",
            brr: "",
            c: "",
            d: "",
            e: "",
            flag: true,
            flag1: true,
            flag2: true,
            s1: 0,
            s2: 0,
            s3: 0,
            color: [
                {
                    color: "#f13f19",
                    name: "iconfont icon-weibo",
                    title: "新浪微博"
                },
                {
                    color: "#60c84f",
                    name: "iconfont icon-weixin",
                    title: "微信"
                },
                {
                    color: "#68ca15",
                    name: "iconfont icon-weixinpengyouquan",
                    title: "微信朋友圈"
                },
                {
                    color: "#5ab540",
                    name: "iconfont icon-fenxiang_yinxiangbiji",
                    title: "印象笔记"
                },
                {
                    color: "#30a1ed",
                    name: "iconfont icon-youdaoyunbiji",
                    title: "有道云笔记"
                },
                {
                    color: "#2369c8",
                    name: "iconfont icon-qq",
                    title: "QQ"
                },
                {
                    color: "#7f7f7f",
                    name: "iconfont icon-gengduo",
                    title: "更多平台"
                }
            ],
            mrr:Store.state.name
        };
    }
    render() {
        sum = String(this.state.s1.length + this.state.s2.length);
        setTimeout(() => {
            this.dis()
        }, 0);
        return (
            <div className="big">
                <div className="topp">
                    <span className="iconfont icon-fanhuijiantou1" onClick={this.go.bind(this)}></span>
                    <span>{"详情"}</span>
                    <span className="iconfont icon-fenxiang" onClick={this.fen.bind(this)}></span>
                    <span className="iconfont icon-shoucang1"
                          onClick={this.xin.bind(this)}
                          style={this.state.flag1 ? {color: "#fff"} : {color: "yellow"}}></span>
                    <span className="iconfont icon-pinglun3" onClick={this.pin.bind(this)}></span>
                    <span>{sum}</span>
                    <span className="iconfont icon-zan1" onClick={this.zan.bind(this)}
                          style={this.state.flag2 ? {color: "#fff"} : {color: "red"}}></span>
                    <span>{this.state.s3}</span>
                </div>
                <link href={this.state.brr} rel="stylesheet"/>
                <div dangerouslySetInnerHTML={{__html: this.state.arr}}></div>
                <div className={this.state.flag ? "fen active" : "fen"} onClick={this.ooo.bind(this)}>
                    <dl className="bbb">
                        <dt>分享</dt>
                        {this.state.color.map((val, ind) => {
                            return <dd key={ind}>
                                <div style={{background: val.color}}>
                                    <span className={val.name}></span>
                                </div>
                                <i>{val.title}</i>
                            </dd>
                        })}
                    </dl>
                </div>
            </div>
        )

    }
    dis() {
        let as = document.getElementsByClassName('img-place-holder');
        if (as[0] != undefined) {
            as[0].style.position = "relative";
            as[0].innerHTML = `<img src=${this.state.c} style="height: 2rem;width: 3.75rem"/>
                              <p style="position: absolute;bottom:0;color: white;font-size: 0.22rem
                             ;padding: 0 0.1rem;line-height: 0.3rem">${this.state.d}</p>
                             <p style="position: absolute;bottom: -0.1rem;right:0.1rem;color: #999">${this.state.e}</p> `
        }
    }
    componentDidMount() {
        // let xxx =this.state.mrr.some((val,ind) => {
        //    if(val.id ==this.props.history.location.state.lll.id){
        //        return true
        //    }else {
        //        return false
        //    }
        // });
         if(JSON.stringify(Store.state.name).indexOf(JSON.stringify(this.props.history.location.state.lll)) !== -1){
            this.setState({
                flag1:false
            })
        }
        axios.get(`/api/4/news/${this.props.history.location.state.id}`).then(
            (res) => {
                this.setState({
                    arr: res.data.body,
                    brr: res.data.css,
                    c: res.data.image,
                    d: res.data.title,
                    e: res.data.image_source
                });

            }
        );
        axios.get(`/api/4/story/${this.props.history.location.state.id}/long-comments`).then(
            (res) => {
                this.setState({
                    s1: res.data.comments
                });

            }
        );
        axios.get(`/api/4/story/${this.props.history.location.state.id}/short-comments`).then(
            (res) => {
                this.setState({
                    s2: res.data.comments
                });

            }
        );
        axios.get(`/api/4/story-extra/${this.props.history.location.state.id}`).then(
            (res) => {
                this.setState({
                    s3: res.data.popularity
                });

            }
        )

    }

    go() {
        document.documentElement.scrollTop=0;
        this.props.history.go(-1)
    }

    fen() {
        document.body.style.overflow = "hidden";
        this.setState({
            flag: false
        });
    }

    ooo() {
        document.body.style.overflow = "";
        this.setState({
            flag: true
        });
    }

    xin() {
        let nnn  = this.state.mrr;
        this.setState({
            flag1: !this.state.flag1
        });
        if(this.state.flag1){
            nnn.push(this.props.history.location.state.lll);
            Store.dispatcher.dispatch({
                aType: "aName",
                aParams: nnn
            });
        }else {
            nnn.splice(nnn.indexOf(this.props.history.location.state.lll),1);
            Store.dispatcher.dispatch({
                aType: "aName",
                aParams: nnn
            });
        }
    }

    pin() {
        this.props.history.push(
            {
                pathname: "/pin",
                state: {
                    id: this.props.history.location.state.id,
                    sum,
                    chang: this.state.s1,
                    duan: this.state.s2,
                }
            }
        )
    }

    zan() {
        this.setState({
            flag2: !this.state.flag2
        });
        if (this.state.flag2) {
            this.setState({
                s3: ++this.state.s3
            });
        } else {
            this.setState({
                s3: --this.state.s3
            });
        }
    }
}
export default Detail