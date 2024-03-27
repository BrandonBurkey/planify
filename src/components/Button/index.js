/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './styles';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, type, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, type === 'blue' ? styles.blueBackground : {} ]}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
};

export default React.memo(Button);
