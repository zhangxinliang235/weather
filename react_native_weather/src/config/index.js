import { createStackNavigator, createAppContainer } from "react-navigation";
import React from 'react';
// 引入页面组件
import WeatherIndex from '../weatherPage/WeatherIndex'
import CityScreen from '../cityPage/CityScreen'
// 配置路由
const AppNavigator = createStackNavigator({
    WeatherIndex: WeatherIndex,
    CityScreen: CityScreen,
},
{initialRouteName:'WeatherIndex'});
const Route = createAppContainer(AppNavigator);
export default Route;
