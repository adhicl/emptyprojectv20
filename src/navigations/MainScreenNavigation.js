import Expo from 'expo';
import React, { Component } from 'react';

import { addNavigationHelpers } from 'react-navigation';
import MainScreenNavigator from './MainScreenNavigator';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabBar
    };
};

class MainScreenNavigation extends Component {
    displayName = "Main Navigation (Tab)"

    render() {
        const { dispatch, navigationState } = this.props;

        return (
            <MainScreenNavigator
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState
                    })
                }
            />
        );
    }
}

export default connect(mapStateToProps)(MainScreenNavigation);
