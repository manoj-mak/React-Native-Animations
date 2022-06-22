import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import LottieView from 'lottie-react-native';

const Lottie1 = ({navigation}) => {

    return (
        <View style={styles.container}>
            
        <LottieView
        source={require('../assets/abc.json')}
        autoPlay
        loop
        />

        </View>
    );




};

export default Lottie1;

const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#192342'

        }
    }
)