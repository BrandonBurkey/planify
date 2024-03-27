/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../constants/colors';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 46,
        padding: 40,
        paddingTop: 12,
        backgroundColor: colors.white,
    },
    image: {
        width: '100%',
        flex: 1,
    },
    title: {
        color: colors.darkBlue,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        color: colors.grey,
        fontSize: 17,
        textAlign: 'center',
        marginVertical: 16,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: 40,
        width: '100%',
        backgroundColor: colors.white,
    },
});

export default styles;
