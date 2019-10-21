import React from "react"
import "../asstes/pin.css"
import moment from "moment"

class Pin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            flag1: [],
            flag2: [],
        }
    }

    render() {
        return (
            <div className="big">
                <div className="toppp">
                    <span className="iconfont icon-fanhuijiantou1" onClick={this.go.bind(this)}></span>
                    <span>{this.props.history.location.state.sum} 条点评</span>
                    <span className="iconfont icon-comment"></span>
                </div>
                <div className="pin-main">
                    <p>
                        {this.props.history.location.state.chang.length} 条长评
                    </p>
                </div>
                <div className="chang1" style={this.props.history.location.state.chang.length == 0 ? {display: ""}
                    : {display: "none"}}>
                    暂无长评
                </div>
                <ul className="pin-ul">
                    { this.props.history.location.state.chang.map((val, ind) => {
                        return <li key={ind}>
                            <img src={val.avatar} alt="" style={{height:"0.4rem"}}/>
                            <div className="pin-div1">
                                <div>
                                    <p>{val.author}</p>
                                    <span className="iconfont icon-zan1"> {val.likes}</span>
                                </div>
                                <div>
                                    {val.content}
                                </div>
                                <div style={!val.reply_to ? {height: "0"} : {height: ""}}>{val.reply_to ?
                                    <div>
                                        <p className={this.state.flag1[ind] ? "lll" : ""}>//{val.reply_to.author}：
                                            <span>
                                            {val.reply_to.content}
                                        </span>
                                        </p>
                                    </div> : ""}</div>
                                <div>
                                    <p>{moment(val.time).format('MM-DD HH:mm')}</p>
                                    <span onClick={this.iii.bind(this,ind)}
                                          style={val.reply_to ? {display: ""} : {display: "none"}}>{
                                        this.state.flag1[ind] ? "展开" : "收起"
                                    }</span>
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
                <div className="pin-main">
                    <p>
                        {this.props.history.location.state.duan.length} 条短评
                    </p>
                    <span onClick={this.ooo.bind(this)}>展开</span>
                </div>
                <ul className="pin-ul" style={!this.state.flag ? {} : {display: "none"}}>
                    { this.props.history.location.state.duan.map((val, ind) => {
                        return <li key={ind}>
                            <img src={val.avatar} alt="" style={{height:"0.4rem"}}/>
                            <div className="pin-div1">
                                <div>
                                    <p>{val.author}</p>
                                    <span className="iconfont icon-zan1"> {val.likes}</span>
                                </div>
                                <div>
                                    {val.content}
                                </div>
                                <div style={!val.reply_to ? {height: "0"} : {height: ""}}>{val.reply_to ?
                                    <div>
                                        <p className={this.state.flag2[ind] ? "lll" : ""}>//{val.reply_to.author}：
                                            <span>
                                            {val.reply_to.content}
                                        </span>
                                        </p>
                                    </div> : ""}
                                    </div>
                                <div>
                                    <p>{moment(val.time).format('MM-DD HH:mm')}</p>
                                    <span onClick={this.zzz.bind(this, ind)}
                                          style={val.reply_to ? {display: ""} : {display: "none"}}>{
                                        this.state.flag2[ind] ? "展开" : "收起"
                                    }</span>
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        let qqq = [];
        let www = [];
        this.props.history.location.state.chang.map((val, ind) => {
            qqq.push(true)
        });
        this.props.history.location.state.duan.map((val, ind) => {
            www.push(true)
        });
        this.setState({
            flag1: qqq,
            flag2: www,
        })
    }

    go() {
        this.props.history.go(-1)
    }

    ooo(e) {
        if (this.state.flag) {
            let top = e.target.offsetTop;
            let h =e.target.offsetHeight+11;
            e.target.innerHTML = "收起";
            setTimeout(()=>{
                document.documentElement.scrollTop = top-h
            },0)
        }else{
            document.documentElement.scrollTop = 0;
            e.target.innerHTML = "展开"
        }
        this.setState({
            flag: !this.state.flag
        })
    }

    iii(e) {
        let ooo = [];
        this.state.flag1.map((val, ind) => {
            ooo.push(true)
        });
        ooo[e] = !this.state.flag1[e];
        console.log(ooo);
        this.setState({
            flag1: ooo
        })
    }

    zzz(e) {
        let ooo = [];
        this.state.flag2.map((val, ind) => {
            ooo.push(true)
        });
        ooo[e] = !this.state.flag2[e];
        this.setState({
            flag2: ooo
        })
    }
}
export default Pin

// author: "鲍四十九"
// avatar: "http://pic4.zhimg.com/1355b30a4fccae680e55976f6ecb0d0b_im.jpg"
// content: "确实啊，很多城市的机动车道快上了房，自行车道简直巴掌宽宽。然后为了鼓励居民骑车，再专门修几条自行车健身道。自行车已经成了一项运动，而不太用作中长途通勤了。可能是经济发展的一个阵痛期吧。↵但是，毕竟现状不能靠键盘改变，自己的命还得自己小心。"
// id: 33420900
// likes: 0
// reply_to:
//     author: "对不起我是警察"
// content: "现在都是抓电动车上非机动车道，不抓机动车强占非机动车道，我就呵呵了"
// id: 33420828
// status: 0
// __proto__: Object
// time: 1571212312