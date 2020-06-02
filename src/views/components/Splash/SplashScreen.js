import React from 'react';
import { View, Text, Image } from 'react-native';
import {Colors} from '../../../infrastructure/assets/Colors';

const FIVE_SECONDS = 4000;
const logo = require("./assets/emaar-logo.png")
export default class SplashScreen extends React.Component {
    componentDidMount() {

        setTimeout(() => {
            this.props.navigation.navigate('AppNav');
        }, FIVE_SECONDS);
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor:Colors.lighterGrey,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                <Image source={logo} style={{width:320, height:200}} />
            </View>
        );
    }
}
