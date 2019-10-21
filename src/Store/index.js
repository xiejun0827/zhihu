import {Dispatcher} from "flux"

import EventEmitter from "events"

// class State extends EventEmitter{
//     name=[];
//     str=123;
// }
// let state = new State();
let state={
    name:[],
    // flag:true
};

let dispatcher = new Dispatcher;

dispatcher.register((a) => {
    switch (a.aType){
        case  "aName":
            state.name =a.aParams ;
            // state.emit("chan");
            //通过emit来监听进来的东西是否是 ***  来触发事件
            break;
    }
});

export default {
    state,
    dispatcher
}