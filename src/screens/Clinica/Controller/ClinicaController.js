import React from 'react';
import ClinicaView from '../View/ClinicaView';
import DefaultController from './../../../components/DefaultController';

class ClinicaController extends DefaultController{
    constructor(props) {
        super(props);

        let arrayClinicas = [];

        const getRandomInt = (min = 0, max = 5) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        arrayClinicas.push({
            id: 'clinica-bom-jardim',
            titulo: "Clinica Bom Jardim",
            urlImagem: "https://cdn.pixabay.com/photo/2020/09/01/05/45/vitruvian-man-5534282__340.jpg",
            url: "https://google.com.br",
            descricao: "Atendimento diversificados",
            localResumido: "São Paulo - SP",
            endereco: "Av Brasileirissima",
            numEndereco: "291",
            complemento: "sala 5",
            cep: "02002-010",
            cidade: "São Paulo",
            bairro: "Morumbi",
            estado: "SP",
            pais: "Brasil",
            rating: getRandomInt(3,5),
            category: ['odontologia', 'cirurgias dental'],
            medicos: [

            ]
        })

        arrayClinicas.push({
            id: 'clinica-anastacia-rapouzo',
            titulo: "Maternidade Anastácia Rapouzo",
            urlImagem: "https://cdn.pixabay.com/photo/2020/09/01/05/45/vitruvian-man-5534282__340.jpg",
            url: "https://google.com.br",
            descricao: "Maternidade",
            localResumido: "São Paulo - SP",
            endereco: "Av Brasileirissima",
            numEndereco: "291",
            complemento: "sala 5",
            cep: "02002-010",
            cidade: "São Paulo",
            bairro: "Barra Funda",
            estado: "SP",
            pais: "Brasil",
            rating: getRandomInt(3,5),
            category: ['maternidade'],
            medicos: [

            ]
        })

        arrayClinicas.push({
            id: 'clinica-hospital-do-cancer-de-sao-paulo',
            titulo: "Hospital do Cancer de São Paulo",
            urlImagem: "https://cdn.pixabay.com/photo/2020/09/01/05/45/vitruvian-man-5534282__340.jpg",
            url: "https://google.com.br",
            descricao: "Hospital referência no tratamento de Canceres",
            localResumido: "São Paulo - SP",
            endereco: "Av Brasileirissima",
            numEndereco: "291",
            complemento: "sala 5",
            cep: "02002-010",
            cidade: "São Paulo",
            bairro: "Barra Funda",
            estado: "SP",
            pais: "Brasil",
            rating: getRandomInt(3,5),
            category: ['maternidade'],
            medicos: [

            ]
        })

        this.state = {
            originalArrayClinicas: [... arrayClinicas],
            filteredArrayClinicas: [... arrayClinicas],
            search: "",
        }

    }

    goToClinicaDetalhes = (clinica) => {
        return this.props.navigation.navigate('ClinicaDetalhe', clinica);
    }

    updateSearch = (text) => {
        let textValidator = text.toUpperCase();
        const filteredArray = this.state.originalArrayClinicas.filter((info) => {
            return info.titulo.toUpperCase().includes(textValidator);
        });
        
        this.setState({
            filteredArrayClinicas: [... filteredArray],
            search: text,
        })

    }


    render(){
        return (
            <ClinicaView
                onButtonPressed={this.buttonPressed}
                updateSearch={this.updateSearch}
                search={this.state.search}
                filteredArrayClinicas={this.state.filteredArrayClinicas}
                goToClinicaDetalhes={this.goToClinicaDetalhes}
            />
        )
    }
}

export default ClinicaController;