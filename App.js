import "react-native-url-polyfill/auto";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPage from './screens/components/StartPage';
import LoginPage from './screens/components/Auth/LoginPage';
import SignupPage from './screens/components/Auth/SignupPage';
import SignupPage2 from './screens/components/Auth/SignupPage2';
import CaretakerDash from './screens/components/Caretaker/CaretakerDash';
import AddPatients from './screens/components/Caretaker/AddPatients';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CaretakerSettings from './screens/components/Caretaker/CaretakerSettings';
import CaretakerAIChat from './screens/components/Caretaker/CaretakerAIChat';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { NavigateToScreen } from './screens/utils/NavigationUtils';
import WritePatients from "./screens/components/Caretaker/WritePatients";


const Tab = createBottomTabNavigator();


export const BottomNavBar = () => {
  return (
    <Tab.Navigator   
    
    screenOptions={({ route }) => ({
      
      
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Patients') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'AI') {
          iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        } 

        // You can return any component here, like an image or a custom icon component
        return <Ionicons name={iconName} size={size} color={"#8E97FD"} />;
      },

      initialRouteName: 'Home',
        tabBarLabelStyle: {
          color: '#8E97FD',
        },
      
    })}>
      <Tab.Screen name="Patients" component={AddPatients} options={{headerShown: false,}}/>
      <Tab.Screen name="AI" component={CaretakerAIChat} options={{headerShown: false,}}/>
      <Tab.Screen name="Settings" component={CaretakerSettings} options={{headerShown: false,}}/>
    </Tab.Navigator>
  );
};



export default function App() {

  const Stack = createNativeStackNavigator();


  const AuthCheckApp = ({ navigation }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth();
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
  
      return unsubscribe;
    }, []);
  
    useEffect(() => {
      if (user) {
        NavigateToScreen(navigation, 'BtmCaretaker');
      } else {
        NavigateToScreen(navigation, 'StartPage');
      }
    }, [user, navigation]);
  }
  
 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AuthCheck' component={AuthCheckApp} />
        <Stack.Screen name='StartPage' component={StartPage}/>
        <Stack.Screen name='LoginPage' component={LoginPage}/>
        <Stack.Screen name='SignupPage' component={SignupPage} options={{ headerShown: false }}/>
        <Stack.Screen name='SignupPage2' component={SignupPage2}/>
        <Stack.Screen name='CaretakerDash' component={CaretakerDash}/>
        <Stack.Screen name='BtmCaretaker' component={BottomNavBar}/>
        <Stack.Screen name='CaretakerAIChat' component={CaretakerAIChat}/>
        <Stack.Screen name="Patients" component={AddPatients}/>
        <Stack.Screen name='WritePatient' component={WritePatients}/>
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
