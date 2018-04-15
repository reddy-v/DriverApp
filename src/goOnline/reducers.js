import update from 'react-addons-update';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;


export default goOnlineReducers = ( state=initialState, action) => {
    switch (action.type) {
        case "GET_SELECTED_TASK" :
            return update(state, {
                selectedTask: {
                    $set: action.payload
                },
            });
        case "ADD_TO_TASK_LIST" :
            return update(state, {
                tasksList: {
                    $push: [action.payload]
                },
            });
    }
    return state;
}
const initialState = {
    selectedTask:'',
    tasksList:[],
};