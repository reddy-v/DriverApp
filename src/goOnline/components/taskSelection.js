import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Container, Button, Content, Text, Card, CardItem, Left, Body, Right } from 'native-base';
import Modal from 'react-native-modalbox';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");

export default class TaskSelection extends Component {
    constructor(){
        super();
        this.state = {
            showFull: false,
            value: false
        }
    }
    handlePress = (type) => {
        const { getSelectedTask } = this.props;
        getSelectedTask(type);
        this.setState({showFull:!this.state.showFull})
    };

    render() {
        const { selectedDeliveryCenter, selectedCity } = this.props;
        const { showFull, value } = this.state;
        return (
            <View style={{position:'absolute',bottom:0}}>
                <Card style={{width:width,elevation:0}} >
                    <CardItem button onPress={()=>this.setState({showFull:!showFull})} style={{}} >
                        {/*<Left style={{flex:1,}}>*/}
                            {/*<Icon name="dots-vertical" style={{fontSize:20,color:'#111'}}/>*/}
                        {/*</Left>*/}
                        <Body style={{flex:8,justifyContent:'center'}}>
                            <Text uppercase={true} style={{fontSize:10,fontFamily:'Lato-Semibold'}}>Select Task</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-up" style={{fontSize:20}}/>
                        </Right>
                    </CardItem>
                </Card>
                {showFull &&
                <View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={this.handlePress.bind(this, 'Pickups')} style={styles.cardItem}>
                            <Text uppercase={true} style={styles.text}>Pickups</Text>
                            <Text note uppercase={false} style={styles.textNote}>Pickup from Home/office</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handlePress.bind(this, 'Deliveries')} style={styles.cardItem}>
                            <Text uppercase={true} style={styles.text}>Deliveries</Text>
                            <Text note uppercase={false} style={styles.textNote}>Deliver to Home/office</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={this.handlePress.bind(this, 'Center')} style={styles.cardItem}>
                            <Text uppercase={true} style={styles.text}>Ship to Center</Text>
                            <Text note uppercase={false} style={styles.textNote}>Ship to other delivery centers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handlePress.bind(this, 'Airport')} style={styles.cardItem}>
                            <Text uppercase={true} style={styles.text}>Ship to Airport</Text>
                            <Text note uppercase={false} style={styles.textNote}>Ship to nearest Airport</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                }
            </View>
        );
    };
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    card:{
        flex: 1,
        flexDirection: 'row',
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
        // color:'#fc8019',
        color:'#000',
        opacity:.87,
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
