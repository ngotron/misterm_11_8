import { View, Text } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Profile from "./profile";
import Home from "./home";
import Taxicar from "./taxicar";
import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View  >
                            <FontAwesomeIcon icon={faHome} style={{ color: focused ? 'red' : 'black' }} />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Taxicar" component={Taxicar}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View  >
                            <FontAwesomeIcon icon={faCar} style={{ color: focused ? 'red' : 'black' }} />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View  >
                            <FontAwesomeIcon icon={faUser} style={{ color: focused ? 'red' : 'black' }} />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}
export default Tabs