import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/user/home';
import Profile from '../screens/user/profile';
import { secondary } from '../theme/light';

const Tab = createBottomTabNavigator();

export default function BottomNav(){
    return(
        <Tab.Navigator
            defaultScreenOptions={"Home"}
            screenOptions={{
                tabBarStyle:{
                        width: '100%',
                        backgroundColor: secondary,
                        // elevation:0,
                        borderTopWidth:0,
                        borderTopRightRadius:20,
                        borderTopLeftRadius:20,
                        height:65,
                        alignItems:'center',
                        justifyContent:'center',
                        paddingBottom:15
                }
            }}
            >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}