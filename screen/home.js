
// Choose Location
import React, { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text>Home</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Taxicar')}
                />
            </View>
        </SafeAreaView>

    )
}

export default Home;