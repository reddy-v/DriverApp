import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from "react-native";
import { Container, Button, Content, Text, List, ListItem, Left, Body, Right, Icon } from 'native-base';
import CurrentLocation from "./components/currentLocation";
import SearchLocation from "./components/searchLocation";

export default class PickupCenter extends Component {

    handleCurrentLocation = () => {
    //     RNGooglePlaces.getCurrentPlace()
    //         .then((place) => {
    //             console.log(place);
    //             this.props.getMapLocation(place);
    //             this.refs.addressModal.showAddressModal()
    //         })
    //         .catch(error => console.log(error.message));
    };
    handleSetPickup = (service) => {
        this.props.getSelectedService(service);
        this.props.navigation.goBack()
    };

    render() {
        const { serviceList } = this.props;
        return (
            <Container style={{}}>
                <Content style={{backgroundColor:'#fff'}}>
                    <SearchLocation
                        onPress={()=>this.props.navigation.navigate('SelectCity')}
                        onPressBack={()=>this.props.navigation.goBack()}
                    />
                    <CurrentLocation
                        onPress={this.handleCurrentLocation.bind(this)}
                    />
                    <Text note style={styles.headingText}>RECENT SERVICES</Text>
                    {serviceList &&
                    <List
                        dataArray={serviceList}
                        renderRow={(service) =>
                            <ListItem avatar button onPress={this.handleSetPickup.bind(this, service)}>
                                <Left style={{flex: 1, justifyContent:'center'}}>
                                    <Icon name="ios-navigate-outline" style={styles.icon}/>
                                </Left>
                                <Body style={{flex: 12}}>
                                    <Text note style={{fontFamily:'Lato-Regular',fontSize:12}}>
                                        {'Pickup: '+service.deliveryCenter.name}
                                    </Text>
                                    <Text note style={{fontFamily: 'Lato-Regular', fontSize: 12}}>
                                        {'Delivery: '+service.service}
                                    </Text>
                                </Body>
                            </ListItem>
                        }>
                    </List>
                    }
                </Content>
            </Container>
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
    blackLine: {
        backgroundColor: '#000',
        height: 1,
        width: width-20,
        marginTop:15,
    },
    headingText:{
        marginLeft:59,
        marginTop:20,
        fontFamily:'Lato-Semilight',
        fontSize:11,
        color:'#535665'
    },
    text:{
        fontFamily:'Lato-Regular',
        fontSize:14,
        color:'#535665',
    },
    textNote:{
        fontFamily:'Lato-Regular',
        fontSize: 12,
    }
});
