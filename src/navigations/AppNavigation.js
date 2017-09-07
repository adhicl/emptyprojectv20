import Expo from 'expo';

import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import AppNavigator from './AppNavigator';

class AppNavigation extends Component {
    displayName = "App Navigation (Stack)"

    constructor(props) {
        super(props);
    }

    render() {
        const { dispatch, stackBar } = this.props;

        return (
            <AppNavigator
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: stackBar
                    })
                }
            />
        );
    }

}

const mapStateToProps = (state) => {
    const { stackBar, tabBar } = state;
    return { stackBar, tabBar };
};

export default connect(mapStateToProps)(AppNavigation);
