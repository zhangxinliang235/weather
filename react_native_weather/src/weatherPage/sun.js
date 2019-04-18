import React, { Component } from 'react';
import { View, Image } from 'react-native';
class Sun extends Component {
    render() {
        return (
            <View>
                <Image source={require('../img/sun.png')} style={{width:20,height:20}} />
            </View>
        );
    }
}
export default Sun;
