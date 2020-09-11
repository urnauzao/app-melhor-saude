import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import styles from './HomeStyle';
import { SearchBar, Image, Rating, Card } from 'react-native-elements';
import imageBanner from '../../../assets/images/banner.jpg';
import { ScrollView } from 'react-native-gesture-handler';

const HomeView = (props) => {

    const teste = 'Melhor Saúde';

    const obj = {
        titulo: "Urnau",
        url: "https://cdn.pixabay.com/photo/2020/09/01/05/45/vitruvian-man-5534282__340.jpg",
        subtitulo: "Minha Observacao",
        
    }

    let itemsServicos = [];

    for(i=0;i<10;i++){
        itemsServicos.push(
            <Card key={i} style={{flex: 1, width:120}} >
            <Card.Title>{obj.titulo}</Card.Title>
            <Card.Divider/>
            <View style={{alignItems: "center"}}>
                <Image
                    style={{height:50, width:50}}
                    resizeMode="cover"
                    source={{uri: obj.url}}
                />
                    <Text style={styles.subtitulo}>{obj.subtitulo}</Text>
                    <Rating imageSize={20} readonly startingValue={4.5} style={styles.rating} />
            </View>
            </Card>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <SearchBar 
                placeholder="Faça uma busca aqui!"
                onChangeText={props.updateSearch}
                value={props.search}
                lightTheme={true}
                inputStyle={styles.inputSearchBarStyle}
                inputContainerStyle={styles.inputSearchBarStyle}
            />
            <Image 
                style={{ height:100, left: 0, right: 0 }}
                source={imageBanner}
            />
            <Text style={{ fontSize:20, textAlign:"center", marginTop:10 }}>Serviços</Text>
            <View style={{ alignItems:"stretch",}}>
                {itemsServicos}
            </View>
            <Text style={{ fontSize:20, textAlign:"center", marginTop:10 }}>Clínicas</Text>


            {/* <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <FlatList style={{flex:1}}>



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
            </FlatList> */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeView;