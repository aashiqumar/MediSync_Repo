import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import RIcons from 'react-native-vector-icons/FontAwesome';

const LoginPage = ({ navigation }) => {

  const [isClicked, setIsClicked] = useState(true);

  const eyeOpen = true;

  const handleEye = () => {
    setIsClicked(!isClicked);
  }

  return (
    <View style={Styles.background}>
      <SafeAreaView>
        <View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    
            <Image source={require("../../../assets/Thirds/Group-6800.png")} style={{ height:100, width: screenWidth }} resizeMode='repeat'/>
            <Text style={Styles.LogoText}>Welcome Back!</Text>
            <Text style={{ fontWeight: '200' }}>Login in With Your Email & Password</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}  style={Styles.overlayItem}>
              <Icon name='arrow-left' color='#8E97FD' size={50}/>
            </TouchableOpacity>
            
          </View>

          <View style={Styles.divider}></View>

          <View style={{ paddingHorizontal: 30, paddingTop: 60 }}>
            <TextInput style={Styles.textBox} placeholder="Enter Your Email" keyboardType='email-address'/>


            <View style={[Styles.textBox, { marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
              <TextInput style={[Styles.textBox, {paddingLeft: 0, width: '100%' }]} placeholder="Enter Your Password" secureTextEntry={isClicked}/>
              <TouchableOpacity style={{  }} onPress={handleEye}>
                <RIcons name={isClicked ? 'eye-slash' : 'eye'} size={20} color={isClicked ? '#A1A4B2' : '#8E97FD'} />
              </TouchableOpacity>
              
            </View>
            
          </View>
          

          <View style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 20, }}>

            <TouchableOpacity style={ Styles.button }>
              <Text style={{ color: '#FFF' }} >Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => NavigateToScreen(navigation, 'LoginPage')}  style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flexDirection: "row", paddingTop: 20 }}>
                <Text style={{ color: '#000' }} >Forgot Your Password? </Text>
                <Text style={{ color: '#8E97FD', }} >Reset it Now</Text>
              </View>
                        
            </TouchableOpacity>

            <View style={Styles.divider}></View>

                
            <TouchableOpacity onPress={() => NavigateToScreen(navigation, 'LoginPage')}  style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flexDirection: "row", paddingTop: 20 }}>
                <Text style={{ color: '#000' }} >NOT REGISTERED YET? </Text>
                <Text style={{ color: '#8E97FD', }} >SIGNUP NOW</Text>
              </View>
                        
            </TouchableOpacity>

          </View>

        </View>

        <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                    
            <Image source={require("../../../assets/Thirds/Group-6800.png")} style={{ height:100, width: screenWidth }} resizeMode='repeat'/>
            <Text style={Styles.LogoText}>Welcome Back!</Text>
            <Text style={{ fontWeight: '200' }}>Login in With Your Email & Password</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}  style={Styles.overlayItem}>
              
            </TouchableOpacity>
            
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

export default LoginPage