import React from 'react';
import HomeView from '../View/HomeView';
import HomeModel from '../Model/HomeModel';
import DefaultController from './../../../components/DefaultController';

class HomeController extends DefaultController{
    constructor() {
        super();
        this.homeModel = new HomeModel();
    }

    goToServicos = () => {
        this.props.navigation.navigate('Servicos');
    }

    render(){
        return (
            <HomeView
                onButtonPressed={this.buttonPressed}
                goToServicos={this.goToServicos}
            />
        )
    }
}

export default HomeController;