import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as httprequest from './Components/httprequest';
import Weatherbar from'./Components/weatherbar';

class Page extends React.Component {

    render() {
        return (
            <div className='weather-app'>
                <Weatherbar />
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Page />,
    document.getElementById('root'),
    console.log(httprequest.getdailydata()),
    console.log(httprequest.gethourlydata()),
    console.log(httprequest.getTimestamps()),
);