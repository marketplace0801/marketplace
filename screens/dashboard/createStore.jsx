import { View, TouchableOpacity, Text, StyleSheet, StatusBar, TextInput, ScrollView, Image } from 'react-native'
import {err, gradientH, gradientL, grey, primary, secondary, Terr, third } from "../../theme/light"; 
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import Input from '../../components/input';

//main creation page
export default function CreateStore({navigation}){
    const [shopname, setShop] = useState('')
    const [loaction, setAddr] = useState('')
    const [description, setDesc] = useState('')
    const [category, setType] = useState('')


    const checkField = () => {
        if (shopname === '' | loaction === '' | description === '' | category === ''){
            return true
        }else{
            return false
        }
    }


    return(
        <ScrollView style={styles.container}>
            <View style={styles.topbar}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Ionicons name="chevron-back-outline" size={25} color={third} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Text style={styles.txt}>Back</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.head}>
                <Text style={styles.htxt}>
                    Take Your 
                    <View style={{marginRight:10}} />
                    <Text style={{color:'darkblue'}}> Bussiness </Text>
                    <View style={{ marginLeft: 10 }} />
                    online with us 
                </Text>
            </View>
            <Input state={shopname} setState={setShop} label="Bussiness Name" placeholder="Tip: Keep it simple and unique"/>
            <Input state={loaction} setState={setAddr} type={'inpbox'} label="Bussiness Address" />
            <Input state={description} setState={setDesc} type={'inpbox'} label="Description" />
            <Input state={category} setState={setType} type={'inp'} label="Type" placeholder="Ex: Wearables, Food, Furniture.." />
            <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('imageupload', {
                shopname, loaction, description, category, checkField
            })}>
                <Text style={styles.btnT}>Next</Text>
                <Ionicons name="chevron-forward-outline" size={20} color={secondary} />
            </TouchableOpacity>
        </ScrollView>
    )
}





const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: primary,
        paddingHorizontal:20,
        marginTop:StatusBar.currentHeight,
    },
    topbar:{
        width:'100%',
        height:50,
        alignItems:'center',
        flexDirection:'row',
    },
    txt:{
        marginLeft:10,
        fontFamily:'openMed',
        fontSize:13,
        color: third
    },
    head:{
        width:300,
        height:'auto',
        marginVertical:15
    },
    htxt:{
        fontSize:25,
        fontFamily:'openBold',
        color:third
    },
    sub:{
        fontFamily:'openMed',
        fontSize:12,
        marginTop:5,
        color:third
    },
    inpBox:{
        marginTop:20
    },
    lable:{
        fontFamily:'openMed',
        fontSize:13,
        color:third,
        marginBottom:10
    },
    inp:{
        width:'100%',
        height:50,
        backgroundColor:secondary,
        borderRadius:13,
        paddingHorizontal:10,
        fontFamily:'openReg',
        fontSize:13
    },
    submit:{
        width:'100%',
        height:50,
        borderRadius:13,
        backgroundColor:gradientL,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginVertical:20
    },
    btnT:{
        color:secondary,
        fontFamily:'openMed',
        fontSize:15
    },
})