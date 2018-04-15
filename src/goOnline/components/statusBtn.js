import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Container, Button, Content, Text, List, ListItem, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class StatusBtn extends Component {
    constructor(){
        super();
        this.state = {
            showFull: false,
            value: false
        }
    }
    render() {
        const { value } = this.state;
        const { selectedDeliveryCenter, selectedTask } = this.props;
        const {name, address, serviceTypes } = selectedDeliveryCenter;
        return (
            <View style={styles.cardItem}>
                {/*<Text uppercase={true} style={styles.textNote}>Status</Text>*/}
                <Button small rounded
                        onPress={() => this.setState({value: !value})}
                        style={{
                            alignSelf: 'center',
                            backgroundColor:"#fc8019",
                            elevation: 0,
                        }}
                >
                    <Text style={{
                        color: "#fff",
                        fontFamily: 'Lato-Bold',
                        fontSize: 11
                    }}>{value && 'online' || 'Go Online'}</Text>
                </Button>
                {/*<View style={{marginBottom:15}}>*/}
                    {/*<Text uppercase={true} style={styles.text}>pickup from</Text>*/}
                    {/*<Text style={styles.textNote}>{*/}
                        {/*selectedTask === 'Pickups' && 'Multiple pickup locations from home and office' || address*/}
                    {/*}</Text>*/}
                {/*</View>*/}
                {/*<View style={{marginBottom:15}}>*/}
                    {/*<Text uppercase={true} style={styles.text}>Deliver To</Text>*/}
                    {/*<Text style={styles.textNote}>{*/}
                        {/*selectedTask === 'Pickups' && address ||*/}
                        {/*selectedTask === 'Deliveries' && 'Multiple delivery locations to home and office' ||*/}
                        {/*selectedTask === 'Airport' && name === 'Airport' && 'Wings center at your arrival airport, India' ||*/}
                        {/*selectedTask === 'Airport' && name !== 'Airport' && 'Shambshabhad Airport, hyderabad, India' ||*/}
                        {/*selectedTask === 'Center' && 'Wings Centers in other areas of the city'*/}
                    {/*}</Text>*/}
                {/*</View>*/}
            </View>
        );
    };
}

const styles = StyleSheet.create({
    cardItem:{
        backgroundColor:'transparent',
        padding:10,
        margin:5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily:'Lato-Semibold',
        fontSize:10,
        color:'#fc8019',
    },
    textName: {
        fontFamily:'Lato-Regular',
        // paddingVertical:5,
        fontSize:14,
        color:'#000',
        opacity:.87,
        // paddingLeft:0,
    },
    textNote: {
        fontFamily:'Lato-Regular',
        fontSize:10,
        color:'#000',
        opacity:.54,
        // textAlign:'center'
    },
});
