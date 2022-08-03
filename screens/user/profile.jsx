import {StyleSheet, StatusBar, View, TouchableOpacity, Text, Image} from 'react-native'
import { primary } from '../../theme/light'

export default function Profile(){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>
                    create store
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20 }}>
                <Text>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:primary,
        marginTop:StatusBar.currentHeight,
        justifyContent:'center',
        alignItems:'center'
    }
})