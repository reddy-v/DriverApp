import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TextInput, Alert, TouchableOpacity } from "react-native";
import { Container, Button, Content, Icon, Body,
    Input, Text, Card, CardItem, Left, Right, List, ListItem } from 'native-base';


export default class SearchLocation extends Component {

    render() {
        const { onPress, onPressBack }  = this.props;
        return (
            <List style={styles.list}>
                <ListItem avatar noBorder>
                    <Left style={{flex:1,justifyContent:'center'}}>
                        <Icon onPress={onPressBack}
                              name="ios-arrow-round-back"
                              style={{fontSize:30,color:'#131313'}}
                        />
                    </Left>
                    <Body style={{flex:12}}>
                        <TouchableOpacity onPress={onPress} >
                            <Text uppercase={true} style={styles.text}>
                                Set Pickup Center
                            </Text>
                            <Text note uppercase={false} style={styles.textNote}>
                                Search my city and wings center...
                            </Text>
                        </TouchableOpacity>
                    </Body>
                </ListItem>
            </List>
);
    };
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    list:{width:width,borderBottomWidth:1,borderColor:'#f1f1f1'},
    text:{fontFamily:'Lato-Semibold',fontSize:11,color:'#fc8019'},
    textNote:{fontFamily:'Lato-Regular',fontSize:13},
});
