import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Service from'../Page/Service';

export default class ContentB extends React.Component{
    render(){
        return(
            <div>
                <p>Layout B</p>
                <br/>

               <Switch>
                    <Route path='/service' component={Service}/>
                    <Route path='/contact' component={Service}/>
                </Switch> 
            </div>
        )
    }
}
