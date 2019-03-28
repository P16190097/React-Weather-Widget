import React from 'react';

export default class Card extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        //document.getElementById(this.props.id).classList.toggle('active');
        this.props.clickedOnFunc(this.props.id);
    }

    render(props) {
        if (this.props.hightemp !== "")
            return (
                <div>
                    <div className={this.props.active ? 'card active' : 'card'} id={this.props.id} onClick={this.onClick} >
                        <p className='weekday'><strong>{this.props.weekday}</strong></p>
                        <div className='imgcontainer'>
                            <img src={this.props.img} alt="logo" className='img' />
                        </div>
                        <p className="temps">High: <strong>{this.props.hightemp}°C</strong><br />Low: {this.props.lowtemp}°C</p>
                    </div>
                </div>
            )
        else
            return null
    }
}