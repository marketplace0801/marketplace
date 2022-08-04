import { StatusBar } from "react-native";
import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet } from "react-native";
import { primary, secondary, third } from "../../theme/light"; 
import Ionicons from '@expo/vector-icons/Ionicons';
import Banner from "../../components/banner";
import { categories, data } from "./fakedata";
import Category from "../../components/category";
import { useState, useEffect } from "react";
import SearchBar from "../../components/homebar";
import HomeCard from "../../components/homeCard";
import { useSelector } from "react-redux";



export default function Home(){
    const [selected, setSelected] = useState(1)
    const [notification, setNotification] = useState(true)

    const { shops } = useSelector((state) => state.allshops)

    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}>
            <View style={styles.topbar}>
                <Text style={styles.title}>Market Place</Text>
                <TouchableOpacity style={styles.notify}>
                    {
                        notification ? (
                            <View style={styles.bub} />
                        ) : null
                    }
                    <Ionicons name="notifications-outline" size={25} color={third} />
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    //pass the api data
                    data={data}
                    renderItem={(item) => <Banner image={`https://picsum.photos/200/${item.index + 300}`} />}
                    style={{ marginTop: 10 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={0}
                    snapToInterval={270}
                    snapToAlignment={"start"}
                />
            </View>
            <Text style={styles.sub}>Categories</Text>
            <View>
                <FlatList
                    //pass the api data
                    data={categories}
                    renderItem={(item) => <Category item={item} setSelected={setSelected} selected={selected} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={0}
                    snapToInterval={80}
                    snapToAlignment={"start"}
                />
            </View>
            <SearchBar />
            <View>
                <FlatList
                    data={shops != undefined ? shops.allshops : null }
                    renderItem={(item) => <HomeCard item={item} />}
                    style={{ marginTop: 10, paddingRight: 20 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        marginTop:StatusBar.currentHeight,
        backgroundColor:primary,
        paddingLeft: 20,

    },
    topbar:{
        width:'100%',
        height:50,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingRight: 20,
        justifyContent:'space-between',
    },
    notify:{
        width:35,
        height:35,
        backgroundColor:primary,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        fontFamily:'openMed'
        
    },
    sub: {
        fontSize: 15,
        fontFamily: 'openMed',
        marginVertical:20,
        position:'relative'
    },
    bub:{
        width:10,
        height:10,
        borderRadius:10,
        backgroundColor:'lightblue',
        position:'absolute',
        top:0,
        left:0,
    }
})