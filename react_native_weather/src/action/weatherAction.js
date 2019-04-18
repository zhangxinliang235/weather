import * as TYPES from "../types";
export function getWeather(name){
// export function getWeather(self){
    return dispatch => {
        // const name = self.props.selectCity?self.props.selectCity:"上海"
        return fetch("https://free-api.heweather.com/v5/weather?key=19713447578c4afe8c12a351d46ea922&city="+name)
        .then((response)=>{
            if(response.ok){
                return response.json();
            }
        })
        .then((jsonData)=>{
            dispatch(changeWeather(jsonData.HeWeather5[0]));
        }).done
    };
}
export function changeWeather(weatherList) {
  return {
    type: TYPES.WEATHER_LIST,
    text: weatherList
  };
}
export function getForecast(name){
    return dispatch => {
        return fetch("https://free-api.heweather.net/v5/forecast?city="+name+"&key=19713447578c4afe8c12a351d46ea922")
        .then((response)=>{
            if(response.ok){
                return response.json();
            }
        })
        .then((jsonData)=>{
            dispatch(changeForecast(jsonData.HeWeather5[0]));
        }).done
    };
}
export function changeForecast(forecastList) {
  return {
    type: TYPES.FORECAST_LIST,
    text: forecastList
  };
}
export function getCity(name){
    return dispatch => {
        dispatch(changeCity(name));
    };
}
export function changeCity(selectCity) {
  return {
    type: TYPES.SELECT_CITY,
    text: selectCity
  };
}
