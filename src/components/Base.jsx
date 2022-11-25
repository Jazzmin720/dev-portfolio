import React from 'react';
import '../css/base.css';
import { BiCodeAlt } from "react-icons/";

class Base extends React.Component {
    render(){
        return(
            <div className= "hero-background">
                <div className="container">
                    <div className= "hero-content">
                        <div className="code-icon">
                            <BiCodeAlt />
                        </div>
                        <h2 className="header-lg">Eat.Code.Sleep</h2>
                        <div className="sub-header">
                            Create meaningful solutions
                        </div>
                        <div className="btn btn-primary round-pill">
                            <a href="#" data-open="contact">Let's Talk Now</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
      
    
}

export default Base;