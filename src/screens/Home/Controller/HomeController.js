import React from 'react';
import HomeView from '../View/HomeView';
import HomeModel from '../Model/HomeModel';

class HomeController extends React.Component{
    constructor() {
        super();
        this.homeModel = new HomeModel();
    }

    render(){
        return (
            <HomeView/>
        )
    }
}

export default HomeController;