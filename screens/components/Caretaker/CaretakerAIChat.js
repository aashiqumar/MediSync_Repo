import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {generateResponse} from '../../utils/chatgpt';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CaretakerAIChat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!userInput) {
      return;
    }

    setIsLoading(true);

    setMessages(prevMessages => [
      ...prevMessages,
      {text: userInput, sender: 'user'},
    ]);

    const botResponse = await generateResponse(userInput);

    setIsLoading(false);

    setMessages(prevMessages => [
      ...prevMessages,
      {text: botResponse, sender: 'chatgpt'},
    ]);

    setUserInput('');
  };

  const renderSendButton = () => {
    if (isLoading) {
      // Render the loading icon if isLoading is true
      return (
        <ActivityIndicator
          size="small"
          color="#fff"
          style={styles.loadingIcon}
        />
      );
    } else {
      // Render the send button if isLoading is false
      return (
        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
          disabled={isLoading}>
          <Icon name="send" size={20} style={{padding: 10}} color="#fff" />
        </TouchableOpacity>
      );
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
    
    <View style={styles.container}>
      <View style={{ paddingTop: 30, alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>MediSync AI</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.message,
              msg.sender === 'user'
                ? styles.userMessage
                : styles.chatgptMessage,
            ]}>
            <Text>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          value={userInput}
          onChangeText={setUserInput}
          placeholder="Write a Medicine name & Dosage"
          style={styles.input}
          editable={!isLoading} // Disable input when loading
        />
        {renderSendButton()}
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 600,
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  message: {
    padding: 10,
    marginBottom: 5,
    maxWidth: '70%',
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#8E97FD',
    color: 'white',
    marginBottom: 10,
  },
  chatgptMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e5e5e5',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  loadingIcon: {
    marginLeft: 10,
  },
  sendButton: {
    backgroundColor: '#8E97FD',
    borderRadius: 100,
    marginRight: 5,
  },
});


