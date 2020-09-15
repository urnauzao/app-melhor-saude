import React from 'react';
import { FlatList, Image, Linking, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import { Card, Icon, SocialIcon } from 'react-native-elements';
import style from './ClinicaDetalheStyle';

// Exemplo de valores em props.clinica.item
// id: 'clinica-hospital-do-cancer-de-sao-paulo',
// titulo: "Hospital do Cancer de São Paulo",
// url: "https://google.com.br",
// urlImagem: "https://cdn.pixabay.com/photo/2020/09/01/05/45/vitruvian-man-5534282__340.jpg",
// descricao: "Hospital referência no tratamento de Canceres",
// localResumido: "São Paulo - SP",
// endereco: "Av Brasileirissima",
// numEndereco: "291",
// complemento: "sala 5",
// cep: "02002-010",
// cidade: "São Paulo",
// bairro: "Barra Funda",
// estado: "SP",
// pais: "Brasil",
// rating: getRandomInt(3,5),
// category: ['maternidade'],
// medicos: [
// ]

const renderMedico = (medico) => {
    medico = medico.item;
    // id
    // nome
    // idade
    // especializacao
    // precoConsulta
    // telefone
    // email
    // whatsapp
    // foto
    return (
        <Card>
            <Card.Title>{medico.nome}</Card.Title>
            <View style={{flex:1, flexDirection:"row", alignItems: "stretch"}}>
                <Text style={{marginBottom: 10, flex:2, fontSize:10}}>
                    Especialista: {medico.especializacao}
                    {'\n'}
                    Idade: {medico.idade} 
                    {'\n'}Custo da consulta: {medico.precoConsulta}
                </Text>
                <Image source={medico.foto} style={{flex:1, height:50}}/>
            </View>
            <TouchableOpacity 
                style = {{marginTop: 30, flex:1, flexDirection:"row", backgroundColor: "#0073C7", justifyContent:"center", textAlignVertical:"center", textAlign:"center", alignItems:"center", borderRadius:5}} 
                onPress = {() => 
                    Linking.canOpenURL("whatsapp://send?Text=oi").then(supported => { 
                        if (supported) { 
                            return Linking.openURL ( 
                                "whatsapp://send?phone=5531999999999&text=Oi" 
                            ); 
                        } else { 
                            return Linking.openURL ( 
                                "https://api.whatsapp.com/send?phone=5531999999999&text=Oi" 
                            ); 
                        } 
                    }).catch((error)=>{
                        alert("Não foi possível concluir esta ação!");
                    })
                }
            > 
                <Icon
                    size={10}
                    name='whatsapp'
                    type='font-awesome'
                    color='white'
                    style={{marginRight:5}}
                />
                <Text style={{color:"white"}}>
                Enviar Mensagem via Whatsapp
                </Text>
            </TouchableOpacity>
        </Card>
    )
}
 
const renderEmptyMedico = () => {
    return (
        <Text style={{flex:1, textAlign:"center", color: "#777777"}}> Nenhum médico cadastrado para esta clínica!</Text>
    );
}

const renderHeader = (props) => {
    return (
        <View style={{flex:1}}>
            <Text style={{textAlign:"center", fontSize:20, marginBottom:10, fontWeight:"700"}}>
                {props.clinica.item.titulo}
            </Text>
            <View style={{
                padding:10,
                borderRadius:5,
                shadowOffset: { width: 10, height: 30 },
                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 3,
                flexDirection: "row",
                backgroundColor: "white",
                marginBottom:15}}
            >
                <Image
                    style={{height:50, width:50}}
                    resizeMode="cover"
                    source={{uri: props.clinica.item.urlImagem}}
                />
                <Text style={{flex:1, textAlign:"justify", fontSize:10}}>
                    {props.clinica.item.descricao}               
                </Text>
            </View>
        </View>
    );
}

const renderFooter = (props) => {
    return(
        <View style={{flex:1}}>
            <Text style={{textAlign:"center", fontSize:14, marginTop:10}}>
                Endereço:
            </Text>
            <View style={{
                padding:10,
                borderRadius:5,
                marginBottom:15,
                shadowOffset: { width: 10, height: 10 },
                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 3,
                flex:1,
                flexDirection: "row",
                backgroundColor: "white"}}
            >
                <Text style={{paddingLeft:10, fontSize:10, flex:1, textAlign:"center"}}>
                {"Endereço: "+ props.clinica.item.endereco}
                {"\n"}
                {"Número: "+ props.clinica.item.numEndereco}
                {"\n"}
                {"Complemento: "+ props.clinica.item.complemento}
                {"\n"}
                {"CEP: "+ props.clinica.item.cep}
                {"\n"}
                {"Cidade: "+ props.clinica.item.cidade}
                {"\n"}
                {"Bairro: "+ props.clinica.item.bairro}
                {"\n"}
                {"Estado: "+ props.clinica.item.estado+ " - "}
                {"País: "+ props.clinica.item.pais}
                </Text>
            </View>
        </View>
    );
}


const ClinicaDetalheView = (props) => {
    return(

        <SafeAreaView style={{
            paddingTop:10, paddingLeft:5, paddingRight:5, fontSize:10, flex:1, textAlign:"center", flex: 1, backgroundColor:"#DBE8B3",}}>
            <FlatList
                ListHeaderComponent={() => renderHeader(props)}
                ListEmptyComponent={renderEmptyMedico}
                data={props.clinica.item.medicos}
                renderItem={renderMedico}
                keyExtractor={item => item.id}
                ListFooterComponent={ () => renderFooter(props)}
            />
        </SafeAreaView>

    );
}


const ClinicaDetalheViewOld = (props) => {
    console.log(" nos detalhes")
    console.log(props)
    console.log(props.clinica)
    return (
        <ScrollView style={{paddingTop:10, paddingLeft:10, paddingRight:10, backgroundColor:"#DBE8B3",flex:1 }}>
            <Text style={{textAlign:"center", fontSize:20, marginBottom:10, fontWeight:"700"}}>
                {props.clinica.item.titulo}
            </Text>
            <View style={{
                padding:10,
                borderRadius:5,
                shadowOffset: { width: 10, height: 30 },
                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 3,
                flexDirection: "row",
                backgroundColor: "white",
                marginBottom:15}}
            >
                <Image
                    style={{height:50, width:50}}
                    resizeMode="cover"
                    source={{uri: props.clinica.item.urlImagem}}
                />
                <Text style={{flex:1, textAlign:"justify", fontSize:10}}>
                    {props.clinica.item.descricao}               
                </Text>
            </View>

            <Text style={{textAlign:"center", fontSize:14}}>
                Médicos:
            </Text>
            <View style={{
                padding:10,
                borderRadius:5,
                marginBottom:15,
                shadowOffset: { width: 10, height: 10 },
                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 3,
                flex:1,
                flexDirection: "row",
                backgroundColor: "white"}}
            >
                <SafeAreaView style={{
                    paddingLeft:10, fontSize:10, flex:1, textAlign:"center", flex: 1, marginTop: StatusBar.currentHeight || 0
                    }}>
                    <FlatList
                        data={props.clinica.item.medicos}
                        renderItem={renderMedico}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>

            </View>


            <Text style={{textAlign:"center", fontSize:14}}>
                Endereço:
            </Text>
            <View style={{
                padding:10,
                borderRadius:5,
                marginBottom:15,
                shadowOffset: { width: 10, height: 10 },
                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 3,
                flex:1,
                flexDirection: "row",
                backgroundColor: "white"}}
            >
                <Text style={{paddingLeft:10, fontSize:10, flex:1, textAlign:"center"}}>
                {"Endereço: "+ props.clinica.item.endereco}
                {"\n"}
                {"Número: "+ props.clinica.item.numEndereco}
                {"\n"}
                {"Complemento: "+ props.clinica.item.complemento}
                {"\n"}
                {"CEP: "+ props.clinica.item.cep}
                {"\n"}
                {"Cidade: "+ props.clinica.item.cidade}
                {"\n"}
                {"Bairro: "+ props.clinica.item.bairro}
                {"\n"}
                {"Estado: "+ props.clinica.item.estado+ " - "}
                {"País: "+ props.clinica.item.pais}
                </Text>
            </View>

        </ScrollView>
    )
}

export default ClinicaDetalheView;