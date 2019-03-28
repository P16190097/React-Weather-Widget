import React from 'react';

export default class Hour extends React.Component {
    render(props) {
        return (
            <div className='hourcontainer'>
                <p className='weekday'>{this.props.time}</p>
                <img src={this.props.img} alt="logo" className='img' />
                <p className='feelsliketemp'>Feels like: <br/><strong>{this.props.temp}°C</strong></p>
            </div>
        );
    };
}