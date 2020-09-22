import React from 'react';
import ServicosView from '../View/ServicosView';
import DefaultController from './../../../components/DefaultController';
import axios from 'axios';

class ServicosController extends DefaultController {
    constructor(props) {
        super(props);

        let arrayServicos = [];

        // const getRandomInt = (min = 0, max = 5) => {
        //     min = Math.ceil(min);
        //     max = Math.floor(max);
        //     return Math.floor(Math.random() * (max - min)) + min;
        // }

        this.state = {
            originalArrayServicos: [... arrayServicos],
            filteredArrayServicos: [... arrayServicos],
            search: "",
        }

        this.props.navigation.setParams({titlePage:"Serviços"});

    }

    goToClinicas = ({servico}) => {
        let id = servico.item.id;
        axios.get('http://melhor-saude-webservice.herokuapp.com/servico/showWithClinicas/'+id)
        .then(({data}) => {
            // let arrayClinicas = data.servicos[0] || [];
            // console.log(data);
            // return;
            return this.props.navigation.navigate('Clinicas', data);
        })
        .catch((error) => {
            console.log(error);
        });
        // return this.props.navigation.navigate('Clinicas');
    }

    updateSearch = (text) => {
        let textValidator = text.toUpperCase();
        const filteredArray = this.state.originalArrayServicos.filter((info) => {
            return info.nome.toUpperCase().includes(textValidator);
        });

        
        this.setState({
            filteredArrayServicos: [... filteredArray],
            search: text,
        })

    }

    componentDidMount(){
        axios.get('http://melhor-saude-webservice.herokuapp.com/servico/show')
        .then(({data}) => {
            let originalArrayServicos = data.servicos || [];
            this.setState({ originalArrayServicos });
            this.updateSearch(this.state.search);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render(){
        return (
            <ServicosView
                onButtonPressed={this.buttonPressed}
                updateSearch={this.updateSearch}
                search={this.state.search}
                filteredArrayServicos={this.state.filteredArrayServicos}
                goToClinicas={this.goToClinicas}
                // goToServicoDetalhes={this.goToServicoDetalhes()}
            />
        )
    }
}

export default ServicosController;