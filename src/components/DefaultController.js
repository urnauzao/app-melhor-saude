import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class DefaultController extends React.Component{
    static navigationOptions = ({navigation}) => {
        let navigationProps = null;

        navigationProps = {
            headerTintColor: '#000',
            headerStyle:{
                backgroundColor: '#f5ffff'
            },
            
        };
        

        if(!navigation.getParam('showBackButton', false)){
            let view = (
                <TouchableOpacity onPress={ () => navigation.toggleDrawer()}>
                    <View style={
                        {
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingBottom: 10,
                            paddingTop: 10
                        }
                    }>
                        <Text>Menu</Text>
                    </View>
                </TouchableOpacity>
            );
            
            navigationProps = {... navigationProps, headerLeft: () => view};
        }
        return navigationProps;
    }
}