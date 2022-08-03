import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { secondary, third } from "../theme/light";
import { captureCam, pickGallery } from './imagePicker';

export default function ImageOptions({ setSelectedImage, setPopup }) {
    return (
        <View style={styles.options}>
            <View style={styles.uploads}>
                <TouchableOpacity onPress={() => captureCam().then((val) => {
                    setPopup(false)
                    setSelectedImage({
                        image: val.uri,
                        imagename: val.uri.split('/')[val.uri.split('/').length - 1]
                    })
                })} style={[styles.option, { borderBottomWidth: 1, borderBottomColor: 'lightgrey' }]}>
                    <Text style={styles.txt}>
                        Capture with camera
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pickGallery().then((val) => {
                    setPopup(false)
                    setSelectedImage({
                        image: val.uri,
                        imagename: val.uri.split('/')[val.uri.split('/').length - 1]
                    })
                })} style={styles.option}>
                    <Text style={styles.txt}>
                        Select image from gallery
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    options: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        top: 0,
        borderRadius: 25,
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploads: {
        width: '70%',
        height: 100,
        backgroundColor: secondary,
        borderRadius: 20,
        overflow: 'hidden'
    },
    option: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontFamily: 'openReg',
        color: third

    }
})