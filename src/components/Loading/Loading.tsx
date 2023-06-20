import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './Styles';

const Loading: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
}

export default Loading;
