import { View, Text, StyleSheet, Dimensions, SafeAreaView, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react';
import Quotes from './Quotes.json';
import ActionButton from 'react-native-action-button';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { NavigateToScreen } from '../../utils/NavigationUtils';
import { auth, db } from '../../../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Card = ({ name, relationship }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.test}>{relationship}</Text>
    </View>
  );
};

const HealthQuoteCard = ({ index }) => {

    const { quote, author } = Quotes[index];

    return (
        <View style={Styles.card}>
            
            <Text style={Styles.quoteText}>{quote}</Text>
            <Text style={Styles.authorText}>- {author}</Text>
        </View>
    );
};



const AddPatients = ({ navigation }) => {

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleButtonPress = () => {
    navigation.navigate('WritePatient');
  }

  const user = auth.currentUser?.uid;

  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'patients', user, "data" ));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setCardsData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ flex:1, alignItems: 'center', justifyContent: 'center' }} />;
  }


  return (
    <View style={Styles.background}>

    <TouchableOpacity onPress={handleButtonPress} style={Styles.fab} >
      <AntDesign name="plus" size={24} color="white" />
    </TouchableOpacity>

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

                    <TouchableOpacity  >

                      <View style={{paddingTop: 20}}>
                      {cardsData.map((card, index) => (
                        <Card
                          key={index}
                          name={card.name}
                          relationship={card.relationship}
                        />
                      ))}
                      </View>

                    </TouchableOpacity>
                    

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
  });

  const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 1,
      margin: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    
    name: {
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 10,
      marginHorizontal: 10,
    },
    test: {
      color: '#000',
      marginHorizontal: 10,
      marginBottom: 10,
    },
  });
  