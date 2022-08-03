import Home from "./screens/user/home";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import CreateStore, { ImageUpload } from "./screens/dashboard/createStore";

export default function Main(){
    const [loaded] = useFonts({
        openReg: require('./fonts/openReg.ttf'),
        openMed: require('./fonts/openMed.ttf'),
        openBold: require('./fonts/openBold.ttf'),
    })
    if(!loaded){
        return <Text>Loading</Text>
    }
    return(
        <CreateStore />
    )
}