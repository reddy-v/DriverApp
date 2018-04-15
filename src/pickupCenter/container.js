import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import PickupCenter from '../pickupCenter';
import {getSelectedDeliveryCenter} from './actions';

const mapStateToProps = (state) => ({
    selectedDeliveryCenter: state.pickupCenter.selectedDeliveryCenter,
});

const mapActionCreators = (dispatch) => {
        return {
            getSelectedDeliveryCenter: bindActionCreators(getSelectedDeliveryCenter, dispatch),
        }
};

export default connect(mapStateToProps, mapActionCreators)(PickupCenter);
