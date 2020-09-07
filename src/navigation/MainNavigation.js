import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeController from '../screens/Home/Controller/HomeController';
import SideMenu from '../screens/SideMenu/Controller/SideMenuController';

const AppLogged = createDrawerNavigator(
    {
        Places: createStackNavigator({
            Home: HomeController,
        })
    },{
        initialRouteName: 'Places',
        contentComponent: SideMenu,
    }
);

const AppContainer = createAppContainer(AppLogged);

export default class MainNavigation extends React.Component{
    render(){
        return <AppContainer ref={nav => { this.navigator = nav; } }/>;
    }
}
