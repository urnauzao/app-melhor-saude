import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
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



const ClinicaDetalheView = (props) => {
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