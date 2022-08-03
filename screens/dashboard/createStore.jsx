import { View, TouchableOpacity, Text, StyleSheet, StatusBar, TextInput, ScrollView, Image } from 'react-native'
import {err, gradientH, gradientL, grey, primary, secondary, Terr, third } from "../../theme/light"; 
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker'
import { useEffect, useState } from 'react';
import Input from '../../components/input';

//main creation page
export default function CreateStore({navigation}){
    const [shop, setShop] = useState('')
    const [addr, setAddr] = useState('')
    const [desc, setDesc] = useState('')
    const [type, setType] = useState('')


    const checkField = () => {
        if (shop === '' | addr === '' | desc === '' | type === ''){
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
            <Input state={shop} setState={setShop} label="Bussiness Name" placeholder="Tip: Keep it simple and unique"/>
            <Input state={addr} setState={setAddr} type={'inpbox'} label="Bussiness Address" />
            <Input state={desc} setState={setDesc} type={'inpbox'} label="Description" />
            <Input state={type} setState={setType} type={'inp'} label="Type" placeholder="Ex: Wearables, Food, Furniture.." />
            <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('imageupload', {
                shop, addr, desc, type, checkField
            })}>
                <Text style={styles.btnT}>Next</Text>
                <Ionicons name="chevron-forward-outline" size={20} color={secondary} />
            </TouchableOpacity>
        </ScrollView>
    )
}


//image upload page
export const ImageUpload = ({route, navigation}) => {
    const {shop, addr, desc, type, checkField} = route.params;

    const randomImage = 'https://picsum.photos/200/300'
    const [image, setImage] = useState(randomImage)
    const [uri, setUri] = useState([])
    const [checked, setChecked] = useState(checked)
    const [err, setErr] = useState(false)

    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
            setUri(result.uri.split('/'));
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.topbar}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Ionicons name="chevron-back-outline" size={25} color={third} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Text style={styles.txt}>Previous</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.head, {marginVertical:30}]}>
                <Text style={styles.htxt}>
                    Select Your Image
                </Text>
            </View>
            <TouchableOpacity onPress={() => pickImage()} activeOpacity={0.7} style={styles.imgBox}>
                <Image 
                    source={{
                        uri: image
                    }}
                    style={styles.img}
                />
                <View style={styles.tag}>
                    <Text style={styles.tagtxt}>Change Image</Text>
                </View>
            </TouchableOpacity>
            <Text style={[styles.lable, {marginTop:15, marginLeft:5, fontFamily:'openMed', color:grey}]}>
                    Selected Image : {
                        image != randomImage ? uri[uri.length - 1] : 'random_image.jpg'
                    }
            </Text>
            <View style={styles.check}>
                <TouchableOpacity onPress={() => setChecked(!checked)} style={styles.checkbox}>
                    {
                        checked ? 
                            <Ionicons name="checkmark" size={19} color={third} />
                        : null
                    }
                </TouchableOpacity>
                <Text style={styles.chetxt}>
                    By creating the store, you are accepting to
                    our terms and conditions
                </Text>
            </View>
            <TouchableOpacity style={checked ? styles.submit : [styles.submit, { backgroundColor: 'lightblue' }]} disabled={!checked} onPress={() => console.log(
                {shop, desc, addr, type, image}
            )}>
                <Text style={styles.btnT}>Create Store</Text>
            </TouchableOpacity>
            {
                err ? (
                    <Text style={styles.error}>
                        Fields cannot be empty
                    </Text>
                ) : null
            }
        </View>
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
    imgBox:{
        width:'100%',
        height:250,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        position:'relative'
    },
    img:{
        width: '100%',
        height: '100%',
        borderRadius:25,
    },
    tag:{
        width:'auto',
        height:'auto',
        backgroundColor:'rgba(211,211,211,0.8)',
        paddingHorizontal:10,
        paddingVertical:7,
        color:third,
        borderRadius:50,
        position:'absolute',
        bottom:10,
        left:10,
    },
    tagtxt:{
        fontFamily:'openMed',
        fontSize:13,
    },
    check:{
        width:'100%',
        height:'auto',
        flexDirection:'row',
        marginTop:50,
        marginLeft:5
    },
    checkbox:{
        width:20,
        height:20,
        backgroundColor: 'lightgrey',
        borderWidth:1,
        borderColor:'grey',
        borderRadius:5,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'
    },
    chetxt:{
        width:270,
        fontFamily:'openMed'
    },
    error: {
        fontFamily: 'openMed',
        fontSize: 13,
        color: Terr,
        textAlign: 'center',
        width: 'auto',
        height: 'auto',
        backgroundColor: err,
        borderWidth: 1,
        borderColor: Terr,
        borderRadius: 10,
        paddingVertical: 10
    }

})