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
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                            
                        </li>
                        <li>
                            <Link to="/service">Service</Link>
                        </li>
                         <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                      
                    </ul>
                </nav>  
            </div> 
        )
    }
}
