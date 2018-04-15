import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = (state) => ({
    selectedDeliveryCenter: state.pickupCenter.selectedDeliveryCenter,
    selectedService: state.pickupCenter.selectedService,
});

const mapActionCreators = (dispatch) => {
        return {

        }
};

export default connect(mapStateToProps, mapActionCreators)(Home);
