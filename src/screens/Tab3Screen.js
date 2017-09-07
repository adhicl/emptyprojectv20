import Expo, { Notifications } from 'expo';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';

class Tab3Screen extends Component {
    displayName = 'Tab 3 Screen';

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        
    }
    
    static navigationOptions = {
        title: 'Tab 3'    
    };
    
    render() {
        return (
            <View style={styles.containerViewStyle}>
                <Text> Tab 3 </Text>
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

export default Tab3Screen;