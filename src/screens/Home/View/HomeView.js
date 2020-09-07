import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './HomeStyle';

const HomeView = (props) => {

    const teste = 'Melhor Saúde';

    return (
        <View style={styles.container}>
            <Text style={styles.textInfo}>{teste}</Text>
            <TouchableOpacity underlayColor="white"
                onPress={props.onButtonPressed}
            >
                <View style={styles.viewButton}>
                    <Text>
                        Qualquer
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={props.goToServicos}
            >
                <View style={styles.viewButton}>
                    <Text>Servicos</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default HomeView;