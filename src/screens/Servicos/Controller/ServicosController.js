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

        for(let i = 0; i<5; i++){
            arrayServicos.push({
                id: 3000+i,
                titulo: "Servico Urnau #"+i,
                url: "https://cdn.pixabay.com/photo/2020/09/01/05/45/vitruvian-man-5534282__340.jpg",
                subtitulo: "Minha Observacao",
                rating: getRandomInt(0,5),
                category: "Servicos"
            });
        }

        this.state = {
            originalArrayServicos: [... arrayServicos],
            search: "",
        }

    }

    goToServicoDetalhes = (id = null) => {
        return this.props.navigation.navigate('Servicos');

    }

    updateSearch = (text) => {
        const filteredArrayServicos = this.state.originalArrayServicos.filter((info) => {
            return info.titulo.includes(text);
        });
        
        this.setState({
            filteredArrayServicos: [... filteredArrayServicos],
            search: text,
        })

    }

    render(){
        return (
            <ServicosView
                onButtonPressed={this.buttonPressed}
                updateSearch={this.updateSearch}
                search={this.state.search}
                filteredArrayServicos={this.state.originalArrayServicos}
                goToServicoDetalhes={this.goToServicoDetalhes()}
            />
        )
    }
}

export default ServicosController;