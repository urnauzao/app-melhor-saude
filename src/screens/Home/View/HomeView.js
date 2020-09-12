import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, ScrollView, Button } from 'react-native';
import styles from './HomeStyle';
import { SearchBar, Image, Rating, Card } from 'react-native-elements';
import imageBanner from '../../../assets/images/banner.jpg';
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

    // const obj = {
    //     titulo: "Urnau",
    //     url: "https://cdn.pixabay.com/photo/2020/09/01/05/45/vitruvian-man-5534282__340.jpg",
    //     subtitulo: "Minha Observacao",
    //     rating: 4.5,  
    // }

    // let itemsServicos = [];

    // for(i=0;i<10;i++){
    //     itemsServicos.push(
    //         <Card key={Math.random()} style={{flex: 1, width:120}} >
    //         <Card.Title>{obj.titulo}</Card.Title>
    //         <Card.Divider/>
    //         <View style={{alignItems: "center"}}>
    //             <Image
    //                 style={{height:50, width:50}}
    //                 resizeMode="cover"
    //                 source={{uri: obj.url}}
    //             />
    //                 <Text style={styles.subtitulo}>{obj.subtitulo}</Text>
    //                 <Rating imageSize={20} readonly startingValue={obj.rating} style={styles.rating} />
    //         </View>
    //         </Card>
    //     )
    // }

    return (
        <SafeAreaView>
            <ScrollView>
        <View style={styles.container}>
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
            <View style={{paddingRight:50, paddingLeft:50, paddingTop: 50}}>
                <Button
                    onPress={props.goToServicos}
                    title="Serviços"
                    color="#841584"
                    accessibilityLabel="Acesse nossa lista com todos os serviços disponíveis!"
                />
            </View>
            <View style={{paddingRight:50, paddingLeft:50, paddingTop: 10}}>
                <Button
                    onPress={props.goToServicos}
                    title="Clínicas"
                    color="#841584"
                    accessibilityLabel="Acesse nossa lista com todas as clínicas disponíveis!"
                />
            </View>
            <View style={{paddingRight:50, paddingLeft:50, paddingTop: 10}}>
                <Button
                    onPress={props.goToServicos}
                    title="Médicos"
                    color="#841584"
                    accessibilityLabel="Acesse nossa lista com todos os médicos disponíveis!"
                />
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