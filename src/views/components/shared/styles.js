import {GetHeight, GetWidth} from '../../../infrastructure/Matrics';
import {Colors} from '../../../infrastructure/assets/Colors';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    headercontainer: {
        alignItems: 'center',
        paddingHorizontal: GetWidth(10),
        width: GetWidth(350),
        height: GetHeight(50),
        justifyContent: 'center',
    },
    messageText: {
        fontSize: 20,
        color: Colors.darkBlue,
    }
});
export default styles;
