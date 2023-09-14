import { View, Text, StyleSheet, Dimensions, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Quotes from './Quotes.json';
import { FloatingActionButton, Icon } from 'react-native-paper';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';

const HealthQuoteCard = ({ index }) => {

    const { quote, author } = Quotes[index];

    return (
        <View style={Styles.card}>
            
            <Text style={Styles.quoteText}>{quote}</Text>
            <Text style={Styles.authorText}>- {author}</Text>
        </View>
    );
};


const AddPatients = () => {

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  return (
    <View style={Styles.background}>

                <ActionButton  buttonColor="#8E97FD">
                    <ActionButton.Item useNativeDriver={true} buttonColor='#9b59b6' title="New Patient" onPress={() => console.log('New Task')}>
                    <Ionicons name="md-create" style={Styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item useNativeDriver={true} buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                    <Ionicons name="md-notifications-off" style={Styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item useNativeDriver={true} buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                    <Ionicons name="checkmark-done" style={Styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>

      <SafeAreaView>

        
        <ScrollView>

            <View>

                <View>
                

                    <View>
                        <Text style={Styles.LogoText}>The List</Text>
                        <Text style={{fontWeight: '200'}}>All your Patients or Loved One's</Text>
                    </View>

                    <View>
                        <HealthQuoteCard index={currentQuoteIndex}/>
                    </View>

                    <View style={{ backgroundColor: '#8E97FD', width: 110, alignItems: 'center', borderRadius: 20, padding: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#FFF' }}>All Patients</Text>
                    </View>

                    

                </View>


            </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default AddPatients

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