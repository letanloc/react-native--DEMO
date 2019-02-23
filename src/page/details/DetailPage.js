import {Component} from "react"
import React from "react";
import {Text} from "react-native";
import {Button} from "native-base"

class DetailPage extends Component {

    onToNextPage = () => {
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <Button onPress={this.onToNextPage}><Text>To Home Screen</Text></Button>
        )
    }
}