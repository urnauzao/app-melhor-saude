import React from 'react';
import ServicosView from '../View/ServicosView';
import DefaultController from './../../../components/DefaultController';

class ServicosController extends DefaultController {
    render (){
        return (
            <ServicosView />
        )
    }

}

export default ServicosController;