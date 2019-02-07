import React from 'react';
import * as httprequest from './httprequest';
import Timebar from './timebar';
import * as image from './imgArray';
import Card from './card';
import { CSSTransitionGroup } from 'react-transition-group'; //ES6

// https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935 for React transition effects

const date = new Date();
const day = new Array(7);
day[0] = "Mon";
day[1] = "Tue";
day[2] = "Wed";
day[3] = "Thur";
day[4] = "Fri";
day[5] = "Sat";
day[6] = "Sun";

export default class Weatherbar extends React.Component {
    constructor() {
        super();
        this.state = {
            activeCardId: null,
            weatherDays: []
        };
    }

    RenderDaysAndTemperature = (location) => {
        var weatherDays = [];
        let count = date.getUTCDay() - 1;
        let id = 0
        for (var period of location.Period) {
            weatherDays.push({
                hightemp: period.Rep[0].Dm,
                lowtemp: period.Rep[1].Nm,
                weekday: day[count++],
                img: period.Rep[0].W,
                id: id++,
                //weekday: period.value
            });
            if (count > 6) {
                count = 0;
            }
        }
        this.setState({ weatherDays });
    }

    clickedOnCard = (id) => {
        console.log(id);
        //this.state.showTimeBar ? true : false;
        let newActiveCardId = id == this.state.activeCardId ? null : id;
        console.log(newActiveCardId);
        this.setState({
            showTimeBar: newActiveCardId != null,
            activeCardId: newActiveCardId,
        });

    }

    componentDidMount = () => {
        let resp = httprequest.getdailydata();
        resp.then((data) => {
            console.log(data.data.SiteRep);
            this.RenderDaysAndTemperature(data.data.SiteRep.DV.Location);
            // weather.push ({
            //     hightemp: data.data.SiteRep.DV.Location.Period[0].Rep[0].Dm,
            //     lowtemp: data.data.SiteRep.DV.Location.Period["0"].Rep[1].Nm,
            //     weekday: data.data.SiteRep.DV.Location.Period["0"].value
            // });
        });
    }

    render() {
        if (this.state.weatherDays.length > 0) {
            const weatherCards = this.state.weatherDays.map((item) => {
                return <Card
                    hightemp={item.hightemp}
                    lowtemp={item.lowtemp}
                    weekday={item.weekday}
                    img={image.getImg(item.img)}
                    id={item.id}
                    active={this.state.activeCardId == item.id}
                    clickedOnFunc={(id) => this.clickedOnCard(id)}
                />
            });
/*    
            const style = {
                clear: both;
                z-index: 10;
                position: relative;
                opacity: 1.0;
            }
*/
            return (
                <div>
                    {weatherCards}
                    <div className='timecontainer' >
                        {this.state.showTimeBar ?
                            <Timebar 
                            id={this.state.activeCardId} /> :
                             null
                        }
                    </div>            
                </div>
            );
        }
        else {
            return null;
        }

    }
}