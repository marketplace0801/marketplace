import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { err, grey, primary, secondary, sucess, Terr, third, Tsuccess } from "../theme/light";
import Tag from "./tag";
import * as Speech from 'expo-speech'

export default function HomeCard({item}) {
    const speak = (addr) => {
        Speech.speak(addr, {
            rate:0.6,
            pitch:.7,
        });
    };
    return (
        <TouchableOpacity style={styles.card}>
            <Image
                source={{
                    uri: item.item.image,
                }}
                style={styles.image}
            />
            <View style={styles.tag}>
                <Text style={styles.rat}>{item.item.rating}</Text>
                <Ionicons name="star" size={13} color={secondary} />
            </View>
            <View style={styles.txtbx}>
                <Text style={styles.head}>{item.item.shop}</Text>
                <Text style={styles.desc}>{item.item.description}</Text>
                <View style={styles.extra}>
                    <Tag tag={item.item.type} color={third} bg={primary} />
                    <Tag tag={item.item.state} color={item.item.state === "Opened" ? Tsuccess : Terr} bg={item.item.state === "Opened" ? sucess : err} />
                </View>
            </View>
            <TouchableOpacity style={styles.ico} onPress={() => speak(item.item.description)}>
                <Ionicons name="volume-low-outline" size={20} color={grey} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 130,
        backgroundColor: secondary,
        borderRadius: 25,
        marginTop: 20,
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal: 10,
        overflow:'hidden',
    },
    image: {
        width:100,
        height: 100,
        borderRadius: 20,
        marginLeft: 5,
        marginRight:15
    },
    txtbx:{
        width:150,
        height:100,
        justifyContent:'center'
    },
    head:{
        fontFamily: 'openMed',
        fontSize:15,
        color:third,
        textTransform:'capitalize'
    },
    desc:{
        fontSize: 13,
        color:grey,
        marginTop:3,
        fontFamily:'openReg'
    },
    extra:{
        flexDirection:'row'
    },
    tag:{
        width:'auto',
        height:25,
        backgroundColor:'lightblue',
        position:'absolute',
        top:10,
        right:10,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:7
    },
    rat:{
        color:secondary,
        marginRight: 5,
        fontFamily: 'openMed'
    },
    ico:{
        position: 'absolute',
        bottom: 13,
        right: 13,
    }
})