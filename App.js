import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// redux related things
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import AppNavigation from './src/navigations/AppNavigation';
import AppReducer from './src/reducers';

export default class App extends React.Component {
    displayName = "Main App";

    store = createStore(AppReducer, {}, applyMiddleware(ReduxThunk));

    render() {
        return (
            <Provider store={this.store}>
                <AppNavigation />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
