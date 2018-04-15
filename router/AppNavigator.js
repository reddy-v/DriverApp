import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../src/home/homeContainer';
import PickupCenter from "../src/pickupCenter/container";
import SelectCity from "../src/pickupCenter/screens/selectCity";
import SelectCenter from "../src/pickupCenter/screens/selectCenter";
import GoOnline from "../src/goOnline/container";
import SelectService from "../src/goOnline/screen/selectService";
import TaskExecution from "../src/taskExecution";
import TaskItem from "../src/taskExecution/screen/taskItem";


const AppNavigator = StackNavigator(
    {
        Home: { screen: Home },
        PickupCenter: { screen: PickupCenter },
        SelectCity: { screen: SelectCity },
        SelectCenter: { screen: SelectCenter },
        GoOnline: { screen: GoOnline },
        SelectService: { screen: SelectService },
        TaskExecution: { screen: TaskExecution },
        TaskItem: { screen: TaskItem },
    },
    {
        initialRouteName: "GoOnline",
        headerMode: "none",
    }
);

export default AppNavigator;