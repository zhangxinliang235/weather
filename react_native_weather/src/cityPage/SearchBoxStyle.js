import React from 'react';
import { Platform,StyleSheet } from 'react-native';
export default StyleSheet.create(
    {
        container: {
            marginTop: 5,
            marginBottom: 5,
            backgroundColor: '#ffffff',
            flexDirection: 'row',
            height: Platform.OS === 'ios'
                ? 35
                : 45,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: '#cdcdcd',
            paddingBottom: 5
        },
        inputBox: {
            height: Platform.OS === 'ios'
                ? 30
                : 40,
            marginLeft: 5,
            marginRight: 5,
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#E6E7E8'
        },
        inputIcon: {
            margin: Platform.OS === 'ios'
                ? 5
                : 10
        },
        inputText: {
            alignSelf: 'flex-end',
            marginTop: Platform.OS === 'ios'
                ? 0
                : 0,
            flex: 1,
            height: Platform.OS === 'ios'
                ? 30
                : 40,
            marginLeft: 2,
            marginRight: 5,
            fontSize: 12,
            lineHeight: 30,
            textAlignVertical: 'bottom',
            textDecorationLine: 'none'
        }
    }
);
