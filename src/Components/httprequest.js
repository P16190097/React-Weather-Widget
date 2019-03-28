import axios from 'axios';

export function getTimestamps() {
    return axios.get('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/capabilities?res=3hourly&key=09f593ed-bb11-47aa-b7c2-f473aaf8e38f')
        .catch(function (error) {
            console.log('ERROR: ' + error);
        });
}
export function getdailydata() {
    return axios.get('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/354298?res=daily&key=09f593ed-bb11-47aa-b7c2-f473aaf8e38f')
        .catch(function (error) {
            console.log('ERROR: ' + error);
        });
}
export function gethourlydata() {
    return axios.get('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/354298?res=3hourly&key=09f593ed-bb11-47aa-b7c2-f473aaf8e38f')
        // .then(function (response) {
        //     return response;
        // })
        .catch(function (error) {
            console.log('ERROR: ' + error);
        });
}