import { StyleSheet, Text, View,Image,TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Lottie1 from '../screens/lottie1';
import Lottie2 from '../screens/lottie2';
import Caro1 from '../screens/caro1';
import Caro2 from '../screens/caro2';

const Tab = createBottomTabNavigator();

const Tabs = () => {


    return(

        <Tab.Navigator
        
        screenOptions={{
            'tabBarShowLabel':false,
            'headerShown': false,
            'tabBarStyle': {
                position: 'absolute',
                bottom: 25,
                left:20,
                right:20,
                elevation:0,
                backgroundColor: '#dfe1eb',
                borderRadius:15,
                height: 90,
                ...styles.Shadow
            }
        }}
        
        >





            <Tab.Screen name="1st Lottie" component={Lottie1} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent:'center',top:5}}>
                        <Image source={require('../assets/ani.png')} 
                        resizeMode='contain'
                        style = {{
                            width:25,
                            height:25,
                            tintColor: focused? '#e32f45' : '#748c94'
                        }}
                        
                        
                        />
                        <Text style={{color: focused? '#e32f45' : '#748c94',fontSize:12,fontWeight:"600"}}>Lottie</Text>
                    </View>

                ),

            }}  />


            <Tab.Screen name="2nd Lottie" component={Lottie2}
             options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent:'center',top:5}}>
                        <Image source={require('../assets/ani.png')} 
                        resizeMode='contain'
                        style = {{
                            width:25,
                            height:25,
                            tintColor: focused? '#e32f45' : '#748c94'
                        }}
                        
                        
                        />
                        <Text style={{color: focused? '#e32f45' : '#748c94',fontSize:12,fontWeight:"600"}}>Lottie</Text>
                    </View>

                ),

            }}  />

            <Tab.Screen name="1st Carousel" component={Caro1}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent:'center',top:5}}>
                        <Image source={require('../assets/caro.png')} 
                        resizeMode='contain'
                        style = {{
                            width:25,
                            height:25,
                            tintColor: focused? '#e32f45' : '#748c94'
                        }}
                        
                        
                        />
                        <Text style={{color: focused? '#e32f45' : '#748c94',fontSize:12,fontWeight:"600"}}>Carousel</Text>
                    </View>

                ),

            }} />

            <Tab.Screen name="2nd Carousel" component={Caro2} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent:'center',top:5}}>
                        <Image source={require('../assets/caro.png')} 
                        resizeMode='contain'
                        style = {{
                            width:25,
                            height:25,
                            tintColor: focused? '#e32f45' : '#748c94'
                        }}
                        
                        
                        />
                        <Text style={{color: focused? '#e32f45' : '#748c94',fontSize:12,fontWeight:"600"}}>Carousel</Text>
                    </View>

                ),

            }} />




        </Tab.Navigator>


    );

};


const styles = StyleSheet.create({
    Shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity:0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;