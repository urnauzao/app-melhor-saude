import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './SideMenuStyle';

export default SideMenuView = (props) => {
    return (
        <View style={styles.contaier}>
            <View style={styles.navSectionStyle}>
                <TouchableOpacity>
                    <View style={styles.navItemStyle}>
                        <Text style={styles.navItemTitleStyle}>
                            Início
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.navItemStyle}>
                        <Text style={styles.navItemTitleStyle}>
                            Serviços
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.navItemStyle}>
                        <Text style={styles.navItemTitleStyle}>
                            Clínicas
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}