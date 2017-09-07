import Expo, { Notifications } from 'expo';

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';

class Tab1Screen extends Component {
    displayName = 'Tab 1 Screen';

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.navigation.setParams({
            handleEnterChild: this._onHandleEnterChild.bind(this)
        });
    }

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        console.log(params);
        return {
            title: 'Tab 1 S'
        };
    };

    _onHandleEnterChild() {
        this.props.navigation.dispatch(NavigationActions.navigate({ routeName: "Another" }));
    }
    
    render() {
        return (
            <View style={styles.containerViewStyle}>
                <Text> Tab 1 </Text>
                <Button
                    onPress={this._onHandleEnterChild.bind(this)}
                    title="Click Child"
                    color="#841584"
                />
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

export default Tab1Screen;