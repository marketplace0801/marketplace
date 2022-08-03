import { View, TouchableOpacity, Text, StyleSheet, StatusBar, TextInput, ScrollView, Image } from 'react-native'
import { gradientH, gradientL, grey, primary, secondary, third } from "../../theme/light"; 
import Ionicons from '@expo/vector-icons/Ionicons';
// import * as ImagePicker from 'expo-image-picker'

//main creation page
export default function CreateStore(){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.topbar}>
                    <TouchableOpacity>
                        <Ionicons name="chevron-back-outline" size={25} color={third} />
                    </TouchableOpacity>
                    <TouchableOpacity>
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
            <View style={styles.inpBox}>
                <Text style={styles.lable}>Bussiness Name</Text>
                <TextInput style={styles.inp} placeholder="Tip: Keep it simple and unique"/> 
            </View>
            <View style={styles.inpBox}>
                <Text style={styles.lable}>Bussiness Address</Text>
                <TextInput style={[styles.inp, { height: 100, paddingVertical:10, textAlignVertical: "top" }]} multiline={true} numberOfLines={4} />
            </View>
            <View style={styles.inpBox}>
                <Text style={styles.lable}>Description</Text>
                <TextInput style={[styles.inp, { height: 100, paddingVertical: 10, textAlignVertical: "top" }]} multiline={true} numberOfLines={4}
                    placeholder="Tip: explain people about what are the services provided by you"
                />
            </View>
            <View style={styles.inpBox}>
                <Text style={styles.lable}>Type</Text>
                <TextInput style={styles.inp} placeholder="Ex: Wearables, Eatable, Furniture..." />
            </View>
            <TouchableOpacity style={styles.submit}>
                <Text style={styles.btnT}>Next</Text>
                <Ionicons name="chevron-forward-outline" size={20} color={secondary} />
            </TouchableOpacity>
        </ScrollView>
    )
}


//image upload page
export const ImageUpload = async() => {

    const pickImage = async() => {
        
    }


    return(
        <View style={styles.container}>
            <View style={styles.topbar}>
                <TouchableOpacity>
                    <Ionicons name="chevron-back-outline" size={25} color={third} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.txt}>Previous</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.head, {marginVertical:30}]}>
                <Text style={styles.htxt}>
                    Select Your Image
                </Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.imgBox}>
                <Image 
                    source={{
                        uri: "https://picsum.photos/200/300"
                    }}
                    style={styles.img}
                />
                <View style={styles.tag}>
                    <Text style={styles.tagtxt}>Change Image</Text>
                </View>
            </TouchableOpacity>
            <Text style={[styles.lable, {marginTop:15, marginLeft:5, fontFamily:'openReg'}]}>
                    Selected Image : random_image.jpg
            </Text>
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

})