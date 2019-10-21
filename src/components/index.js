import React from "react"
import Banner from "./index/banner"
import Main from "./index/main"
import "../asstes/index.css"


import Router from "../router/public"
import One from "../router/one"

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            a:"首页",
            flag:false
        }
    }
    render(){
        return(
            <div className="big" style={{background:"#f3f3f3f"}}>
                <div className="top">
                    <span className="iconfont icon-quanbu" onClick={this.letf.bind(this)}></span>
                    <span>{this.state.a}</span>
                    <span className="iconfont icon-lingdang"></span>
                    <span className="iconfont icon-shenglvehao"></span>
                </div>
                <Banner/>
                <Router ooo={One}/>
                <Main chan={this.ooo.bind(this)} props={this.props.history}/>
            </div>
        )
    }

    componentWillUnmount() {
        // 卸载异步操作设置状态
        clearTimeout(this.timeouter)
        this.setState = (state, callback) => {
            return
        }
    }
    ooo(x){
        this.setState({
            a:x
        })
    }
    letf(){
        console.log(this.el);
        document.body.style.overflow ="hidden";
        this.props.history.push({
            pathname:"/index/left",
            state:true,
        })
    }
}
export default Index