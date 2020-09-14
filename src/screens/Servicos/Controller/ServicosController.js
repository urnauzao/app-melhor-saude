import React from 'react';
import ServicosView from '../View/ServicosView';
import DefaultController from './../../../components/DefaultController';

class ServicosController extends DefaultController {
    constructor(props) {
        super(props);

        let arrayServicos = [];

        const getRandomInt = (min = 0, max = 5) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        // for(let i = 0; i<5; i++){
        //     arrayServicos.push({
        //         id: 3000+i,
        //         titulo: "Servico Urnau #"+i,
        //         url: "https://cdn.pixabay.com/photo/2020/09/01/05/45/vitruvian-man-5534282__340.jpg",
        //         descricao: "Minha Observacao",
        //         rating: getRandomInt(0,5),
        //         category: "Servicos"
        //     });
        // }
        arrayServicos.push({
            id: 'servido-dentista',
            titulo: "Dentistas",
            url: "https://cdn.pixabay.com/photo/2020/09/01/05/45/vitruvian-man-5534282__340.jpg",
            descricao: "Atendimento diversificados",
            rating: getRandomInt(3,5),
            category: "Servicos"
        })

        arrayServicos.push({
            id: 'servico-medico-geral',
            titulo: "Médicos Gerais",
            url: "https://saude.rs.gov.br/upload/recortes/202004/27132744_140065_GD.jpg",
            descricao: "Atendimento 24 horas",
            rating: getRandomInt(2,5),
            category: "Servicos"
        })

        
        arrayServicos.push({
            id: 'servico-neurocirurgiao',
            titulo: "Neurocirurgiões",
            url: "https://saude.rs.gov.br/upload/recortes/202004/27132744_140065_GD.jpg",
            descricao: "Atendimento 24 horas",
            rating: getRandomInt(2,5),
            category: "Servicos"
        })

        this.state = {
            originalArrayServicos: [... arrayServicos],
            filteredArrayServicos: [... arrayServicos],
            search: "",
        }

    }

    goToServicoDetalhes = (id) => {
        return this.props.navigation.navigate('Servico', id);
    }

    updateSearch = (text) => {
        let textValidator = text.toUpperCase();
        const filteredArray = this.state.originalArrayServicos.filter((info) => {
            return info.titulo.toUpperCase().includes(textValidator);
        });
        
        this.setState({
            filteredArrayServicos: [... filteredArray],
            search: text,
        })

    }

    render(){
        return (
            <ServicosView
                onButtonPressed={this.buttonPressed}
                updateSearch={this.updateSearch}
                search={this.state.search}
                filteredArrayServicos={this.state.filteredArrayServicos}
                goToServicoDetalhes={this.goToServicoDetalhes()}
            />
        )
    }
}

export default ServicosController;