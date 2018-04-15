import update from 'react-addons-update';
import { Dimensions } from 'react-native';


export default taskExecutionReducers = ( state=initialState, action) => {
    switch (action.type) {
        case "GET_SELECTED_TASK" :
            return update(state, {

            });
    }
    return state;
}
const initialState = {

};