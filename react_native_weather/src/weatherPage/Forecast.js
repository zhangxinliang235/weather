import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getForecast } from "../action/weatherAction";
import { connect } from "react-redux";
import moment from "moment";
import ForecastStyle from "./ForecastStyle"
import Sun from "./sun"
import Cloudy from "./cloudy"
import Rain from "./rain"
import Wind from "./wind"
function week(a){
    let weekNumber = new Date(a).getDay();
    if(weekNumber==0){
        weekNumber="星期日";
    }
    else if(weekNumber==1){
        weekNumber="星期一";
    }
    else if (weekNumber == 2) {
        weekNumber = "星期二";
    }
    else if (weekNumber == 3) {
        weekNumber = "星期三";
    }
    else if (weekNumber == 4) {
        weekNumber = "星期四";
    }
    else if (weekNumber == 5) {
        weekNumber = "星期五";
    }
    else if (weekNumber == 6) {
        weekNumber = "星期六";
    }
    return weekNumber
}
class Forecast extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: null,
            header: null,
        }
    };
    componentDidMount() {
        const { getForecast } = this.props;
        const name ="上海";
        getForecast(name);
    }
    render() {
        let today = moment(new Date).format("YYYY-MM-DD");
        let yesterday = moment(new Date).add(1,'days').format("YYYY-MM-DD")
        return (
            <View style={ForecastStyle.totalbox}>
                {this.props.forecastList && this.props.forecastList.daily_forecast && this.props.forecastList.daily_forecast.map((infor, i) => {
                    const dateWeek = week(infor&&infor.date)
                    let weatherDiv =(
                        <View style={ForecastStyle.list} key={"forecast-list" + i}>
                            <View style={ForecastStyle.list1}>
                                <Text style={ForecastStyle.list_date}>{infor&&infor.date.split("-")[2]}日</Text>
                                <Text style={ForecastStyle.list_day}>
                                    {
                                        (infor&&infor.date)===today?"今天":
                                        (infor&&infor.date)===yesterday?"明天":
                                        dateWeek
                                    }
                                </Text>
                            </View>
                            <View style={ForecastStyle.list2}>
                                {(infor&&infor.cond.txt_n) === "多云" ? 
                                    <Cloudy />:
                                    (infor&&infor.cond.txt_n) === "晴"?<Sun />:
                                    (infor&&infor.cond.txt_n).includes("雨")?<Rain />:
                                    (infor&&infor.cond.txt_n).includes("阴")?<Wind />:null
                                }
                                <Text style={ForecastStyle.list_weather}>{infor&&infor.cond.txt_n}</Text>
                            </View>
                            <View style={ForecastStyle.list3}>
                                <Text style={ForecastStyle.list_tmp}>{infor&&infor.tmp.min}~{infor&&infor.tmp.max}℃</Text>
                            </View>
                        </View>
                    );
                    return weatherDiv
                })}
            </View>
        );
    }
}
const mapStateToProp = state => ({
    forecastList: state.weatherListStore.forecastList,
    selectCity: state.weatherListStore.selectCity
});
const mapDispatchToProp = dispatch => ({
    getForecast: (name) => dispatch(getForecast(name))
});
export default connect(
    mapStateToProp,
    mapDispatchToProp
)(Forecast);
