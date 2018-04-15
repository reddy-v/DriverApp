import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Container, Header, Content, Text, Switch, Button, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get("window");

export default class TaskExecution extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        const { selectedDeliveryCenter, selectedCity, selectedTask } = this.props;
        const { navigate } = this.props.navigation;
        return (
            <Container style={{backgroundColor:'#f9f9f9'}}>
                <Header style={{backgroundColor:'#fff',height:55}}>
                    <Left style={{flex:1}}>
                        <Icon name="ios-arrow-round-back" style={{fontSize:30,color:'#131313'}}/>
                    </Left>
                    <Body style={{flex:8,alignItems:'flex-start'}}>
                        <Text uppercase={true} style={styles.text}>Task</Text>
                        <Text note style={styles.textNote}>
                            {selectedTask || 'Pickups'}
                        </Text>
                    </Body>
                </Header>
                <Content contentContainerStyle={{backgroundColor:'#f9f9f9',alignItems:'stretch'}}>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={()=>navigate('TaskItem')} style={styles.cardItem}>
                            <View style={{flex:8}}>
                                <Text uppercase={true} style={styles.text}>Pickup From</Text>
                                <Text uppercase={false} style={styles.textNote}>{'Room No 143, Hitech CIty, Hyderabad'}</Text>
                            </View>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Icon name="ios-checkbox" style={{fontSize:25,color:'#fc8019'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={()=>navigate('TaskItem')} style={styles.cardItem}>
                            <View style={{flex:8}}>
                                <Text uppercase={true} style={styles.text}>Pickup From</Text>
                                <Text uppercase={false} style={styles.textNote}>{'Room No 143, Hitech CIty, Hyderabad'}</Text>
                            </View>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Icon name="ios-checkbox-outline" style={{fontSize:25,color:'#aaa'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity style={styles.cardItem}>
                            <View style={{flex:8}}>
                                <Text uppercase={true} style={styles.text}>Deliver To</Text>
                                <Text uppercase={false} style={styles.textNote}>{'Wings Center, Opp Somajiguda, Surya Nagar, Hitech City, Hyderabad'}</Text>
                            </View>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Icon name="ios-checkbox-outline" style={{fontSize:25,color:'#aaa'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    };
}

const styles = StyleSheet.create({
    card:{
        flex: 1,
    },
    cardItem:{
        flexDirection: 'row',
        backgroundColor:'#fff',
        elevation:1,
        padding:15,
        margin:5,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    textNote: {
        fontFamily:'Lato-Regular',
        fontSize:12,
        color:'#000',
        opacity:.54,
    },
    text: {
        fontFamily:'Lato-Semibold',
        fontSize:10,
        color:'#000',
        opacity:.87,
    },
});