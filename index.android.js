import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated
} from "react-native";

import {Button} from "native-base"

class Twenty89 extends Component {
    constructor(props) {
        super(props);
        this.animated = new Animated.Value(0);

        this.timing = Animated.timing(this.animated,{
            toValue:1, duration:1000
        });
        this.animate =  this.animate.bind(this);

    }

    animate(){
        this.timing.start()
    }

    render() {
        var opacity = this.animated.interpolate({
            inputRange:[0,1],
            outputRange:[0,1]
        });

        return (
            <View>
                <Button onPress={this.animate}  >
                    <Text style={{color:"white"}}>Maison Armani</Text>
                </Button>
                <Animated.View style={{opacity}}>
                    <Text style={style.text}>Maison Armani</Text>
                </Animated.View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    "text": {
        "color": "red",
        "fontSize" :20
    }
})
AppRegistry.registerComponent('Twelve', () => Twenty89);
