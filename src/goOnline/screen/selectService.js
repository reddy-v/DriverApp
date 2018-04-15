import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Container, Content, Text } from 'native-base';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addToServiceList, getSelectedService} from "../actions";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get("window");

class SelectService extends Component {

    handlePress = (serviceType) => {
        // this.props.getSelectedService(serviceType);
    //     const { selectedDeliveryCenter, selectedService } = this.props;
    //     const service = {deliveryCenter: selectedDeliveryCenter, service: selectedService};
    //     this.props.addToServiceList(service);
        this.props.navigation.navigate('Home')
    };

    render() {
        const {  selectedDeliveryCenter } = this.props;
        const {name, address, serviceTypes } = selectedDeliveryCenter;
        return (
            <Container style={{alignItems:'center',backgroundColor:'#f1f1f1'}} >
                <Content contentContainerStyle={{alignItems:'center',backgroundColor:'#f1f1f1'}}>
                    { serviceTypes.map( serviceType => {
                        return(
                            <TouchableOpacity onPress={this.handlePress.bind(this, serviceType)}
                                              style={styles.card}>
                                <View style={styles.cardItem}>
                                    <Text uppercase={true} style={styles.text}>Pickup from</Text>
                                    <Text style={styles.textName}>
                                        {serviceType.name === 'pickups' && 'Pickups' || name}
                                    </Text>
                                    <Text style={styles.textNote}>
                                        {serviceType.name === 'pickups' && 'Multiple pickup locations from home and office' || address}
                                    </Text>
                                </View>
                                <View style={styles.cardItemMiddle}>
                                    <Icon name="dots-horizontal" style={{marginTop: 30, fontSize: 15}}/>
                                </View>
                                <View style={styles.cardItem}>
                                    <Text uppercase={true} style={styles.text}>Deliver to</Text>
                                    <Text style={styles.textName}>{
                                            serviceType.name === 'pickups' && name ||
                                            serviceType.name === 'deliveries' && 'Deliveries' ||
                                            serviceType.name === 'wingsAirportCenter' && 'Airport' ||
                                            serviceType.name === 'wingsCityCenter' && 'Wings Center'
                                        }
                                    </Text>
                                    <Text style={styles.textNote}>{
                                            serviceType.name === 'pickups' && address ||
                                            serviceType.name === 'deliveries' && 'Multiple delivery locations to welcome and office' ||
                                            serviceType.name === 'wingsAirportCenter' && name === 'Airport' && 'Wings center at your arrival airport, India' ||
                                            serviceType.name === 'wingsAirportCenter' && name !== 'Airport' && 'Shambshabhad Airport, hyderabad, India' ||
                                            serviceType.name === 'wingsCityCenter' && 'Wings Centers in other areas of the city'
                                        }
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )})}
                </Content>
            </Container>
        );
    };
}


const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
    },
    card:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1,
        borderBottomWidth: 2,
        borderColor: '#f1f1f1',
        paddingVertical: 15,
        width: 0.95 * width,
        marginVertical: 5,
        backgroundColor: '#fff'
    },
    cardItem:{
        flex: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardItemMiddle:{
        flex: 1,
        paddingHorizontal: 15,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    text: {
        fontFamily:'Lato-Semibold',
        fontSize:10,
        color:'#fc8019',
    },
    textName: {
        fontFamily:'Lato-Regular',
        fontSize:15,
        color:'#000',
        opacity:.87,
    },
    textNote: {
        fontFamily:'Lato-Regular',
        fontSize:11,
        paddingVertical:5,
        textAlign:'center',
        color:'#000',
        opacity:.54
    },
    leftIcon:{
        fontSize: 15,
    },
    blackLine: {
        backgroundColor: '#111',
        height: 0.5,
        width: 0.4*width,
        marginTop:15,
    },
});
const mapStateToProps = (state) => ({
    selectedDeliveryCenter: state.pickupCenter.selectedDeliveryCenter,
    selectedService: state.pickupCenter.selectedService,
});

const mapActionCreators = (dispatch) => {
    return {
        getSelectedService: bindActionCreators(getSelectedService, dispatch),
        addToServiceList: bindActionCreators(addToServiceList, dispatch),
    }
};

export default connect(mapStateToProps, mapActionCreators)(SelectService);