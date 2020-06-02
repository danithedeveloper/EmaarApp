import React from 'react';
import {View, Text} from 'react-native';
import {Strings} from '../../../infrastructure/assets/Strings';
import styles from './styles';
const Header = _props => {
    return (
        <View style={styles.headercontainer}>
            <Text style={styles.messageText}>{Strings.welcomeText}</Text>
        </View>
    );
};

export default Header;
