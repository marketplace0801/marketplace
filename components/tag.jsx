import { useState } from 'react'
import {TouchableOpacity,Text, StyleSheet} from 'react-native'
import { err, primary, sucess, Terr, third, Tsuccess } from '../theme/light'

export default function Tag({tag, bg, color}){
    return(
        <TouchableOpacity style={[styles.tag, {backgroundColor:bg}]}>
            <Text style={[styles.txt, {color:color}]}>{tag}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tag:{
        width:'auto',
        height:'auto',
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:5,
        marginTop:10,
        marginRight:10
    },
    txt:{
        fontSize:12,
        fontFamily:'openMed',
        textTransform:'capitalize'
    }
})