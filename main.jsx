import { useFonts } from "expo-font";
import { Text } from "react-native";
import CreateStore from "./screens/dashboard/createStore";
import ImageUpload from "./screens/dashboard/imageUpload";
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from "./navigators/bottomNavigation";

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
            <MainStack.Screen name="bottomnav" component={BottomNav} options={{headerShown:false}} />
            <MainStack.Screen name="createstore" component={CreateStore} options={{headerShown:false}} />
            <MainStack.Screen name="imageupload" component={ImageUpload} options={{headerShown:false}} />
        </MainStack.Navigator>
    )
}