import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPage from './screens/components/StartPage';
import LoginPage from './screens/components/Auth/LoginPage';
import SignupPage from './screens/components/Auth/SignupPage';
import SignupPage2 from './screens/components/Auth/SignupPage2';
import CaretakerDash from './screens/components/Caretaker/CaretakerDash';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='StartPage' component={StartPage}/>
        <Stack.Screen name='LoginPage' component={LoginPage}/>
        <Stack.Screen name='SignupPage' component={SignupPage} options={{ headerShown: false }}/>
        <Stack.Screen name='SignupPage2' component={SignupPage2}/>
        <Stack.Screen name='CaretakerDash' component={CaretakerDash}/>
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
