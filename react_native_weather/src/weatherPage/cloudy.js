import React, { Component } from 'react';
import { View, Image } from 'react-native';
class Cloudy extends Component {
    render() {
        return (
            <View>
                <Image source={require('../img/cloudy.png')} style={{width:20,height:20}} />
            </View>
        );
    }
}
export default Cloudy;
