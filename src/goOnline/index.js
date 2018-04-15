import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Container, Header, Content, Text, Switch, Button, Left, Body, Right } from 'native-base';
import DeliveryCenter from "./components/cityBranch";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TaskSelect from "./modal/taskSelectModal";
import StatusBtn from "./components/statusBtn";
import TasksList from "./components/tasksList";
import TaskExecution from "../taskExecution";
import TaskSelection from "./components/taskSelection";

const { width, height } = Dimensions.get("window");

export default class GoOnline extends Component {
    constructor(){
        super();
        this.state = {
            online: false,
            value: false,
        }
    }
    render() {
        const { selectedDeliveryCenter, selectedCity,
            getSelectedTask, selectedTask } = this.props;
        const { value, online } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <Container style={{backgroundColor:'#f9f9f9'}}>
                <Header style={{backgroundColor:'#333',height:55,elevation:0}}>
                    <StatusBtn
                        selectedDeliveryCenter={selectedDeliveryCenter}
                        selectedTask={selectedTask}
                    />
                </Header>
                <Content contentContainerStyle={{marginTop:5,paddingBottom:50,backgroundColor:'#f9f9f9',alignItems:'stretch'}}>
                    <DeliveryCenter
                        selectedCity={selectedCity}
                        onPressCity={() => navigate('PickupCenter')}
                        selectedDeliveryCenter={selectedDeliveryCenter}
                        onPressCenter={() => navigate('SelectCenter')}
                    />
                    <View style={{}}>
                        <Text uppercase={true} style={[styles.text,{margin:10,textAlign:'center'}]}>AVAILABLE TASKS</Text>
                        <TasksList
                            selectedTask={selectedTask}
                            selectedDeliveryCenter={selectedDeliveryCenter}
                            onPress={() => navigate('TaskExecution')}
                        />
                    </View>
                </Content>
                <TaskSelection
                    getSelectedTask={getSelectedTask}/>
                <TaskSelect
                    ref={'taskSelectionModal'}
                    getSelectedTask={getSelectedTask}
                />
            </Container>
        );
    };
}

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
        elevation:1,
        padding:15,
        margin:5,
        flex: 1,
        alignItems: 'flex-start',
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

{/*<Button small bordered iconLeft rounded*/}
{/*onPress={()=>this.setState({value:!value})}*/}
{/*style={{*/}
{/*position:'absolute',*/}
{/*bottom:0,*/}
{/*alignSelf:'center',*/}
{/*backgroundColor: value && "#fc8019" || 'transparent',*/}
{/*borderColor: value && 'transparent' || "#fc8019",*/}
{/*elevation: 0,*/}
{/*margin:10,*/}
{/*}}*/}
{/*>*/}
{/*<Text style={{*/}
{/*color: value && "#fff" || "#fc8019",*/}
{/*fontFamily: 'Lato-Semibold',*/}
{/*fontSize: 10*/}
{/*}}>{value && 'online' || 'offline'}</Text>*/}
{/*</Button>*/}