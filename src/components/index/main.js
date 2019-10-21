import React from "react"
import axios from "axios"
import moment from "moment"

import Store from '../../Store/index'

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arr:[],
            brr:[],
            num:0,
            numb:0,
            date:""
        }
    }
    componentDidMount(){
        let ooo=[];
        let bb="";
        let mmm = document.getElementsByClassName("mmm");
        axios.get("/api/4/news/latest").then((res) => {
            this.setState({
                arr:res.data.stories,
                brr:[],
                date:res.data.date
            });
                if(250+mmm[0].clientHeight<document.documentElement.scrollHeight){
                    axios.get(`/api/4/news/before/${this.state.date}`).then((res) => {
                        bb=moment(res.data.date).format('YYYY年MM月DD');
                        ooo.push(
                            {
                                title:bb,
                                main:res.data.stories
                            }
                        );
                        this.setState({
                                brr: ooo,
                                date:res.data.date
                            }
                        );
                    });
                }
        });
            // window.addEventListener('scroll', this.gundong.bind(this,ooo,bb));
        window.onscroll=()=>{
            if(document.documentElement.scrollTop+ document.documentElement.clientHeight>=document.documentElement.scrollHeight){
                axios.get(`/api/4/news/before/${this.state.date}`).then((res) => {
                    bb=moment(res.data.date).format('YYYY年MM月DD');
                    ooo.push(
                        {
                            title:bb,
                            main:res.data.stories
                        }
                    );
                    this.setState({
                            brr: ooo,
                            date:res.data.date
                        }
                    );
                });
            }
            let scro=document.documentElement.scrollTop;
            let dt = Array.from(document.getElementsByTagName("dt"));
            if(scro>this.state.numb){
                this.state.numb=scro;
                if(dt[this.state.num]){
                    if(document.documentElement.scrollTop>=dt[this.state.num].offsetTop){
                        this.props.chan(dt[this.state.num].innerHTML);
                        this.setState({
                            num:++this.state.num
                        });
                    }
                }
            }else{
                this.state.numb=scro;
                if(dt[this.state.num]){
                    if(document.documentElement.scrollTop<dt[this.state.num].offsetTop){
                        if(this.state.num <=0){
                            this.props.chan("首页");
                            this.setState({
                                num:0
                            });
                        }else {
                            this.props.chan(dt[this.state.num-1].innerHTML);
                            this.setState({
                                num:--this.state.num
                            });
                        }
                    }
                }
            }
        }
    };
    /*gundong(ooo,bb){

            if(document.documentElement.scrollTop+ document.documentElement.clientHeight>=document.documentElement.scrollHeight){
                axios.get(`/api/4/news/before/${this.state.date}`).then((res) => {
                    bb=moment(res.data.date).format('YYYY年MM月DD');
                    ooo.push(
                        {
                            title:bb,
                            main:res.data.stories
                        }
                    );
                    this.setState({
                            brr: ooo,
                            date:res.data.date
                        }
                    );
                });
            }
            let scro=document.documentElement.scrollTop;
            let dt = Array.from(document.getElementsByTagName("dt"));
            if(scro>this.state.numb){
                this.state.numb=scro;
                if(dt[this.state.num]){
                    if(document.documentElement.scrollTop>=dt[this.state.num].offsetTop){
                        this.props.chan(dt[this.state.num].innerHTML);
                        this.setState({
                            num:++this.state.num
                        });
                    }
                }
            }else{
                this.state.numb=scro;
                if(dt[this.state.num]){
                    if(document.documentElement.scrollTop<dt[this.state.num].offsetTop){
                        if(this.state.num <=0){
                            this.props.chan("首页");
                            this.setState({
                                num:0
                            });
                        }else {
                            this.props.chan(dt[this.state.num-1].innerHTML);
                            this.setState({
                                num:--this.state.num
                            });
                        }
                    }
                }
            }

    }*/
    render(){
        return(
            <div>
                <dl className="mmm" ref={(el) => {
                    this.arr=el
                }}>
                    <dt className="dt1">今日热闻</dt>
                    {this.state.arr.map((val,ind) => {
                        return <dd key={ind} onClick={this.go.bind(this,val.id,val)}>
                            <p>{val.title}</p>
                            <img src={val.images} alt=""/>
                        </dd>
                    })}
                </dl>
                <div ref={(el) => {
                    this.brr=el
                }}>
                    {this.state.brr.map((val,ind) => {
                        return <dl className="mmm" key={ind}>
                            <dt className="dt1">{val.title}</dt>
                            {val.main.map((va,i) => {
                                return <dd key={i} onClick={this.go.bind(this,va.id,va)}>
                                    <p>{va.title}</p>
                                    <img src={va.images} alt=""/>
                                </dd>
                            })}
                        </dl>
                    })}
                </div>
            </div>
        )
    }
    go(x,i){
        window.onscroll=null;
        this.props.props.push({
            pathname:"/detail",
            state:{
                id:x,
                lll:i
            }
        })
    }
}

export default Main