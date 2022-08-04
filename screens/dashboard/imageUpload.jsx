import { View, TouchableOpacity, Text, StyleSheet, StatusBar, TextInput, ScrollView, Image } from 'react-native'
import { err, gradientL, grey, primary, secondary, Terr, third } from "../../theme/light";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import ImageOptions from '../../components/imageOptions';
import { useSelector, useDispatch } from 'react-redux';
import { CreateStore } from '../../redux/createStore/actions'

//image upload page
export default function ImageUpload({ route, navigation }) {
    const { shop, addr, desc, type, checkField } = route.params;

    const randomImage = 'https://picsum.photos/200/300'

    const [selectedImage, setSelectedImage] = useState({
        image: randomImage,
        imagename: randomImage,
        imagenmae: randomImage,
    })
    const [popup, setPopup] = useState(popup)
    const [checked, setChecked] = useState(checked)
    const [err, setErr] = useState(false)
    const dispatch = useDispatch()
    const upload = async() => {
        let inputs = new FormData();
        inputs.append("shopname", shopname)
        inputs.append("location", location)
        inputs.append("description", description)
        inputs.append("category", category)
        inputs.append("avatar", {
            uri: selectedImage.image,
            name: selectedImage.imagename
        })
        console.log(...inputs)
        dispatch(CreateStore(inputs))
    }
    const { msg, loading } = useSelector((state) => state.createstore) 
    console.log(msg, loading)
    
    return (
        <View style={styles.container}>
            <View style={styles.topbar}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Ionicons name="chevron-back-outline" size={25} color={third} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Text style={styles.txt}>Previous</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.head, { marginVertical: 30 }]}>
                <Text style={styles.htxt}>
                    Select Your Image
                </Text>
            </View>
            <TouchableOpacity onPress={() => setPopup(!popup)} activeOpacity={0.9} style={styles.imgBox}>
                <Image
                    source={{
                        uri: selectedImage.image
                    }}
                    style={styles.img}
                />
                {popup ? <ImageOptions setSelectedImage={setSelectedImage} setPopup={setPopup} /> : null}
                <View style={styles.tag}>
                    <Text style={styles.tagtxt}>Change Image</Text>
                </View>
            </TouchableOpacity>
            <Text style={[styles.lable, { marginTop: 15, marginLeft: 5, fontFamily: 'openMed', color: grey }]}>
                Selected Image : {
                    selectedImage.imagenmae != randomImage ? selectedImage.imagename : 'random_image.jpg'
                }
            </Text>
            <View style={styles.check}>
                <TouchableOpacity onPress={() => setChecked(!checked)} style={styles.checkbox}>
                    {
                        checked ?
                            <Ionicons name="checkmark" size={19} color={third} />
                            : null
                    }
                </TouchableOpacity>
                <Text style={styles.chetxt}>
                    By creating the store, you are accepting to
                    our terms and conditions
                </Text>
            </View>

            {/* your output object */}
            <TouchableOpacity style={checked ? styles.submit : [styles.submit, { backgroundColor: 'lightblue' }]} disabled={!checked} onPress={() => console.log(
                { shop, desc, addr, type, image: selectedImage.image }
            )}>
                <Text style={styles.btnT}>Create Store</Text>
            </TouchableOpacity>
            {
                err ? (
                    <Text style={styles.error}>
                        Fields cannot be empty
                    </Text>
                ) : null
            }
        </View>
    )
}


const styles = StyleSheet.create({
    imgBox: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        position: 'relative'
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
        position: 'relative'
    },
    tag: {
        width: 'auto',
        height: 'auto',
        backgroundColor: 'rgba(211,211,211,0.8)',
        paddingHorizontal: 10,
        paddingVertical: 7,
        color: third,
        borderRadius: 50,
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    tagtxt: {
        fontFamily: 'openMed',
        fontSize: 13,
    },
    check: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: 5
    },
    checkbox: {
        width: 20,
        height: 20,
        backgroundColor: 'lightgrey',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    chetxt: {
        width: 270,
        fontFamily: 'openMed'
    },
    error: {
        fontFamily: 'openMed',
        fontSize: 13,
        color: Terr,
        textAlign: 'center',
        width: 'auto',
        height: 'auto',
        backgroundColor: err,
        borderWidth: 1,
        borderColor: Terr,
        borderRadius: 10,
        paddingVertical: 10
    },
    container: {
        flex: 1,
        backgroundColor: primary,
        paddingHorizontal: 20,
        marginTop: StatusBar.currentHeight,
    },
    topbar: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
    },
    txt: {
        marginLeft: 10,
        fontFamily: 'openMed',
        fontSize: 13,
        color: third
    },
    head: {
        width: 300,
        height: 'auto',
        marginVertical: 15
    },
    htxt: {
        fontSize: 25,
        fontFamily: 'openBold',
        color: third
    },
    submit: {
        width: '100%',
        height: 50,
        borderRadius: 13,
        backgroundColor: gradientL,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20
    },
    btnT: {
        color: secondary,
        fontFamily: 'openMed',
        fontSize: 15
    },
})