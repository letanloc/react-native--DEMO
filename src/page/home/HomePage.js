import {Component} from 'react'
import {SnapshotViewIOSComponent, Text, ViewComponent} from "react-native";
import {View} from "native-base";
import React from "react";


export class HomePage extends Component {
    render() {
        return (
            <View style={{backgroundColor: "red"}}>
                <Text>Details Page</Text>
            </View>
        );
    }
}

