import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import LottieView from 'lottie-react-native';




const Lottie2 = ({navigation}) => {

    return (
        <View style={styles.container}>
            
        <LottieView
        source={require('../assets/ins.json')}
        autoPlay
        loop
        />

        </View>
    );




};

export default Lottie2;

const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#267c82'

        }
    }
)