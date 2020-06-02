
import {StyleSheet} from 'react-native';
import {GetHeight, GetWidth} from '../../../infrastructure/Matrics';
import {Colors} from '../../../infrastructure/assets/Colors';

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'space-evenly',
        paddingHorizontal: GetWidth(10),
    },
    Container: {
        flexBasis: '100%',
        justifyContent: 'center',
    },
    tile: {
        paddingHorizontal:GetWidth(10),
        paddingVertical:GetHeight(10),
        width: '100%',
        height: GetHeight(100),
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.darkBlue,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: GetHeight(10),
        backgroundColor: Colors.lightGreen,
    },
    tileView: {
        paddingHorizontal: GetWidth(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: GetHeight(30),
    },
    holidayNameText: {
        fontSize: 22,
        color: Colors.white_text,
    },
    holidayDate: {
        fontSize: 18,
        color: Colors.white,
    },
});
export default styles;
