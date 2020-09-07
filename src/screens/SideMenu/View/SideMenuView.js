import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './SideMenuStyle';

export default SideMenuView = (props) => {
    return (
        <View style={styles.contaier}>
            <View style={styles.navSectionStyle}>
                <TouchableOpacity onPress={props.goToHome}>
                    <View style={styles.navItemStyle}>
                        <Text style={styles.navItemTitleStyle}>
                            Início
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.goToClinica}>
                    <View style={styles.navItemStyle}>
                        <Text style={styles.navItemTitleStyle}>
                            Clínicas
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.goToServico}>
                    <View style={styles.navItemStyle}>
                        <Text style={styles.navItemTitleStyle}>
                            Serviços
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}