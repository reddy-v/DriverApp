import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TextInput, Alert, AsyncStorage, ScrollView } from "react-native";
import { Container, Button, Content, Icon, Body,
    Input, Text, Card, CardItem, Left, Right, List, ListItem } from 'native-base';


export default class CurrentLocation extends Component {

    render() {
        const { onPress } = this.props;
        return (
            <List>
                <ListItem avatar button onPress={onPress} style={{backgroundColor:'#fff'}}>
                    <Left style={{flex:1,justifyContent:'center'}}>
                        <Icon name="ios-locate-outline" style={{fontSize:20,color:'#535665'}}/>
                    </Left>
                    <Body style={{borderBottomWidth:2,borderColor:'#000',flex:12}}>
                        <Text style={styles.text}>Current Location</Text>
                        <Text note style={styles.textNote}>Using GPS</Text>
                    </Body>
                </ListItem>
            </List>
        );
    };
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    cardContainer:{
        flex:1,
        elevation:0,
        width:width,
        marginTop:0,
    },
    text:{fontFamily:'Lato-Semibold',fontSize:14,color:'#535665'},
    textNote:{fontFamily:'Lato-Semilight',fontSize:12},
    blackLine: {
        backgroundColor: '#000',
        height: 1,
        width: width-20,
        marginTop:15,
    },
});
