/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purple,
        borderRadius: 10,
        padding: 15,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 50,
        marginVertical: 8,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    blueBackground: {
        backgroundColor: colors.lightBlue,
    }
});

export default styles;
