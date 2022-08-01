import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { secondary } from "../theme/light";

export default function Category({item, selected, setSelected}){
    return(
        <TouchableOpacity style={styles.category} onPress={() => setSelected(item.item.id)}>
            <View style={selected === item.item.id ? [styles.cat, {borderRadius:10}] : styles.cat }>
                <Ionicons name={item.item.ico} size={25} color="black" />
            </View>
            <Text style={styles.catname}>{item.item.cat}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    category:{
        width:'auto',
        height:'auto',
        alignItems:'center',
        justifyContent:'center',
        marginRight:20,
    },
    cat:{
        width:60,
        height:60,
        backgroundColor:secondary,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center', 
    },
    catname:{
        marginTop:10,
        fontSize:13,
        fontFamily: 'openReg',
    }
})