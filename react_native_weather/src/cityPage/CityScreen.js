import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
// import CityScreenStyle from "./CityScreenStyle"
import SearchBox from "./SearchBox"
import DATA from '../data/cityList.json';
import CityList from './IndexListView';
import SearchResult from './SearchResult';
import { getCity,getWeather,getForecast } from "../action/weatherAction";
import { connect } from "react-redux";
const NOW_CITY_LIST = [
  {
      "name": "上海",
      "spellName": "shanghai",
      "id": 3100,
      "fullname": "上海/上海",
      "sortLetters": "s"
  }
];
const ALL_CITY_LIST = DATA.allCityList;
const HOT_CITY_LIST = DATA.hotCityList;
const LAST_VISIT_CITY_LIST = DATA.lastVisitCityList;
class CityScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "选择城市",
      headerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)'
      },
      headerTintColor: 'white'
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      showSearchResult: false,
      keyword: '',
      searchResultList: [],
      allCityList: ALL_CITY_LIST,
      hotCityList: HOT_CITY_LIST,
      lastVisitCityList: LAST_VISIT_CITY_LIST,
      nowCityList: NOW_CITY_LIST
    };
  }
  onPressBack() {
    alert('你选择了返回====》header back');
  }
  onChanegeTextKeyword(newVal) {
    if (newVal === '') {
      this.setState({ showSearchResult: false });
    } else {
      // 在这里过滤数据结果
      let dataList = this.filterCityData(newVal);
      this.setState({ keyword: newVal, showSearchResult: true, searchResultList: dataList });
    }
  }
  filterCityData(text) {
    let rst = [];
    for (let idx = 0; idx < ALL_CITY_LIST.length; idx++) {
      let item = ALL_CITY_LIST[idx];
      if (item.name.includes(text) || item.spellName.includes(text)) {
        rst.push(item);
      }
    }
    return rst;
  }
  onSelectCity(cityJson) {
    if (this.state.showSearchResult) {
      this.setState({ showSearchResult: false, keyword: '' });
    }
    const { getCity,getWeather } = this.props;
    getCity(cityJson.name);
    getWeather(cityJson.name);
    getForecast(cityJson.name);
    this.props.navigation.navigate("WeatherIndex")
  }
  render() {
    return (
      <View style={styles.container} >
        <SearchBox
          keyword={this.state.keyword}
          onChanegeTextKeyword={(vv) => {
            this.onChanegeTextKeyword(vv)
          }} />
        {this.state.showSearchResult ?
          (<SearchResult
            keyword={this.state.keyword}
            onSelectCity={this.onSelectCity.bind(this)}
            searchResultList={this.state.searchResultList} />)
          : (
            <View style={{ flex: 1 }}>
              <CityList
                onSelectCity={this.onSelectCity.bind(this)}
                allCityList={this.state.allCityList}
                hotCityList={this.state.hotCityList}
                lastVisitCityList={this.state.lastVisitCityList}
                nowCityList={this.state.nowCityList} />
            </View>
          )
        }
      </View>
    );
  }
}
const mapStateToProp = state => ({
  selectCity: state.weatherListStore.selectCity
});
const mapDispatchToProp = dispatch => ({
  getCity: (name) => dispatch(getCity(name)),
  getWeather: (name) => dispatch(getWeather(name)),
  getForecast: (name) => dispatch(getForecast(name))
});
export default connect(
  mapStateToProp,
  mapDispatchToProp
)(CityScreen);
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      // paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
  },
  currentCity: {
      backgroundColor: '#ffffff',
      height: 20,
      margin: 5
  },
  currentCityText: {
      fontSize: 16
  }
});
