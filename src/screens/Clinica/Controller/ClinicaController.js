import React from 'react';
import ClinicaView from '../View/ClinicaView';
import DefaultController from './../../../components/DefaultController';

class ClinicaController extends DefaultController{
    render(){
        return (
            <ClinicaView/>
        )
    }
}

export default ClinicaController;