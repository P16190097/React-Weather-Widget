const defaultpath = '/imgs/Weather-App/';
const type = new Array(31);
type[0] = defaultpath + 'clear-night.png';
type[1] = defaultpath + 'sunny-day.png';
type[2] = defaultpath + 'partly-cloudy-night.png';
type[3] = defaultpath + 'sunny-intervals.png';
type[4] = defaultpath + 'no-data.png';
type[5] = defaultpath + 'mist.png';
type[6] = defaultpath + 'fog.png';
type[7] = defaultpath + 'cloudy.png';
type[8] = defaultpath + 'overcast.png';
type[9] = defaultpath + 'light-rain-shower-night.png';
type[10] = defaultpath + 'light-rain-shower-day.png';
type[11] = defaultpath + 'drizzle.png';
type[12] = defaultpath + 'light-rain.png';
type[13] = defaultpath + 'heavy-rain-shower-night.png';
type[14] = defaultpath + 'heavy-rain-shower-day.png';
type[15] = defaultpath + 'heavy-rain.png';
type[16] = defaultpath + 'sleet-shower-night.png';
type[17] = defaultpath + 'sleet-shower-day.png';
type[18] = defaultpath + 'sleet.png';
type[19] = defaultpath + 'hail-shower-night.png';
type[20] = defaultpath + 'hail-shower-day.png';
type[21] = defaultpath + 'hail.png';
type[22] = defaultpath + 'light-snow-shower-night.png';
type[23] = defaultpath + 'light-snow-shower-day.png';
type[24] = defaultpath + 'light-snow.png';
type[25] = defaultpath + 'heavy-snow-shower-night.png';
type[26] = defaultpath + 'heavy-show-shower-day.png';
type[27] = defaultpath + 'heavy-snow.png';
type[28] = defaultpath + 'thunder-shower-night.png';
type[29] = defaultpath + 'thunder-shower-day.png';
type[30] = defaultpath + 'thunder.png';

export function getImg(i) {
    if (i === 'NA'){
        return type[4];
    }
    else{
        return type[i];
    }
};