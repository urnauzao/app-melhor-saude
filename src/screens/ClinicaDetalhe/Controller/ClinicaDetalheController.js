import React from 'react';
import ClinicaDetalheView from '../View/ClinicaDetalheView';

class ClinicaDetalheController extends React.Component{
    constructor(props) {
        super(props);
        console.log("urnau")
        console.log(props);

        this.state = {
            clinica:this.props.navigation.state.params.clinica,
        }

        // const clinica = false;
        // if(this.props.navigation.state.params) {
        
        // }
        console.log(this.state.clinica)
    }
    render(){
        return (
            <ClinicaDetalheView 
                clinica={this.state.clinica}
            />
        );
    }
}

export default ClinicaDetalheController;