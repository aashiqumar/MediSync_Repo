import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigateToScreen } from '../utils/NavigationUtils';
import LoginPage from '../components/Auth/LoginPage';

const StartPage = ({ navigation }) => {

  return (
    <View style={Styles.background}>

        <StatusBar
            
        />

        <SafeAreaView>

            <View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    
                    <Image source={require("../../assets/Thirds/Group-6800.png")} style={{ height:100, width: screenWidth }} resizeMode='repeat'/>
                    <Text style={Styles.LogoText}>MediSync</Text>
                    <Text style={{ fontWeight: '200' }}>Your Very Own Caretaker</Text>
                </View>

    
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 40 }}>
                   
                        <Text style={{  justifyContent: 'center', alignItems: 'center', fontSize: 20, fontWeight: 'bold' }}>Your 24/7 Personal Caretaker</Text>
                        <Text style={{ fontSize: 14, color: '#A1A4B2', paddingTop: 25, paddingHorizontal: 35, textAlign: 'center' }}>Your very own personal caretakers at your fingertips. Take care of your loved ones from across the world.</Text>
                     
                    </View>

                    {/* <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingRight: 10, flexDirection: 'row' }}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{  justifyContent: 'center', alignItems: 'flex-end', fontSize: 20, fontWeight: 'bold' }}>24/7 Health Guider</Text>
                            <Text style={{ fontSize: 14, fontWeight: '200', paddingLeft: 36, textAlign: 'right' }}>The App will guide the Caretaker and Patients to relax and focus on their duties while the App reminds and monitors.</Text>
                        </View>   
                    </View> */}

                <View style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 30, }}>

                    <TouchableOpacity onPress={() => NavigateToScreen(navigation, 'SignupPage')} style={ Styles.button }>
                        <Text style={{ color: '#FFF' }} >Sign Up</Text>
                    </TouchableOpacity>

                
                    <TouchableOpacity onPress={() => NavigateToScreen(navigation, 'LoginPage')}  style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: "row", paddingTop: 20 }}>
                            <Text style={{ color: '#000' }} >ALREADY HAVE AN ACCOUNT? </Text>
                            <Text style={{ color: '#8E97FD', }} >LOGIN NOW</Text>
                        </View>
                        
                    </TouchableOpacity>

                </View>

                <View style={[ Styles.divider, {marginTop: 30,} ]}></View>

                <TouchableOpacity onPress={() => NavigateToScreen(navigation, 'LoginPage')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: "row", paddingTop: 20 }}>
                            <Text style={{ color: '#000' }} >For Patients? </Text>
                            <Text style={{ color: '#8E97FD', }} >LOGIN HERE</Text>
                        </View>
                        
                </TouchableOpacity>
                
            </View>

            <View style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
                <Text style={{ color: '#000', paddingBottom: 20, fontWeight: '100' }} >Developed by st20251848</Text>
            </View>

        

            

        </SafeAreaView>
      
    </View>
  )
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').width;

const Styles = StyleSheet.create({

    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF'
    },

    divider: {
        height: 2, 
        backgroundColor: '#F1F1F1',
        marginTop: 15,
        marginHorizontal: 120,
    },
    
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03174C',
        height: 60,
        borderRadius: 30,
        marginTop: 20
    },  

    LogoText: {
        paddingTop: 30,
        color: '#8E97FD',
        fontSize: 40,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'baseline'
    },  

    image: {
        height: screenHeight,
        aspectRatio: 1,
        width: screenWidth
    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 190,
        aspectRatio: 1,
        position: 'absolute',
        zIndex: 1,
    },

    overlayImage: {
        height: '100%',
        width: screenWidth,
        aspectRatio: 1,
        position: 'absolute',
        top: 50, // Adjust this value to position the overlay
        left: 60, // Adjust this value to position the overlay
        zIndex: 1, // Make sure the overlay is above the background
        // You can also adjust the width and height if needed
      },

      overlayImage2: {
        height: screenHeight,
        width: screenWidth,
        aspectRatio: 1,
        position: 'absolute',
        zIndex: 1, // Make sure the overlay is above the background
        // You can also adjust the width and height if needed
      },
});



export default StartPage