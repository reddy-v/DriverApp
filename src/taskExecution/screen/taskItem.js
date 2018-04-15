import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Container, Header, Content, Text, Switch, Button, Left, Body, Right } from 'native-base';
// import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get("window");

export default class TaskItem extends Component {
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
                        <Text uppercase={true} style={styles.text}>Pickup From</Text>
                        <Text uppercase={false} style={styles.textNote}>
                            {'Room No 143, Hitech CIty, Hyderabad'}</Text>
                    </Body>
                </Header>
                <Content contentContainerStyle={{backgroundColor:'#f9f9f9',alignItems:'stretch'}}>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={()=>navigate('TaskItem')} style={styles.cardItem}>
                            <View style={{flex:8}}>
                                <Text uppercase={true} style={styles.text}>Order Details</Text>
                                <Text uppercase={false} style={styles.textNote}>{'Document'}</Text>
                            </View>
                            <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                                <Icon name="ios-checkbox-outline" style={{fontSize:25,color:'#aaa'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <View style={[styles.cardItem,{width:width,height:0.5*height}]}>
                            <View style={{backgroundColor:'#f1f1f1',borderColor:'green',borderWidth:1,width:0.8*width,height:0.4*height}}>

                            </View>
                        </View>
                        <Button small bordered rounded transparent
                                style={{alignSelf:'center',borderColor: "#fc8019",elevation: 0,margin:10}}
                        >
                            <Text style={{color: "#fc8019",fontFamily: 'Lato-Semibold',fontSize: 10}}>
                                Scan Barcode</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    };
}

const styles = StyleSheet.create({
    card:{
        flex: 1,
        // flexDirection: 'row',
    },
    cardItem:{
        flexDirection: 'row',
        backgroundColor:'#fff',
        elevation:1,
        padding:15,
        margin:5,
        flex: 1,
        alignItems: 'center',
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