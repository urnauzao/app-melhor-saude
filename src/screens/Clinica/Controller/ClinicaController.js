import React from 'react';
import ClinicaView from '../View/ClinicaView';
import DefaultController from './../../../components/DefaultController';
import imagemModeloMedico from './../../../assets/images/exemplos/medico.jpg';


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
            cep: "02321-010",
            cidade: "São Paulo",
            bairro: "Barra Funda",
            estado: "SP",
            pais: "Brasil",
            rating: getRandomInt(3,5),
            category: ['hospital'],
            medicos: [
                {
                    id: 'joaodedonatello',
                    nome: "João de Donatello",
                    idade: 50, 
                    especializacao: "Cirurgião Caríaco",
                    precoConsulta: 500,
                    telefone: "+55 11 99910-0020",
                    email: "joaodonatello@gmail.com",
                    whatsapp: 5511999100020,
                    foto: imagemModeloMedico,
                },
                {
                    id: "anabreatrizscarelly",
                    nome: "Ana Beatriz Scarelly",
                    idade: 46, 
                    especializacao: "Cirurião Geral",
                    precoConsulta: 490,
                    telefone: "+55 11 95420-0020",
                    email: "anabreatrizscarelly@yahoo.com.br",
                    whatsapp: 5511954200020,
                    foto: imagemModeloMedico,
                },
                {
                    id: "sofiastefaniamaggie",
                    nome: "Sofia Stefania Maggie",
                    idade: 32, 
                    especializacao: "Psicóloga",
                    precoConsulta: 400,
                    telefone: "+55 11 99100-0124",
                    email: "sofiastefania_2020@hotmail.com",
                    whatsapp: 5511991000124,
                    foto: imagemModeloMedico,
                },

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