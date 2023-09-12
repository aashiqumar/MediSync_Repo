import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import RIcons from 'react-native-vector-icons/FontAwesome';
import { NavigateToScreen } from '../../utils/NavigationUtils';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';

const SignupPage = ({ navigation }) => {
  const [isClicked, setIsClicked] = useState(true);

  const eyeOpen = true

  

  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDataChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDob(new Date(selectedDate.toISOString().split('T')[0]));
    }
  };

  const openDatePicker = () => {
    showDatePicker(true);
  };

  const handleNavigation = () => {

    const dobString = dob.toISOString().split('T')[0];

    navigation.navigate('SignupPage2', {
      name, email, dobString
    })
  }



  return (
    
    <View style={Styles.background}>
    
      <SafeAreaView>

      <ScrollView>
        
        
        <View>
        

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    
            <Image source={require("../../../assets/Thirds/Group-6800.png")} style={{ height:100, width: screenWidth }} resizeMode='repeat'/>
            <Text style={Styles.LogoText}>Create Your Account</Text>
            <Text style={{ fontWeight: '200' }}>Fill all the fields below, to register.</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}  style={Styles.overlayItem}>
              <Icon name='arrow-left' color='#8E97FD' size={50}/>
            </TouchableOpacity>
            
          </View>

          <View style={Styles.divider}></View>

          <View style={{ paddingHorizontal: 30, paddingTop: 30 }}>
            <TextInput onChangeText={text => setName(text)} value={name} style={[Styles.textBox, {marginBottom: 10}]} placeholder="Enter Your Name"/>
            <TextInput onChangeText={text => setEmail(text)}  value={email} style={Styles.textBox} placeholder="Enter Your Email" keyboardType='email-address'/>
            
            <Text style={{ paddingTop: 10, paddingLeft: 10, color: '#a3a2a2', fontSize: 11, }}>Date of Birth (Scroll to Pick Date) </Text>
            <TouchableWithoutFeedback >
              <TextInput
                value={dob.toISOString().split('T')[0]}
                style={[Styles.textBox, {marginTop: 2}]}
                placeholder="Enter Your Date of Birth"
                editable={false}
                onChangeText={text => setDob(text)}
              />
            </TouchableWithoutFeedback>

            <View style={{ paddingTop: 15 }}>
            {setShowDatePicker && (
              
                <DateTimePicker
                  value={dob}
                  mode='date'
                  display='spinner'
                  onChange={handleDataChange}
                  style={{ height: 100, }}
                />
              
            )}
            </View>

           
            {/* Password TextBox */}
            {/* <View style={[Styles.textBox, { marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
              <TextInput value={dob} style={[Styles.textBox, {paddingLeft: 0, width: '100%' }]} placeholder="Enter Your Password" secureTextEntry={isClicked}/>
              <TouchableOpacity style={{  }} onPress={handleEye}>
                <RIcons name={isClicked ? 'eye-slash' : 'eye'} size={20} color={isClicked ? '#A1A4B2' : '#8E97FD'} />
              </TouchableOpacity>             
            </View> */}
            
          </View>
          

          <View style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 10, }}>

            <TouchableOpacity onPress={() => {handleNavigation(); console.log('Name: '+name + ' Email: '+email + ' DOB: '+dob.toISOString().split('T')[0])}} style={ Styles.button }>
              <Text style={{ color: '#FFF' }} >Continue</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => NavigateToScreen(navigation, 'LoginPage')}  style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flexDirection: "row", paddingTop: 20 }}>
                <Text style={{ color: '#000' }} >Already Have an Account? </Text>
                <Text style={{ color: '#8E97FD', }} >Login Now</Text>
              </View>
                        
            </TouchableOpacity>

            

          </View>

          <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                    
            <Image source={require("../../../assets/Thirds/Group-6800.png")} style={{ height:100, width: screenWidth }} resizeMode='repeat'/>
            
            
          </View>
          
          
       

        </View>

        </ScrollView>
        

        

        

        
      </SafeAreaView>
      
    </View>
    
  )
}

export default SignupPage

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