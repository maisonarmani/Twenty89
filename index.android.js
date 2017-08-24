import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from "react-native";

import {Button} from "native-base"

class Twenty89 extends Component{
    render(){
        return(
            <View>
                <Button ><Text>Maison Armani</Text></Button>
                <Text style={style.text}>Maison Armani</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    "text":{
        "color":"red"
    }
})
AppRegistry.registerComponent('Twelve', () => Twenty89);
