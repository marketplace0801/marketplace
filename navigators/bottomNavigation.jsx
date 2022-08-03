import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/user/home';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNav(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    )
}