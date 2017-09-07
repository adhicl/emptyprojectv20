import { AppNavigator } from './AppNavigator';
import { NavigationActions } from 'react-navigation';

const AppNavigationReducer = (state, action) => {
    let nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

export default AppNavigationReducer;