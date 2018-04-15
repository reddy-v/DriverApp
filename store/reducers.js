import { combineReducers} from 'redux';
import homeReducers from '../src/home/homeReducers';
import pickupCenterReducers from '../src/pickupCenter/reducers';
import goOnlineReducers from '../src/goOnline/reducers';
import taskExecutionReducers from '../src/taskExecution/reducers';



export const makeRootReducer = () => {
    return combineReducers({
        home: homeReducers,
        pickupCenter: pickupCenterReducers,
        goOnline: goOnlineReducers,
        taskExecution: taskExecutionReducers,
    });
};

export default makeRootReducer;