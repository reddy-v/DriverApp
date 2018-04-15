import React, { Component } from 'react';
import {View, Text} from "react-native";
import createStore from "./store/store";
import { Provider } from 'react-redux';
import AppNavigator from './router/AppNavigator';


export default class CourierApp extends Component {

    render() {
        const initialState = window.__INITIAL_STATE__;
        const store = createStore(initialState);
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}