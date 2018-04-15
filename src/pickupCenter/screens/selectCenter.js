import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Alert, TextInput } from "react-native";
import { Container, Content, Header, List, ListItem, Body, Left, Input, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from "react-redux";
import { getSelectedDeliveryCenter } from "../actions";
import {bindActionCreators} from "redux";

const { width, height } = Dimensions.get("window");

class SelectCenter extends Component {

    handleDCPress = (deliveryCenter) => {
        const {  getSelectedDeliveryCenter } = this.props;
        getSelectedDeliveryCenter(deliveryCenter);
        this.props.navigation.navigate('GoOnline')
    };

    render() {
        const {  selectedCity } = this.props;
        const {  deliveryCenters } = selectedCity;
        return (
            <Container style={{backgroundColor:'#fff'}} >
                <Header style={{backgroundColor:'#fff'}}>
                    <Left style={{}}>
                        <Icon name="arrow-back" style={{fontSize:22}}/>
                    </Left>
                    <Body style={{flex:4,alignItems:'flex-start'}}>
                        <Text uppercase={true} style={styles.textHead}>Selected City</Text>
                        <Text style={styles.text}>{selectedCity.name}</Text>
                    </Body>
                </Header>
                <Content contentContainerStyle={{alignItems:'center'}}>
                    <List style={{width: width}}
                          dataArray={deliveryCenters}
                          renderRow={(deliveryCenter) =>
                              <ListItem button onPress={this.handleDCPress.bind(this, deliveryCenter)}>
                                  <Body style={{}}>
                                  <Text style={styles.text}>{deliveryCenter.name}</Text>
                                  </Body>
                              </ListItem>
                          }>
                    </List>
                </Content>
            </Container>
        );
    };
}


const styles = StyleSheet.create({
    textHead:{
        fontFamily:'Lato-Semibold',
        fontSize:10,
        color:'#fc8019'
    },
    text:{
        fontFamily:'Lato-Regular',
        fontSize:13,
        color:'#000',
        opacity:.87,
    },
});
const mapStateToProps = (state) => ({
    selectedCity: state.pickupCenter.selectedCity,
});

const mapActionCreators = (dispatch) => {
    return {
        getSelectedDeliveryCenter: bindActionCreators(getSelectedDeliveryCenter, dispatch),
    }
};

export default connect(mapStateToProps, mapActionCreators)(SelectCenter);