import React from "react"
import Router from "../router/public"
import One from "../router/one"
import Store from "../Store/index"

import "../asstes/shou.css"
class Shou extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mrr:Store.state.name
        }
    }
    render(){
        return(
            <div className="big">
                <div className="toppppp">
                    <span className="iconfont icon-quanbu" onClick={this.letf.bind(this)}></span>
                    <span>{this.state.mrr.length} 条收藏</span>
                </div>
                <ul>
                    {this.state.mrr.map((val,ind) => {
                        return <li key={ind} onClick={this.go.bind(this,val.id,val)}>
                            <p>{val.title}</p>
                            <img src={val.images} alt=""/>
                        </li>
                    })}
                </ul>
                <Router ooo={One}/>
            </div>
        )
    }
    componentDidMount(){

    }
    go(x,i){
        window.onscroll=null;
        this.props.history.push({
            pathname:"/detail",
            state:{
                id:x,
                lll:i
            }
        })
    }
    letf(){
        document.body.style.overflow ="hidden";
        this.props.history.push({
            pathname:"/shou/left",
            state:true,
        })
    }
}
export default Shou