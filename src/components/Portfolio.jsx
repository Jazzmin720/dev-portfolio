import React from 'react';
import '../css/base.css';
import '../css/portfolio.css';
import '../css/pages.css';
import '../css/theme.css';
import Portfolio1 from '../assets/images/portfolio-1.jpg';
import Portfolio2 from '../assets/images/portfolio-2.jpg';
import Portfolio3 from '../assets/images/portfolio-3.jpg';
import Portfolio4 from '../assets/images/portfolio-4.jpg';
import Portfolio5 from '../assets/images/portfolio-5.jpg';
import Portfolio6 from '../assets/images/portfolio-6.jpg';
import Portfolio7 from '../assets/images/portfolio-7.jpg';
import Portfolio8 from '../assets/images/portfolio-8.jpg';

class Portfolio extends React.Component {
    render(){
        return(
            <div className= "portfolio-section">
                <div className= "container search-container">
                    <label for="search">
                        <input autocomplete="off" id="search" type="text" class="search-input" placeholder="Search"/>
                    </label>
    
                    <ul className="portfolio-filter-nav ul-default-none">
                        <li data-filter="all" class="filter-link active">All Work</li>
                        <li data-filter="web" class="filter-link">Web Development</li>
                        <li data-filter="app" class="filter-link">App Development</li>
                        <li data-filter="ui" class="filter-link">UI Design</li>
                    </ul>
                </div>
 
            <div className="portfolio-grid">
                <div className="portfolio-card" data-item="web" data-open="web-1">
                     <div className="card-body">
                         <img src={Portfolio1} alt="portfolio icon" />
                         <div className="card-popup-box">
                             <div>Web Development</div>
                             <h3>Food Website</h3>
                         </div>
                     </div>
                </div>
                <div className="portfolio-card"data-item="web" data-open="web-2">
                     <div className="card-body">
                         <img src={Portfolio2} alt="portfolio icon"/>
                         <div className="card-popup-box">
                             <div>Web Development</div>
                             <h3>Skate Website</h3>
                         </div>
                     </div>
                </div>
                <div className="portfolio-card"data-item="web" data-open="web-3">
                     <div className="card-body">
                         <img src={Portfolio3} alt="portfolio icon"/>
                         <div className="card-popup-box">
                             <div>Web Development</div>
                             <h3>Restaurant Website</h3>
                         </div>
                     </div>
                </div>
                <div className="portfolio-card"data-item="ui" data-open="ui-1">
                     <div className="card-body">
                         <img src={Portfolio4} alt="portfolio icon"/>
                         <div className="card-popup-box">
                             <div>UI Design</div>
                             <h3>Modern Designs</h3>
                         </div>
                     </div>
                </div>
                <div className="portfolio-card"data-item="app" data-open="app-1">
                 <div className="card-body">
                     <img src={Portfolio5} alt="portfolio icon"/>
                     <div className="card-popup-box">
                         <div>App Development</div>
                         <h3>Gaming App</h3>
                     </div>
                 </div>
            </div>
        <div className="portfolio-card"data-item="app" data-open="app-2">
                 <div className="card-body">
                     <img src={Portfolio6} alt="portfolio icon"/>
                     <div className="card-popup-box">
                         <div>App Development</div>
                         <h3>Gambling App</h3>
                     </div>
                 </div>
            </div>
        <div className="portfolio-card"data-item="app" data-open="app-3">
                 <div className="card-body">
                     <img src={Portfolio7} alt="portfolio icon"/>
                     <div className="card-popup-box">
                         <div>App Development</div>
                         <h3>Finance App</h3>
                     </div>
                 </div>
            </div>
        <div className="portfolio-card"data-item="ui" data-open="ui-2">
                 <div className="card-body">
                     <img src={Portfolio8} alt="portfolio icon"/>
                     <div className="card-popup-box">
                         <div>UI Design</div>
                         <h3>Responsive Designs</h3>
                     </div>
                 </div>
            </div>
         </div>
     </div>
        )
    }
}

export default Portfolio;