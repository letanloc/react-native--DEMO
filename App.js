import React from "react";
import {View, Text} from "react-native";
import {createStackNavigator, createAppContainer} from "react-navigation";

import {} from "./src/page/index"

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomePage
    },
    Detail: {}
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount(): void {
        console.log(functionA())
    }

    render() {
        return <AppContainer/>;
    }
}