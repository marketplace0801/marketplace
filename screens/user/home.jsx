import { StatusBar } from "react-native";
import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet } from "react-native";
import { primary } from "../../theme/light";

export default function Home(){
    return(
        <ScrollView style={styles.container}>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        marginTop:StatusBar.currentHeight,
        paddingHorizontal:20,
        backgroundColor:primary
    }
})