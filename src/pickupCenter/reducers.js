import update from 'react-addons-update';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;


export default pickupCenterReducers = ( state=initialState, action) => {
    switch (action.type) {
        case "GET_SELECTED_CITY" :
            return update(state, {
                selectedCity: {
                    $set: action.payload
                },
            });
        case "GET_SELECTED_CENTER" :
            return update(state, {
                selectedDeliveryCenter: {
                    $set: action.payload
                },
            });
    }
    return state;
}
const initialState = {
    selectedCity:'',
    selectedDeliveryCenter:'',
    serviceList:[],
};