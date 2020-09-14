import React from 'react';
import styles from './ClinicaStyle';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import { Card, Rating, SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


const header = (props) => {
    return(
        <View style={styles.container}>
            <SearchBar 
                placeholder="Faça uma busca aqui!"
                onChangeText={props.updateSearch}
                value={props.search}
                lightTheme={true}
                inputStyle={styles.inputSearchBarStyle}
                inputContainerStyle={styles.inputSearchBarStyle}
            />
        </View>
    );
}

const RenderCardClinicas = ({item,press}) => {
    return (
        <TouchableOpacity onPress={()=>press(item)}>
            <Card key={item.id} style={{flex: 1, width:120}} >
                <Card.Title>{item.titulo}</Card.Title>
                {/* <Card.Divider/> */}
                <View style={{alignItems: "center"}}>
                    <Image
                        style={{height:50, width:50}}
                        resizeMode="cover"
                        source={{uri: item.urlImagem}}
                    />
                        <Text style={styles.descricao}>{item.descricao}</Text>
                        <Rating imageSize={20} readonly startingValue={item.rating} style={styles.rating} />
                </View>
            </Card>
        </TouchableOpacity>
    );
}



const ClinicaView = (props) => {
    return (
        <SafeAreaView style={styles.container, {backgroundColor:"#DBE8B3", flex:1}}>
        <FlatList
            data={props.filteredArrayClinicas}
            renderItem={
                ({item}) => <RenderCardClinicas item={item} 
                press={() => props.goToClinicaDetalhes({clinica:{item}})} />
            }
            keyExtractor={item => item.id.toString()}
            // maxHeight={1000}
            nestedScrollEnabled={true}
            ListHeaderComponent={header(props)}
            ListFooterComponent={<View style={{marginTop: 25, height:20}}></View>}
        />
        </SafeAreaView>
    );
}

export default ClinicaView;