import React, { Component } from 'react';
import { View, Image } from 'react-native';
class Rain extends Component {
    render() {
        return (
            <View>
                <Image source={require('../img/rain.png')} style={{width:20,height:20}} />
            </View>
        );
    }
}
export default Rain;
