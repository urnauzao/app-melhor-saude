import React from 'react';
import { View, Text,} from 'react-native';
import styles from './HomeStyle';

const HomeView = (props) => {

    const teste = 'Melhor Saúde';

    return (
        <View style={styles.container}>
            <Text style={styles.textInfo}>{teste}</Text>
        </View>
    )
}

export default HomeView;