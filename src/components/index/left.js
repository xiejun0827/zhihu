import React from "react"

import '../../../node_modules/animate.css/animate.css';

class Left extends React.Component{
    constructor(props){
        super(props);
        this.state={
            flag:true
        }
    }
    render(){
        return(
            <div className="index-left animated bounceInLeft" ref={(el) => {
                this.el =el
            }}>
                <div className="one">
                    <div className="one1">
                        <div className="one11">
                            <img src="http://img2.imgtn.bdimg.com/it/u=3615831237,1510664097&fm=26&gp=0.jpg" alt=""/>
                            <span>阿阿阿阿阿阿阿</span>
                        </div>
                        <div className="one12">
                            <div onClick={this.shou.bind(this)}>
                                <span className="iconfont icon-shoucang"></span>
                                <span>我的收藏</span>
                            </div>
                            <div>
                                <span className="iconfont icon-xiazai2"></span>
                                <span>离线下载</span>
                            </div>
                        </div>
                    </div>
                     <div className="one2" onClick={this.ooo.bind(this)}>
                         <span className="iconfont icon-shouye"></span>
                         <span>首页</span>
                     </div>
                </div>
                <div className="two" onClick={this.ooo.bind(this)}></div>
            </div>
        )
    }
    ooo(){
        console.log(this.el);
        this.el.className ="index-left animated bounceOutRight";
        document.body.style.overflow ="";
        this.props.history.push({
            pathname:"/index",
        })
    }
    shou(){
        this.props.history.push({
            pathname:"/shou",
        })
    }
}

export default Left


// https://github.com/xiejun0827/yangdian.git