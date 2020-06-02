import {ActivityIndicator} from 'react-native';

import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Header from '../shared/Header';
import {Strings, ErrorMessages} from '../../../infrastructure/assets/Strings';
import styles from './styles';


export default class Register extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPass: '',
    };

    register = () => {
        if (this.validateFields()) {
            alert(Strings.successRegText);
            this.props.navigation.navigate('HomeScreen');
        }
    };

    validateFields() {
        if (this.state.firstName == '') {
            alert(ErrorMessages.firstNameError);
            return false;
        }
        if (this.state.lastName == '') {
            alert(ErrorMessages.lastNameError);
            return false;
        }
        if(!this.validate(this.state.email)){
            alert(ErrorMessages.emailError);
            return false;
        }

        if (this.state.password == '') {
            alert(ErrorMessages.passwordError);
            return false;
        }
        if (this.state.confirmPass == '') {
            alert(ErrorMessages.confirmPassError);
            return false;
        }
        if (this.state.password != this.state.confirmPass) {
            alert(ErrorMessages.passMissMatch);
            return false;
        }
        return true;
    }

    validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            this.setState({ email: text })
            return false;
        }
        else {
            this.setState({ email: text })
            return true
        }
    }

    render() {
        const {data, loader} = this.props;

        return (
            <SafeAreaView>
                {loader ? (
                    <View style={styles.Container}>
                        <ActivityIndicator size="large" color="#0000ff"/>
                    </View>
                ) : (
                    <View style={styles.mainContainer}>
                        <Header/>

                        <TextInput style={styles.input}
                                   value={this.state.firstName}
                                   underlineColorAndroid="transparent"
                                   placeholder=" First Name"
                                   autoCapitalize="none"
                                   onChangeText={firstName => this.setState({firstName})}/>

                        <TextInput style={styles.input}
                                   value={this.state.lastName}
                                   underlineColorAndroid="transparent"
                                   placeholder=" Last Name"
                                   autoCapitalize="none"
                                   onChangeText={lastName => this.setState({lastName})}/>

                        <TextInput
                            value={this.state.email}
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder=" Email"
                            autoCapitalize="none"
                            onChangeText={email => this.setState({email})}/>

                        <TextInput secureTextEntry={true}
                                   style={styles.input}
                                   underlineColorAndroid="transparent"
                                   placeholder=" Password"
                                   autoCapitalize="none"
                                   onChangeText={password => this.setState({password})}/>

                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder=" Confirm Password"
                            autoCapitalize="none"
                            onChangeText={confirmPass => this.setState({confirmPass})}/>

                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={
                                () => this.register()
                            }>
                            <Text style={styles.submitButtonText}> Submit </Text>
                        </TouchableOpacity>

                    </View>
                )
                }
            </SafeAreaView>
        );
    }
}
