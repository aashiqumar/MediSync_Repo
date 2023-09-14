import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import RIcons from 'react-native-vector-icons/FontAwesome';
import CountryPicker from 'react-native-country-picker-modal';
import { useRoute } from '@react-navigation/native';
import { NavigateToScreen } from '../../utils/NavigationUtils';
import { auth, db } from '../../../FirebaseConfig';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import { doc, addDoc, collection } from 'firebase/firestore';


const SignupPage2 = ({ navigation }) => {

  const route = useRoute();

  const { name, email, dobString } = route.params;
  const [country, setCountry] = useState({});
  const [dob, setDob] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isClicked, setIsClicked] = useState(true);

  const eyeOpen = true;

  const handleEye = () => {
    setIsClicked(!isClicked);
  }

  const user = auth.currentUser?.uid;

  async function register () {

    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        create();
      })
      .catch((error) => console.log(error));

  }

  async function create () {

    await addDoc(collection(db, "caretakers", user, "data"), {
      name: name,
      email: email,
      dobString: dobString,
      phoneNumber: phoneNumber
    })
    .then(() => {
      console.log('Data Submitted');
      sendEmailVerification(user);

      NavigateToScreen(navigation, 'BtmCaretaker');

      

    })
    .catch((error) => console.log(error));

  }



  const onCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
  };


  return (
    <View style={Styles.background}>
      <SafeAreaView>

      <ScrollView>
        <View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    
            <Image source={require("../../../assets/Thirds/Group-6800.png")} style={{ height:100, width: screenWidth }} resizeMode='repeat'/>
            <Text style={Styles.LogoText}>Continue Account Creation</Text>
            <Text style={{ fontWeight: '200' }}>Fill all the fields below, to register.</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}  style={Styles.overlayItem}>
              <Icon name='arrow-left' color='#8E97FD' size={50}/>
            </TouchableOpacity>
            
          </View>

          <View style={Styles.divider}></View>

          <View style={{ paddingHorizontal: 30, paddingTop: 30 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{ justifyContent: 'center', alignItems: 'center', width: 60, padding: 10, backgroundColor: '#F1F1F1', borderRadius: 20, height: 60, marginRight: 0  }}>
                <CountryPicker
                    {...{
                        countryCode: country.cca2 || 'LK',
                        withFilter: true,
                        withFlag: true,
                        withAlphaFilter: true,
                        withCallingCode: true,
                        withEmoji: true,
                        onSelect: onCountryChange,
                    }}
                />
            </View>
            

            <TextInput onChangeText={text => setPhoneNumber(text)} value={phoneNumber} style={[Styles.textBox, {marginBottom: 10, width: 230,}]} placeholder="Enter Your Phone Number" keyboardType='number-pad'/>

          </View>
            
            

            {/* Password TextBox */}
            <View style={[Styles.textBox, { marginTop: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
              <TextInput onChangeText={text => setPassword(text)} value={password} style={[Styles.textBox, {paddingLeft: 0, width: '100%' }]} placeholder="Enter Your Password" secureTextEntry={isClicked}/>
              <TouchableOpacity style={{  }} onPress={handleEye}>
                <RIcons name={isClicked ? 'eye-slash' : 'eye'} size={20} color={isClicked ? '#A1A4B2' : '#8E97FD'} />
              </TouchableOpacity>             
            </View>

            {/* Confirm Password TextBox */}
            <View style={[Styles.textBox, { marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
              <TextInput onChangeText={text => setConfirmPassword(text)} value={confirmPassword} style={[Styles.textBox, {paddingLeft: 0, width: '100%' }]} placeholder="Confirm Password" secureTextEntry={isClicked}/>
              <TouchableOpacity style={{  }} onPress={handleEye}>
                <RIcons name={isClicked ? 'eye-slash' : 'eye'} size={20} color={isClicked ? '#A1A4B2' : '#8E97FD'} />
              </TouchableOpacity>             
            </View>
            
          </View>
          

          <View style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 10, }}>

            <TouchableOpacity onPress={() => { 
              register(); 
            }} style={ Styles.button }>
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
            
            
        </View>

        </ScrollView>

        
      </SafeAreaView>
    </View>
  )
}

export default SignupPage2

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
    textAlign: 'center',
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