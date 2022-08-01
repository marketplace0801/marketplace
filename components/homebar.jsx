import { View, Text, TouchableOpacity,TextInput, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { grey, secondary } from "../theme/light";

export default function SearchBar() {
    return (
        <View style={{
            paddingRight: 20,
        }}>
            <TouchableOpacity style={styles.input}>
                <Text style={styles.sertxt}>Search for Shops</Text>
                <Ionicons name="search-outline" size={20} color={grey} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        width: '100%',
        height: 55,
        backgroundColor: secondary,
        borderRadius: 10,
        marginTop:25,
        paddingHorizontal:10,
        fontFamily:'openMed',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    sertxt:{
        color:grey,
        fontFamily:'openReg'
    }
})