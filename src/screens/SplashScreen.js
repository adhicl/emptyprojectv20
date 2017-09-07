import Expo, { Notifications } from 'expo';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';

class SplashScreen extends Component {
    displayName = 'Splash Screen';

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const resetActions = NavigationActions.reset({
            index: 0,
            actions: [{ "type": "Navigation/NAVIGATE", "routeName": "Main" }]
        });

        this.props.navigation.dispatch(resetActions);
    }
    
    static navigationOptions = {
        title: 'Splash Screen'
    };
    
    render() {
        return (
            <View style={styles.containerViewStyle}>
                <Text> Splash Screen </Text>
            </View>

        );
    }
}

const styles = {
    containerViewStyle: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default SplashScreen;