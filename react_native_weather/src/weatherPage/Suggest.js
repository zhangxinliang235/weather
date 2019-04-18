import React, { Component } from 'react';
import { RefreshControl, View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { getWeather } from "../action/weatherAction";
import { connect } from "react-redux";
import SuggestStyle from "./SuggestStyle"
class Suggest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            loaded: 0
        }
    }
    _onClick = () => {
        this.setState({
            loaded: this.state.loaded + 1
        })
    };
    _onRefresh = () => {
        this.setState({
            isRefreshing: true
        });
        //间隔5秒结束下拉刷新
        setTimeout(() => {
            this.setState({
                loaded: 0,
                isRefreshing: false
            })
        }, 5000);
    }
    componentDidMount() {
        const { getWeather } = this.props;
        const name ="上海";
        getWeather(name);
    }
    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                    />
                }>
                <TouchableWithoutFeedback onPress={this._onClick}>
                    <View style={SuggestStyle.boxList}>
                        <View style={SuggestStyle.blankBox}></View>
                        <Text style={SuggestStyle.Suggest_title}>今日生活指数</Text>
                        <View style={SuggestStyle.box}>
                            <View style={SuggestStyle.box1}>
                                <Text style={SuggestStyle.text1}>air:</Text>
                                <Text style={SuggestStyle.text1}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.air && this.props.weatherList.suggestion.air.brf}</Text>
                            </View>
                            <Text style={SuggestStyle.description}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.air && this.props.weatherList.suggestion.air.txt}</Text>
                        </View>
                        <View style={SuggestStyle.box}>
                            <View style={SuggestStyle.box1}>
                                <Text style={SuggestStyle.text1}>comf:</Text>
                                <Text style={SuggestStyle.text1}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.comf && this.props.weatherList.suggestion.comf.brf}</Text>
                            </View>
                            <Text style={SuggestStyle.description}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.comf && this.props.weatherList.suggestion.comf.txt}</Text>
                        </View>
                        <View style={SuggestStyle.box}>
                            <View style={SuggestStyle.box1}>
                                <Text style={SuggestStyle.text1}>cw:</Text>
                                <Text style={SuggestStyle.text1}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.cw && this.props.weatherList.suggestion.cw.brf}</Text>
                            </View>
                            <Text style={SuggestStyle.description}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.cw && this.props.weatherList.suggestion.cw.txt}</Text>
                        </View>
                        <View style={SuggestStyle.box}>
                            <View style={SuggestStyle.box1}>
                                <Text style={SuggestStyle.text1}>drsg:</Text>
                                <Text style={SuggestStyle.text1}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.drsg && this.props.weatherList.suggestion.drsg.brf}</Text>
                            </View>
                            <Text style={SuggestStyle.description}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.drsg && this.props.weatherList.suggestion.drsg.txt}</Text>
                        </View>
                        <View style={SuggestStyle.box}>
                            <View style={SuggestStyle.box1}>
                                <Text style={SuggestStyle.text1}>flu:</Text>
                                <Text style={SuggestStyle.text1}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.flu && this.props.weatherList.suggestion.flu.brf}</Text>
                            </View>
                            <Text style={SuggestStyle.description}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.flu && this.props.weatherList.suggestion.flu.txt}</Text>
                        </View>
                        <View style={SuggestStyle.box}>
                            <View style={SuggestStyle.box1}>
                                <Text style={SuggestStyle.text1}>sport:</Text>
                                <Text style={SuggestStyle.text1}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.sport && this.props.weatherList.suggestion.sport.brf}</Text>
                            </View>
                            <Text style={SuggestStyle.description}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.sport && this.props.weatherList.suggestion.sport.txt}</Text>
                        </View>
                        <View style={SuggestStyle.box}>
                            <View style={SuggestStyle.box1}>
                                <Text style={SuggestStyle.text1}>trav:</Text>
                                <Text style={SuggestStyle.text1}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.trav && this.props.weatherList.suggestion.trav.brf}</Text>
                            </View>
                            <Text style={SuggestStyle.description}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.trav && this.props.weatherList.suggestion.trav.txt}</Text>
                        </View>
                        <View style={SuggestStyle.box}>
                            <View style={SuggestStyle.box1}>
                                <Text style={SuggestStyle.text1}>uv:</Text>
                                <Text style={SuggestStyle.text1}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.uv && this.props.weatherList.suggestion.uv.brf}</Text>
                            </View>
                            <Text style={SuggestStyle.description}>{this.props.weatherList && this.props.weatherList.suggestion && this.props.weatherList.suggestion.uv && this.props.weatherList.suggestion.uv.txt}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
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
)(Suggest);
