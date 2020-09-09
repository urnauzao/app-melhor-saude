import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './HomeStyle';
import { SearchBar } from 'react-native-elements';

const HomeView = (props) => {

    const teste = 'Melhor Saúde';

    return (
        <View style={styles.container}>
            <SearchBar 
                placeholder="Faça uma busca aqui!"
                onChangeText={props.updateSearch}
                value={props.search}
                lightTheme={true}
                inputStyle={styles.inputSearchBarStyle}
                inputContainerStyle={styles.inputSearchBarStyle}
            />

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