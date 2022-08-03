import { TextInput, View, Text, StyleSheet } from "react-native";
import { secondary, third } from "../theme/light";

export default function Input({state, setState, type, label, placeholder}){
    return(
        <View style={styles.inpBox}>
            <Text style={styles.lable}>{label}</Text>
            {
                type === 'inpbox' ? (
                    <TextInput style={[styles.inp, { height: 100, paddingVertical: 10, textAlignVertical: "top" }]}
                        value={state}
                        onChangeText={(val) => setState(val)}
                        multiline={true} numberOfLines={4} 
                        placeholder={placeholder}/>
                ) : (
                        <TextInput style={styles.inp}
                            value={state}
                            onChangeText={(val) => setState(val)}
                            placeholder={placeholder}
                        />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    inpBox: {
        marginTop: 20
    },
    lable: {
        fontFamily: 'openMed',
        fontSize: 13,
        color: third,
        marginBottom: 10
    },
    inp: {
        width: '100%',
        height: 50,
        backgroundColor: secondary,
        borderRadius: 13,
        paddingHorizontal: 10,
        fontFamily: 'openReg',
        fontSize: 13
    },
})