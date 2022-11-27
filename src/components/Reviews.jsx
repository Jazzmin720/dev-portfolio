import React from 'react';
import '../css/base.css';
import '../css/portfolio.css';
import '../css/pages.css';
import '../css/theme.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

class Reviews extends React.Component{
    render(){
        return(
            <div className="reviews">
                <div className="review-title">What People Say</div>
                <h2 className="header-md">Trusted by Clients</h2>
                <div className="review-preview">
                    <img src="./assets/week 8 image assets/cube.png" alt="cube"/>
            </div>  
            <div className="review-carousel">
                <div className="review-item ">
                    <div className="review-text">
                    #1 Voluptate aute qui aute ex dolor culpa officia nulla nisi quis ea mollit exercitation.
                    </div>
                    <div className="review-author">
                        <div className="avatar">
                            <img src="./assets/week 8 image assets/ava-1.jpg" alt="avatar"/>
                        </div>          
                        <div className="details">
                            <div className="name">Jack Bower</div>
                            <div className="company">Skate World-Wide</div>
                        </div>
                    </div>
                </div>
                <div className="review-item ">
                    <div className="review-text">
                    #2 Voluptate aute qui aute ex dolor culpa officia nulla nisi quis ea mollit exercitation.
                    </div>
                    <div className="review-author">
                        <div className="avatar">
                            <img src="./assets/week 8 image assets/ava-1.jpg" alt="avatar"/>
                        </div>          
                        <div className="details">
                            <div className="name">Tabitha Walker</div>
                            <div className="company">KBN News</div>
                        </div>
                    </div>
                </div>
                <div className="review-item">
                    <div className="review-text">
                    #3 Voluptate aute qui aute ex dolor culpa officia nulla nisi quis ea mollit exercitation.
                    </div>
                    <div className="review-author">
                        <div className="avatar">
                            <img src="./assets/week 8 image assets/ava-1.jpg" alt="avatar"/>
                        </div>          
                        <div className="details">
                            <div className="name">Marc White</div>
                            <div className="company">Porsche of Virginia</div>
                        </div>
                    </div>
                </div>
                <div className="review-item ">
                    <div className="review-text">
                    #4 Voluptate aute qui aute ex dolor culpa officia nulla nisi quis ea mollit exercitation.
                    </div>
                    <div className="review-author">
                        <div className="avatar">
                            <img src="./assets/week 8 image assets/ava-1.jpg" alt="avatar"/>
                        </div>          
                        <div className="details">
                            <div className="name">Alexa Brown</div>
                            <div className="company">Brown Realty Group</div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="slide-control-container">
            <button>
                <ArrowBackIcon/>
            </button>
            <button>
                <ArrowForwardIcon/>
            </button>

            </div>

    </div>
        
        )
    }
}

export default Reviews;