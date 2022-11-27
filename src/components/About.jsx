import React from 'react';
import '../css/base.css';
import '../css/portfolio.css';
import '../css/pages.css';
import '../css/theme.css';

class About extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="full-site-modal page-block" id="about"  data-animation="zoomInOut">
                    <div className="container-fluid">
                        <div className="modal-header">
                            <h3>About Page</h3>
                            
                        </div>
                        <div className="modal-body" >
                            <div className="image-wrapper">
                                <img src="./assets/img4.jpg" alt="headshot"/>
                            </div>
                
                            <div className="about-text">
                                <h2 className="header-md">Jack Bower</h2>
                                <p>Full stack developer based in Texas, USA.</p>
                                <p>Text2</p>
                                <div className="contact-me-block">
                                    <div>Email Me</div>
                                    <a href = 'mailto:swanton025@yahoo.com'>swanton025@yahoo.com</a>
                                </div>
                            </div>
                        </div>
                
                        <div className="marquee">
                            <ul className="marquee-content">
                                
                            </ul>
                        </div> 
                    </div>
                </div>
            
            
            
                <div className="full-site-modal page-block " id="contact"  data-animation="zoomInOut">
                    <div className="container-fluid">
                        <header className="modal-header">
                            <h3>Contact Page</h3>
                            
                        </header>
                        <div className= "modal-body">
                            <div className="context-text">
                                <h2 className="header-md">Jack Bower</h2>
                                <div>Have a project or question? Send me a message.</div>
                                <div>I will reply within 48 hours.</div>
                            </div>
                            <div className="folio-form">
                                <input className="form-control" name="name" type="text" placeholder="name"/>
                                <input className="form-control" name="email"type="email"placeholder="email"/>
                                <input className="form-control" name="subject"type="text"placeholder="subject"/>
                                <textarea className="form-control" name="message" cols="30" rows="3" placeholder="write your messsage"></textarea>
                                <input type="submit" value="send" class="btn btn-primary round-pill"/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    
        )
    }
}

export default About;