// import React from "react";
// import { View } from "react-native";
// // import { StyleSheet, Text, View } from "react-native";
// // import MapView from "react-native-maps";
// import Tabs from "./screen/Tabs";
// import { NavigationContainer } from "@react-navigation/native";

// const App = () => {
//   return (
//     // <NavigationContainer>
//     // <NavigationContainer>
//     //   <Tabs />
//     // </NavigationContainer>
//     // <Tabs />
//     // </NavigationContainer>

//   );
// }


// export default App
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View, TouchableOpacity } from 'react-native';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Taxicar from "./screen/taxicar";
import Tabs from "./screen/Tabs";
import Home from "./screen/home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => {
          return {
            animation: 'fade_from_bottom',
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <View  >
                    <FontAwesomeIcon icon={faArrowLeft} style={{ color: navigation ? 'black' : 'grey' }} />
                  </View>
                </TouchableOpacity>
              );
            },
          };
        }}
        initialRouteName="Tabs"
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Taxicar" component={Taxicar} />


      </Stack.Navigator>

    </NavigationContainer>
  );
}



