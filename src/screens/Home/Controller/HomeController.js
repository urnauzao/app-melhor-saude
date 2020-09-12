import React from 'react';
import HomeView from '../View/HomeView';
import HomeModel from '../Model/HomeModel';
import DefaultController from './../../../components/DefaultController';
import { ThemeConsumer } from 'react-native-elements';

class HomeController extends DefaultController{
    constructor(props) {
        super(props);

        let arrayServicos = [];
        let arrayClinicas = [];

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

            arrayClinicas.push({
                id: 1000+i,
                titulo: "Clinica Urnau #"+i,
                url: "https://cdn.pixabay.com/photo/2020/09/01/05/45/vitruvian-man-5534282__340.jpg",
                subtitulo: "Minha Observacao",
                rating: getRandomInt(0,5),
                category: "Clinicas"
            });
        }

        this.state = {
            originalArrayServicos: [... arrayServicos],
            originalArrayClinicas: [... arrayClinicas],
            search: "",
        }

        this.homeModel = new HomeModel();

    }

    goToServicos = () => {
        return this.props.navigation.navigate('Servicos');
    }


    updateSearch = (text) => {
        const filteredArrayServicos = this.state.originalArrayServicos.filter((info) => {
            return info.titulo.includes(text);
        });
        
        const filteredArrayClinicas = this.state.originalArrayClinicas.filter((info) => {
            return info.titulo.includes(text);
        });
        
        this.setState({
            filteredArrayServicos: [... filteredArrayServicos],
            filteredArrayClinicas: [... filteredArrayClinicas],
            search: text,
        })

    }

    render(){
        return (
            <HomeView
                onButtonPressed={this.buttonPressed}
                updateSearch={this.updateSearch}
                search={this.state.search}
                filteredArrayServicos={this.state.originalArrayServicos}
                filteredArrayClinicas={this.state.originalArrayClfilteredArrayClinicas}
                goToServicos={this.goToServicos}
            />
        )
    }
}

export default HomeController;