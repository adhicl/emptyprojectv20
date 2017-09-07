import { combineReducers } from 'redux';

import MainScreenNavigator from '../navigations/MainScreenNavigator';
import AppNavigator from '../navigations/AppNavigator';

const AppReducer = combineReducers({
    stackBar: (state, action) => AppNavigator.router.getStateForAction(action, state),
    tabBar: (state, action) => MainScreenNavigator.router.getStateForAction(action, state)
});

export default AppReducer;
