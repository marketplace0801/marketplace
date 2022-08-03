import * as ImagePicker from 'expo-image-picker'

export const pickGallery = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
        alert("no permissions given");
        return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
    if (!result.cancelled) {
        return result
    }
}

export const captureCam = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
        alert("you havnt provided the acccess to the camera");
        return;
    }
    let result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
        return result
    }
}
