import update from 'react-addons-update';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;


export default homeReducers = ( state=initialState, action) => {
    switch (action.type) {

    }
    return state;
}
const initialState = {
    pickups:[],
};