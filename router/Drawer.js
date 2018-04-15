// import React from 'react';
// import { DrawerNavigator, TabNavigator } from 'react-navigation';
// import { Icon } from 'native-base';
// import homeContainer from '../src/home/homeContainer';
// import userAccountContainer from "../src/userAccount/userAccountContainer";
// import cartContainer from "../src/Cart/cartContainer";
// import myOrdersContainer from "../src/myOrders/myOrdersContainer";
// import pickupContainer from "../src/pickup/pickupContainer";
//
//
// // import SideBar from './sidebar/index';
//
//
// const Tabs = TabNavigator(
//     {
//         Pickup: {
//             screen: pickupContainer,
//         },
//         Orders: {
//             screen: myOrdersContainer,
//         },
//         Account: {
//             screen: userAccountContainer,
//         },
//         Cart: {
//             screen: cartContainer,
//         },
//     },
//     {
//         navigationOptions: ({ navigation }) => ({
//             tabBarIcon: ({ focused, tintColor }) => {
//                 const { routeName } = navigation.state;
//                 let iconName;
//                 if (routeName === 'Pickup') {
//                     iconName = `ios-home${focused ? '' : '-outline'}`;
//                 } else if (routeName === 'Account') {
//                     iconName = `ios-person${focused ? '' : '-outline'}`;
//                 } else if (routeName === 'Orders') {
//                     iconName = `ios-list-box${focused ? '' : '-outline'}`;
//                 } else if (routeName === 'Cart') {
//                     iconName = `ios-cart${focused ? '' : '-outline'}`;
//                 }
//                 return <Icon name={iconName} size={25} style={{ color: tintColor }} />;
//             },
//         }),
//         initialRouteName: "Pickup",
//         tabBarPosition: 'bottom',
//         animationEnabled: true,
//         tabBarOptions: {
//             upperCaseLabel: false,
//             showIcon: true,
//             activeTintColor: '#fc8019',
//             inactiveTintColor: '#111',
//             labelStyle: {
//                 fontSize: 12,
//                 fontFamily: "Lato-Regular",
//                 marginBottom: 5,
//                 marginTop:5
//             },
//             iconStyle: {
//             },
//             style: {
//                 height: 60,
//                 backgroundColor: '#fff',
//                 elevation:0
//             },
//             indicatorStyle: {
//                 backgroundColor: 'transparent',
//             },
//
//         },
//         // contentComponent: props => <SideBar {...props} />
//     }
// );
//
// export default Tabs;