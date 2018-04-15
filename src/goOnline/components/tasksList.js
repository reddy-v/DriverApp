import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Container, Button, Content, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get("window");

export default class TaskList extends Component {

    render() {
        const { onPress, selectedTask, selectedDeliveryCenter } = this.props;
        const {name, address, serviceTypes } = selectedDeliveryCenter;
        return (
            <View style={styles.card} >
                <View style={styles.cardItem} >
                    <View style={{flex:1,padding:5,alignItems: 'flex-start'}}>
                        <Text uppercase={true} style={styles.text}>pickup from</Text>
                        <Text style={styles.textNote}>{
                        selectedTask === 'Pickups' && 'Multiple pickup locations from home and office' || address
                        }</Text>
                    </View>
                    <View style={{flex:1,padding:5,alignItems: 'flex-start'}}>
                        <Text uppercase={true} style={styles.text}>Deliver To</Text>
                        <Text style={styles.textNote}>{
                            selectedTask === 'Pickups' && address ||
                            selectedTask === 'Deliveries' && 'Multiple delivery locations to home and office' ||
                            selectedTask === 'Airport' && name === 'Airport' && 'Bangalore airport, Bangalore, India' ||
                            selectedTask === 'Airport' && name !== 'Airport' && 'Shambshabhad Airport, hyderabad, India' ||
                            selectedTask === 'Center' && 'Tarnaka Wings Center, Taranaka, Hyderabad'
                        }</Text>
                    </View>
                </View>
                <View style={[styles.cardItem,{elevation:2}]} >
                    <View style={{flex:2,padding:5}}>
                        <Text uppercase={true} style={styles.text}>Parcel Details</Text>
                        <Text uppercase={false} style={styles.textNote}>10 Parcels</Text>
                    </View>
                    <View style={{flex:2,padding:5}}>
                        <Text uppercase={true} style={styles.text}>Estimated Earnings</Text>
                        <Text uppercase={false} style={styles.textNote}>Rs 500.00</Text>
                    </View>
                    <TouchableOpacity onPress={onPress} style={styles.btn}>
                        <Text uppercase={true} style={[styles.text,{color:'#fc8019',opacity:1}]}>
                            Accept</Text>
                    </TouchableOpacity>
                </View>
                </View>
        );
    };
}

const styles = StyleSheet.create({
    card:{
        flex: 1,
        backgroundColor:'#fff',
        flexDirection:'row',
    },
    cardItem:{
        backgroundColor:'#fff',
        paddingVertical:15,
        paddingHorizontal:10,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    btn: {
        flex:1,
        paddingVertical:5,
        paddingHorizontal:10,
        borderWidth:0.4,
        borderColor:'#fc8019',
        borderRadius:15,
        marginTop:5,
    },
    textNote: {
        fontFamily:'Lato-Regular',
        fontSize:11,
        color:'#000',
        opacity:.54,
        paddingVertical:5,
        // textAlign:'center'
    },
    text: {
        fontFamily:'Lato-Semibold',
        fontSize:10,
        color:'#000',
        opacity:.87,
        // textAlign:'center'

    },
});