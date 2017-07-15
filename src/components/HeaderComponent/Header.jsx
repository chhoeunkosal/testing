import React from 'react';
import {
  Link,
}from 'react-router-dom';
export default class Header extends React.Component{
    render(){
        return(
            <div className="header">
               <nav className="nav">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                        <li>
                            <a href="#">Content</a>
                        </li>
                      
                    </ul>
                </nav>  
            </div> 
        )
    }
}
