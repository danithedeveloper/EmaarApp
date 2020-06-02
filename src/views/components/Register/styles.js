
import {StyleSheet} from 'react-native';
import {Colors} from '../../../infrastructure/assets/Colors';

const styles = StyleSheet.create({

    Container: {
        flexBasis: '100%',
        justifyContent: 'center',
    },

    input: {
        margin: 15,
        height: 40,
        borderColor: Colors.darkBlue,
        borderWidth: 1,
    },

    submitButton: {
        backgroundColor: Colors.darkBlue,
        padding: 10,
        margin: 30,
        height: 40,
    },

    submitButtonText: {
        textAlign:'center',
        color: 'white',
    },

});

export default styles;
