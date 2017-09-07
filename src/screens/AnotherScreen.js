import Expo, { Notifications } from 'expo';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';

class AnotherScreen extends Component {
    displayName = 'Another Screen';

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }
    
    static navigationOptions = {
        title: 'Child Screen'
    };
    
    render() {
        return (
            <View style={styles.containerViewStyle}>
                <Text> Another Screen </Text>
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

export default AnotherScreen;