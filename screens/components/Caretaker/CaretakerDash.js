import { View, Text, Dimensions, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const CaretakerDash = () => {
  return (
    <View style={Styles.background}>
      <SafeAreaView>
        <ScrollView>

          <View>
            <Text style={Styles.LogoText}>MediSync</Text>
            <Text style={{fontWeight: '200'}}>Welcome to Your MediSync Homepage</Text>
          </View>


        </ScrollView>
      </SafeAreaView>
      
    </View>
  )
}

export default CaretakerDash

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
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
})