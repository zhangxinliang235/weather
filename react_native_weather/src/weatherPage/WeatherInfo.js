import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getWeather } from "../action/weatherAction";
import { connect } from "react-redux";
import WeatherInfoStyle from "./WeatherInfoStyle"
import Ionicons from 'react-native-vector-icons/Ionicons';
class WeatherInfo extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        const { getWeather } = this.props;
        const name ="上海";
        getWeather(name);
    }
    render() {
        return (
            <View>
                <View style={WeatherInfoStyle.topbox}>
                    <View style={WeatherInfoStyle.placeBox}>
                        <Ionicons name='ios-add' size={26}  style={WeatherInfoStyle.add_icon}  
                        onPress={() => this.props.navigation.navigate("CityScreen")}/>
                        <Text style={WeatherInfoStyle.topbox_text1}>{this.props.weatherList && this.props.weatherList.basic && this.props.weatherList.basic.city}</Text>
                    </View>
                    <Text style={WeatherInfoStyle.topbox_text2}>{this.props.weatherList && this.props.weatherList.now && this.props.weatherList.now.tmp}℃</Text>
                    <Text style={WeatherInfoStyle.topbox_text3}>{this.props.weatherList && this.props.weatherList.now && this.props.weatherList.now.cond && this.props.weatherList.now.cond.txt}</Text>
                </View>
                <View style={WeatherInfoStyle.topbox2}>
                    <Text style={WeatherInfoStyle.topbox2_text1}>空气质量:{this.props.weatherList && this.props.weatherList.aqi && this.props.weatherList.aqi.city && this.props.weatherList.aqi.city.qlty}</Text>
                    <Text style={WeatherInfoStyle.topbox2_text2}>风力:{this.props.weatherList && this.props.weatherList.now && this.props.weatherList.now.wind && this.props.weatherList.now.wind.dir}</Text>
                </View>
            </View>
        );
    }
}
const mapStateToProp = state => ({
    weatherList: state.weatherListStore.weatherList,
    selectCity: state.weatherListStore.selectCity
});
const mapDispatchToProp = dispatch => ({
    getWeather: (name) => dispatch(getWeather(name))
});
export default connect(
    mapStateToProp,
    mapDispatchToProp
)(WeatherInfo);
