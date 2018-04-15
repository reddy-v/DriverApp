import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Alert, TextInput } from "react-native";
import { Container, Content, Header, List, ListItem, Body, Left, Input, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from "react-redux";
import { getSelectedDeliveryCenter, getSelectedCity } from "../actions";
import {bindActionCreators} from "redux";

import citiesList from '../components/cities.json';

const { width, height } = Dimensions.get("window");

class SelectCity extends Component {
    constructor(){
        super();
        this.state = {
            userInput:'',
            filteredCities:[],
        }
    }

    handleChange(text) {
        this.setState({
            userInput:text,
            filteredCities:citiesList.filter(city =>
                city.name.indexOf(text) !== -1
            )
        });
    };
    handleCityPress = (city) => {
        const {  getSelectedCity } = this.props;
        getSelectedCity(city);
        this.props.navigation.navigate('SelectCenter');
    };

    render() {
        const {  userInput, filteredCities } = this.state;
        return (
            <Container style={{backgroundColor:'#fff'}} >
                <Header style={{backgroundColor:'#fff'}}>
                    <Left style={{}}>
                        <Icon name="arrow-back" style={{fontSize:22}}/>
                    </Left>
                    <Body style={{flex:4,alignItems:'flex-start'}}>
                        <Input
                            style={styles.input}
                            placeholder={'Search your City...'}
                            value={userInput}
                            onChangeText={this.handleChange.bind(this)}
                        />
                    </Body>
                </Header>
                <Content contentContainerStyle={{alignItems:'center'}}>
                    <List style={{width: width}}
                       dataArray={userInput === '' && citiesList || filteredCities}
                       renderRow={(city) =>
                           <ListItem button onPress={this.handleCityPress.bind(this, city)}>
                               <Body style={{}}>
                                <Text style={styles.textNote}>{city.name}</Text>
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
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
    },
    cardContainer:{
        width:width,
        marginBottom: 15,
    },
    input: {
        alignItems:'stretch',
        fontFamily:'Lato-Regular',
        fontSize:14,
        color:'#111',
        width:0.7*width,
    },
    textNote: {
        fontFamily:'Lato-Regular',
        fontSize:13,
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

});

const mapActionCreators = (dispatch) => {
    return {
        getSelectedCity: bindActionCreators(getSelectedCity, dispatch),
    }
};

export default connect(mapStateToProps, mapActionCreators)(SelectCity);