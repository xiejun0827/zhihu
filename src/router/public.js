import React from "react"
import {Route,Switch,Redirect} from "react-router-dom"




let Router = (props) => {
    return(
        <div>
            <Switch>
                {props.ooo.map((val,ind) => {
                    if(val.path==="*")
                        return <Redirect key={ind} to={val.redirect}/>;
                    else
                        return  <Route key={ind} path={val.path} component={val.component} />
                })}
            </Switch>
        </div>
    )
};


export default Router