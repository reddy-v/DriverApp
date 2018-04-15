import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, Alert } from "react-native";
import { Container, Button, Content, Body, Text,
    List, ListItem, Card, CardItem, Left } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get("window");

export default class Home extends Component {
    componentDidMount() {

    }

    componentDidUpdate(){

    }

    handlePickup = () => {
        this.props.navigation.navigate('PickupCenter', {
        })
    };
    render() {
        const { selectedDeliveryCenter, selectedService } = this.props;
        return (
            <Container style={{backgroundColor:'#fff'}}>
                <Content contentContainerStyle={styles.content}>
                    <List style={{width:width}}>
                        <ListItem avatar button onPress={this.handlePickup} style={{flex:1}}>
                            <Left style={{}}>
                                <Icon name="filter-center-focus" style={{fontSize:15}}/>
                            </Left>
                            <Body style={{flex:1, justifyContent:'center'}}>
                                <Text uppercase={true} style={{fontFamily:'Lato-Bold',fontSize:12,color:'#535665'}}>Wings</Text>
                                <Text note numberOfLines={2} style={{fontFamily:'Lato-Regular',fontSize:12}}>
                                    {selectedDeliveryCenter && 'Pickup: '+selectedDeliveryCenter.name
                                        || 'Choose your delivery center and service'}
                                </Text>
                                <Text note numberOfLines={2} style={{fontFamily: 'Lato-Regular', fontSize: 12}}>
                                    {selectedService && 'Delivery: '+selectedService}
                                </Text>
                            </Body>
                        </ListItem>
                    </List>
                    <Image resizemode="contain"
                           style={{marginTop:35,width:0.6*width,height:0.3*height}}
                           source={require('../../assets/logo.png')}
                    />
                    <Card style={{borderColor:'transparent',elevation:0}}>
                        <CardItem style={{}}>
                            <Body style={{alignItems:'center'}}>
                                <Text uppercase={true} style={styles.caption}>Ready to Earn?</Text>
                                <View style={styles.hairline} />
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Button full
                                    onPress={()=> this.props.navigation.navigate('GoOnline')}
                                    style={styles.btn}
                            >
                                <Text style={styles.btnText}>Proceed</Text>
                            </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    };
}


const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        width: width,
        backgroundColor:'#fff'
    },
    caption: {
        textAlign:'center',
        marginTop:30,
        fontSize:12,
        color:'#394b56'
    },
    text: {
        fontSize:12,
        fontFamily:'Lato-Regular',
        color:'#A2A2A2'
    },
    btn:{
        backgroundColor:"#fc8019",
        elevation:0,
        width:0.7*width,
        alignSelf:'center',
        height:40
    },
    btnText: {
        fontFamily: 'Lato-Bold',
        fontSize:12,
        color:'#fff',
        opacity:1
    },
    hairline: {
        backgroundColor: '#fc8019',
        height: 1,
        width: 40,
        marginTop:25,
    },
});

