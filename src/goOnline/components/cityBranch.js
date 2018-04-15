import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Container, Button, Content, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class DeliveryCenter extends Component {

    render() {
        const { selectedCity, selectedDeliveryCenter,
            onPressCity, onPressCenter } = this.props;
        return (
            <View style={styles.card}>
                <View style={styles.cardItem}>
                    <Text uppercase={true} style={styles.textNote}>Selected City</Text>
                    <Button small full transparent
                            style={{}}
                            onPress={onPressCity}
                    >
                        <Text uppercase={false} style={styles.textName}>{selectedCity.name || 'Hyderabad'}</Text>
                        <Icon name="edit" style={{fontSize:10,color:'#fc8019'}}/>
                    </Button>
                </View>
                <View style={styles.cardItem}>
                    <Text uppercase={true} style={styles.textNote}>Wings Center</Text>
                    <Button small full transparent
                            style={{}}
                            onPress={onPressCenter}
                    >
                        <Text uppercase={false} style={styles.textName}>{selectedDeliveryCenter.name || 'Airport'}</Text>
                        <Icon name="edit" style={{fontSize:10,color:'#fc8019'}}/>
                    </Button>
                </View>
            </View>
        );
    };
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        flexDirection: 'row',
        // alignItems: 'stretch',
        flex: 1,
        zIndex:1,
    },
    cardItem:{
        backgroundColor:'#fff',
        // elevation:1,
        padding:10,
        margin:5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily:'Lato-Semibold',
        fontSize:10,
        color:'#fc8019',
    },
    textName: {
        fontFamily:'Lato-Regular',
        // paddingVertical:5,
        fontSize:14,
        color:'#000',
        opacity:.87,
        // paddingLeft:0,
    },
    textNote: {
        fontFamily:'Lato-Regular',
        fontSize:10,
        color:'#000',
        opacity:.54,
        // textAlign:'center'
    },
});

{/*<View style={styles.card}>*/}
{/*<View style={styles.cardItem}>*/}
{/*<Text uppercase={true} style={styles.textNote}>City</Text>*/}
{/*<Text style={styles.textName}>{selectedCity.name || 'Hyderabad1'}</Text>*/}
{/*<Text onPress={onPressCity} style={styles.text}>Change</Text>*/}
{/*</View>*/}
{/*<View style={styles.cardItem}>*/}
{/*<Text uppercase={true} style={styles.textNote}>Wings Center</Text>*/}
{/*<Text style={styles.textName}>{selectedDeliveryCenter.name || 'Airport'}</Text>*/}
{/*<Text onPress={onPressCenter} style={styles.text}>Change</Text>*/}
{/*</View>*/}
{/*</View>*/}