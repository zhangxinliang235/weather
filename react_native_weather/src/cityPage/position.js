import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
//无需导入
// As a browser polyfill, this API is available through the navigator.geolocation global - you do not need to import it.
class position extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialPosition: 'Unknow',
            lastPosition: 'Unknow',
        }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position.coords);
                // 经度：positionData.longitude
                const longitude = position.coords.longitude
                // 纬度：positionData.latitude
                // alert(longitude)
                const latitude = position.coords.latitude
                // alert(latitude)
                this.setState({ initialPosition });
                // alert("经度",longitude)
                // fetch("http://api.map.baidu.com/geocoder?output=json&location="+latitude+', '+longitude+"&key=37492c0ee6f924cb5e934fa08c6b1676")
                fetch("http://api.map.baidu.com/geocoder?output=json&location=30.9399368185,%20121.7724702817&key=37492c0ee6f924cb5e934fa08c6b1676")
                    .then((response) => {
                        if (response.ok) {
                            const ret =  JSON.parse(response._bodyInit);
                            alert(ret.result.addressComponent.city);
                            return response.json();
                        }
                    })
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position.coords);
            this.setState({ lastPosition });
        });
    }
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }
    //渲染
    render() {
        return (
            <View>
                <Text>
                    <Text style={styles.title}>Initial position: </Text>
                    {this.state.initialPosition}
                </Text>
                <Text>
                    <Text style={styles.title}>Current position: </Text>
                    {this.state.lastPosition}
                </Text>
            </View>
        );
    }
}
export default position
const styles = StyleSheet.create({
    title: {
        fontWeight: '500',
    },
});