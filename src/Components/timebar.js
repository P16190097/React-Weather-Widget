import React from 'react';
import * as httprequest from './httprequest';
import * as image from './imgArray';
import Hour from './hour';
import moment from 'moment'; //date package

export default class Timebar extends React.Component {
    constructor() {
        super();
        this.state = {
            weatherHours: []
        };
    }

    componentDidMount = async () => {
        this.fetchData();
    }

    componentDidUpdate = async (prevProps) => {
        if (prevProps.id !== this.props.id) {
            this.fetchData();
        }
    }

    fetchData = async () => {
        let timestamp = '';
        let data = '';
        await Promise.all([
            timestamp = await httprequest.getTimestamps(),
            data = await httprequest.gethourlydata()
        ]);
        this.RenderHoursAndTemperature(data.data.SiteRep.DV.Location, timestamp.data.Resource.TimeSteps);
    }

    RenderHoursAndTemperature = (templocation, timestamp) => {
        var weatherHours = [];
        let count = 0;
        if (this.props.id > 0) {
            count = ((this.props.id - 1) * 8) + templocation.Period[0].Rep.length;
        }
        console.log(timestamp);

        for (var rep of templocation.Period[this.props.id].Rep) {
            let localtime = moment(timestamp.TS[count]);
            let timecomponent = localtime.utc().format('HH:mm');
            weatherHours.push({
                time: timecomponent,
                temp: rep.F,
                img: rep.W,
            });

            count++;
        }
        this.setState({
            weatherHours
        });
    }

    render(props) {
        if (this.state.weatherHours.length > 0) {
            const hourCards = this.state.weatherHours.map((item) => {
                return <Hour
                    time={
                        item.time
                    }
                    temp={
                        item.temp
                    }
                    img={
                        image.getImg(item.img)
                    }
                />
            });

            return (<div> {hourCards} </div>);
        } else {
            return null;
        }
    };
}