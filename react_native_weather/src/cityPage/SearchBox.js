import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import SearchBoxStyle from "./SearchBoxStyle"
class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state={
            value:""
        }
    }
    onChanegeTextKeyword(inputValue) {
        this.setState({value: inputValue});
        this.props.onChanegeTextKeyword(inputValue);
    }
    render() {
        return (
            <View style={SearchBoxStyle.container}>
                <View style={SearchBoxStyle.inputBox}>
                    <View style={SearchBoxStyle.inputIcon}></View>
                    <TextInput ref="keyword" autoCapitalize="none" value={this.props.keyword}
                               onChangeText={this.onChanegeTextKeyword.bind(this)} returnKeyType="search" maxLength={20}
                               style={SearchBoxStyle.inputText} underlineColorAndroid="transparent"
                               placeholder={'输入城市名或拼音查询'}/>
                </View>
            </View>
        );
    }
}
export default  SearchBox;
