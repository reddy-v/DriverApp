import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import GoOnline from '../goOnline';
import {getSelectedDeliveryCenter, getSelectedTask} from './actions';

const mapStateToProps = (state) => ({
    selectedCity: state.pickupCenter.selectedCity,
    selectedDeliveryCenter: state.pickupCenter.selectedDeliveryCenter,
    selectedTask: state.goOnline.selectedTask,
});

const mapActionCreators = (dispatch) => {
        return {
            getSelectedDeliveryCenter: bindActionCreators(getSelectedDeliveryCenter, dispatch),
            getSelectedTask: bindActionCreators(getSelectedTask, dispatch),
        }
};

export default connect(mapStateToProps, mapActionCreators)(GoOnline);
