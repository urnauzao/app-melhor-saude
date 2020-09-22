import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, ScrollView, Button } from 'react-native';
import styles from './HomeStyle';
import { SearchBar, Image, Rating, Card } from 'react-native-elements';
import imageBanner from '../../../assets/images/banner.jpg';
import imageServicos from '../../../assets/images/icon_servicos.png';
import imageClinicas from '../../../assets/images/icon_clinicas.png';
// import { ScrollView } from 'react-native-gesture-handler';

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

const RenderClinicas = ({item,press}) => {
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

const HomeView = (props) => {
    
    const teste = 'Melhor Saúde';

    return (
        <SafeAreaView style={{backgroundColor:"#DBE8B3", flex:1}}>
            <ScrollView>
        <View style={styles.container}>

            <View style={{paddingRight:50, paddingLeft:50, paddingTop: 50}}>
                <TouchableOpacity
                    onPress={props.goToServicos}
                    title="Serviços"
                    color="white"
                    style={{flex:1, alignSelf:"center", backgroundColor:"white", borderRadius: 5, padding: 15}}
                >
                <Image 
                    source={imageServicos}
                    style={{height:50, width:50}}
                />
                <Text>
                    Serviços
                </Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingRight:50, paddingLeft:50, paddingTop: 10, marginTop: 20}}>
                <TouchableOpacity
                    onPress={props.goToClinicas}
                    title="Clínicas"
                    color="white"
                    style={{flex:1, alignSelf:"center", backgroundColor:"white", borderRadius: 5, padding: 15}}
                >
                    <Image 
                        source={imageClinicas}
                        style={{height:50, width:50}}
                    />
                    <Text>
                        Clinicas
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* <View style={{ alignItems:"stretch",}}>
            <FlatList
                data={props.filteredArrayServicos}
                renderItem={
                    ({item}) => <RenderServicos item={item} 
                    press={props.goToServicos} />
                }
                keyExtractor={item => item.id.toString()}
                maxHeight={1000}
                nestedScrollEnabled={true}
                ListHeaderComponent={<Text style={{ fontSize:20, textAlign:"center", marginTop:10 }}>Serviços</Text>}
            />
        </View> */}

        {/* <View style={{ alignItems:"stretch",}}>
            <Text style={{ fontSize:20, textAlign:"center", marginTop:10 }}>Clínicas</Text>
            <FlatList
                data={props.filteredArrayServicos}
                renderItem={
                    ({item}) => <RenderServicos item={item} 
                    press={props.goToServicos} />
                }
                keyExtractor={item => item.id.toString()}
                maxHeight={1000}
                nestedScrollEnabled={true}
                ListHeaderComponent={<Text style={{ fontSize:20, textAlign:"center", marginTop:10 }}>Serviços</Text>}
            />
        </View> */}

        

        </ScrollView>

        {/* <View style={styles.container}>
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
        </View>
        <SectionList
            sections={props.filteredArrayServicos}
            keyExtractor={item => item.id.toString()}
            renderItem={
                ({item}) => <RenderServicos item={item} 
                press={props.goToServicos} />
            }
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}
        />

 */}

        </SafeAreaView>
    )
}

export default HomeView;