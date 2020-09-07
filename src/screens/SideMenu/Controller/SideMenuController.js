import React from 'react';
import SideMenuView from '../View/SideMenuView';

class SideMenuController extends React.Component{
    constructor(){
        super();
    }

    goToServico = () => {
        this.props.navigation.navigate('Servicos');
    }

    goToHome = () => {
        this.props.navigation.navigate('Home');
    }

    goToClinica = () => {
        this.props.navigation.navigate('Clinica');
    }

    render(){
        return (
            <SideMenuView
                onButtonPressed={this.buttonPressed}
                goToClinica={this.goToClinica}
                goToHome={this.goToHome}
                goToServico={this.goToServico}
            />
        );
    }
}

export default SideMenuController;