///Home
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const key_API = 'AIzaSyA-hBh5wGg8YYWQ_WZhbktMNsAihyxNSRU';

const Taxicar = () => {
    const [state, setState] = useState({
        pickupCords: {
            latitude: 16.0545,
            longitude: 108.0717,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        droplocationCords: {
            latitude: 15.8801,
            longitude: 108.3380,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    });
    const mapRef = useRef()
    const { pickupCords, droplocationCords } = state
    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={pickupCords}
            >
                <Marker
                    coordinate={pickupCords}

                >
                    <FontAwesomeIcon icon={faCircleDot} style={{ color: 'red', fontSize: 25 }} />
                </Marker>
                <Marker
                    coordinate={droplocationCords}

                >
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: 'red', fontSize: 25 }} />
                </Marker>
                <MapViewDirections
                    origin={pickupCords}
                    destination={droplocationCords}
                    apikey={key_API}
                    strokeWidth={3}
                    strokeColor="hotpink"
                    optimizeWaypoints={true}
                    onReady={result => {
                        mapRef.current.fitToCoordinates(result.coordinates, {
                            edgePadding: {
                                right: 30,
                                bottom: 300,
                                left: 30,
                                top: 100
                            }
                        })

                    }}
                // onError={(errorMessage) => {
                //     //Console.log("an error")
                // }

                // }

                />
            </MapView>
            {/* <View>
                <Text>Where are you going...</Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {

        ...StyleSheet.absoluteFillObject,
    },
});


export default Taxicar



