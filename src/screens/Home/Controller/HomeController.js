import React from 'react';
import HomeView from '../View/HomeView';
import HomeModel from '../Model/HomeModel';
import DefaultController from './../../../components/DefaultController';

class HomeController extends DefaultController{
    constructor(props) {
        super(props);

        this.state = {
            search: "",
        }

        this.homeModel = new HomeModel();
    }

    goToServicos = () => {
        this.props.navigation.navigate('Servicos');
    }

    updateSearch = (text) => {
        this.setState({
            search: text,
        })
    }

    render(){
        return (
            <HomeView
                onButtonPressed={this.buttonPressed}
                goToServicos={this.goToServicos}
                updateSearch={this.updateSearch}
                search={this.state.search}
            />
        )
    }
}

export default HomeController;