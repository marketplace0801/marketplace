import { TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Banner({image, navigation}){
    return(
        <TouchableOpacity>
            <Image
                source={{
                    uri: image,
                }}
                style={styles.banner}
            />
        </TouchableOpacity>
    )   
}

const styles = StyleSheet.create({
    banner:{
        width:250,
        height:200,
        borderRadius:12,
        marginRight:20
    }
})