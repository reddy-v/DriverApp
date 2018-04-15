import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Container, Button, Content, Text, List, ListItem, Left, Body, Right } from 'native-base';
import Modal from 'react-native-modalbox';

import Icon from 'react-native-vector-icons/MaterialIcons';
const { width, height } = Dimensions.get("window");

export default class TaskSelect extends Component {

    handlePress = (type) => {
        const { getSelectedTask } = this.props;
        getSelectedTask(type);
        this.refs.modal.close();
    };
    showTaskSelectionModal () {
        this.refs.modal.open()
    };
    render() {
        const { selectedDeliveryCenter, selectedCity } = this.props;
        return (
            <Modal style={styles.modal} backdrop={true} position={"bottom"} ref={"modal"}>
                <View style={styles.card} >
                    <TouchableOpacity onPress={this.handlePress.bind(this,'Pickups')} style={styles.cardItem}>
                        <Text uppercase={true} style={styles.text}>Pickups</Text>
                        <Text note uppercase={false} style={styles.textNote}>Pickup from Home/office</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handlePress.bind(this,'Deliveries')} style={styles.cardItem}>
                        <Text uppercase={true} style={styles.text}>Deliveries</Text>
                        <Text note uppercase={false} style={styles.textNote}>Deliver to Home/office</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.card} >
                    <TouchableOpacity onPress={this.handlePress.bind(this,'Center')} style={styles.cardItem}>
                        <Text uppercase={true} style={styles.text}>Ship to Center</Text>
                        <Text note uppercase={false} style={styles.textNote}>Ship to other delivery centers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handlePress.bind(this,'Airport')} style={styles.cardItem}>
                        <Text uppercase={true} style={styles.text}>Ship to Airport</Text>
                        <Text note uppercase={false} style={styles.textNote}>Ship to nearest Airport</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    };
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: width,
        backgroundColor:'#f9f9f9',
    },
    card:{
        flexDirection: 'row',
        flex: 1,
    },
    cardItem:{
        backgroundColor:'#fff',
        elevation:1,
        padding:15,
        margin:5,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    text: {
        fontFamily:'Lato-Semibold',
        fontSize:10,
        color:'#fc8019',
    },
    textName: {
        fontFamily:'Lato-Regular',
        fontSize:12,
        color:'#000',
        opacity:.87,
        paddingVertical:5,
        marginBottom: 15,
    },
    textNote: {
        fontFamily:'Lato-Regular',
        fontSize:10,
        color:'#000',
        opacity:.54
    },
});
