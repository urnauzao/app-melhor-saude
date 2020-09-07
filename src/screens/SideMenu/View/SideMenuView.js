import React from 'react';
import {Text, View, TouchableOpactity} from 'react-native';
import styles from './SideMenuStyle';

export default SideMenuView = (props) => {
    return (
        <View style={styles.contaier}>
            <View style={styles.navSectionStyle}>
                <TouchableOpactity>
                    <View style={styles.navItemStyle}>
                        <Text style={styles.navItemTitleStyle}>
                            Lugares
                        </Text>
                    </View>
                </TouchableOpactity>
                <TouchableOpactity>
                    <View style={styles.navItemStyle}>
                        <Text style={styles.navItemTitleStyle}>
                            Meus Lugares
                        </Text>
                    </View>
                </TouchableOpactity>
            </View>
        </View>
    );
}