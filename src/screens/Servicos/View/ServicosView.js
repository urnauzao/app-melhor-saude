import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from './ServicosStyle';
import imageBanner from '../../../assets/images/banner.jpg';
import { SearchBar, Image, Card, Rating } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';


const header = (props, title) => {
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
            {/* <Image 
                style={{ height:100, left: 0, right: 0 }}
                source={imageBanner}
            />
            <Text style={{ fontSize:20, textAlign:"center", marginTop:10 }}>{title}</Text> */}
        </View>
    );
}

const RenderServicos = ({item,press}) => {
    return (
        <TouchableOpacity onPress={()=>press(item)}>
            <Card key={Math.random()} style={{flex: 1, width:120}} >
                <Card.Title>{item.titulo}</Card.Title>
                <Card.Divider/>
                <View style={{alignItems: "center"}}>
                    <Image
                        style={{height:50, width:50}}
                        resizeMode="cover"
                        source={{uri: item.url}}
                    />
                        <Text style={styles.subtitulo}>{item.subtitulo}</Text>
                        <Rating imageSize={20} readonly startingValue={item.rating} style={styles.rating} />
                </View>
            </Card>
        </TouchableOpacity>
    );
}

const ServicosView = (props) => {
    return (
        <SafeAreaView style={styles.container}>
        <FlatList
            data={props.filteredArrayServicos}
            renderItem={
                ({item}) => <RenderServicos item={item} 
                press={props.goToServicos} />
            }
            keyExtractor={item => item.id.toString()}
            // maxHeight={1000}
            nestedScrollEnabled={true}
            ListHeaderComponent={header(props, "Serviços")}
            ListFooterComponent={<View style={{backgroundColor:"#005500", marginTop: 25, height:20}}></View>}
        />
        </SafeAreaView>
    );
}

export default ServicosView;