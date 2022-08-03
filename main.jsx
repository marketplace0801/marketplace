import Home from "./screens/user/home";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import CreateStore, { ImageUpload } from "./screens/dashboard/createStore";
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

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
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={Home} options={{headerShown:false}} />
            <MainStack.Screen name="createstore" component={CreateStore} options={{headerShown:false}} />
            <MainStack.Screen name="imageupload" component={ImageUpload} options={{headerShown:false}} />
        </MainStack.Navigator>
    )
}