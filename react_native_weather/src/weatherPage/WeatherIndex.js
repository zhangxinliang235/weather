import React, { Component } from 'react';
import { SafeAreaView, ImageBackground } from 'react-native';
import WeatherInfo from './WeatherInfo'
import Forecast from "./Forecast"
import Suggest from "./Suggest"
class WeatherIndex extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: null,
            header: null,
        }
    };
    render() {
        return (
            <ImageBackground source={require("../img/weather.jpg")} style={{ width: '100%', height: '100%' }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <WeatherInfo {...this.props}/>
                    <Forecast {...this.props}/>
                    <Suggest {...this.props}/>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

export default WeatherIndex
