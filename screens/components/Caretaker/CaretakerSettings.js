import { View, Text, StyleSheet, Dimensions, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Quotes from './Quotes.json';
import ActionButton from 'react-native-action-button';
import { AntDesign } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { auth } from '../../../FirebaseConfig';
import { NavigateToScreen } from '../../utils/NavigationUtils';

const CaretakerSettings = ({ navigation }) => {

    const handleSignOut = async () => {
      try {
        await signOut(auth);
        console.log('User signed out');

        NavigateToScreen(navigation, 'StartPage');
      } catch (error) {
        console.error('Error signing out:', error.message);
      }
    }


  return (
    <View style={Styles.background}>

    <TouchableOpacity onPress={handleSignOut} style={Styles.fab} >
      <AntDesign name="logout" size={24} color="white" />
    </TouchableOpacity>

      <SafeAreaView>

        
        <ScrollView>

        

            <View>

                <View>
                

                    <View>
                        <Text style={Styles.LogoText}>Settings</Text>
                        <Text style={{fontWeight: '200'}}>All your MediSync Settings</Text>
                    </View>

                    

                    <View style={Styles.pcard}>
                        <Image source={require('../../../assets/Thirds/quote-bg.png')} style={Styles.profileImage} />
                        <Text style={Styles.name}>Aashiq Umar</Text>
                        <Text style={Styles.age}>aash3q@gmail.com</Text>
                    </View>

                </View>


            </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default CaretakerSettings

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    background: {
      flex: 1,
      padding: 20,
      backgroundColor: '#FFF'
    },  
  
    LogoText: {
      paddingTop: 10,
      color: '#8E97FD',
      fontSize: 35,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'baseline'
    },  
  
    image: {
        height: screenHeight,
        aspectRatio: 1,
        width: screenWidth
    },
  
    overlayItem: {
      position: 'absolute',
      zIndex: 1,
      aspectRatio: 1,
      top: 50,
      left: 10,
  
    },
  
    divider: {
      height: 2, 
      backgroundColor: '#F1F1F1',
      marginTop: 15,
      marginHorizontal: 120,
    },
  
    textBox: {
      height: 60,
      paddingLeft: 20,
      paddingRight: 40,
      backgroundColor: '#F1F1F1',
      color: "#000",
      fontSize: 15,
      borderRadius: 20,
  
    },
  
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#03174C',
      height: 60,
      borderRadius: 30,
      marginTop: 20
    }, 

    fab: {
      position: 'absolute',
      width: 56,
      height: 56,
      alignItems: 'center',
      justifyContent: 'center',
      right: 20,
      bottom: 20,
      backgroundColor: '#8E97FD', // Change the color as needed
      borderRadius: 30,
      elevation: 8,
    },
    
    card: {
        backgroundColor: '#8E97FD',
        borderRadius: 10,
        padding: 16,
        marginVertical: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      },
      quoteText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 8,
      },
      authorText: {
        fontSize: 14,
        textAlign: 'left',
      },

      actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },

      pcard: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
      },
      name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      age: {
        fontSize: 16,
        color: '#555',
      },
  })