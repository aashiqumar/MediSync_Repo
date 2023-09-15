import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Configuration, OpenAIApi } from 'openai';
import OpenAI from 'openai';


const CaretakerAIChat = ({ navigation }) => {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const openai = new OpenAI({
    apiKey: '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',
  });  

  const handleSend = async () => {
    try {
      const response = await openai.completions({
        engine: 'davinci',
        prompt: `${input}`,
        maxTokens: 50, // Adjust as needed
      });
  
      setOutput(response.choices[0].text);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>AI Chatbot</Text>
        <View style={styles.chatContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    autoFocus={true}
                    style={styles.input}
                    placeholder="Type your message here"
                    value={input}
                    onChangeText={setInput}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>    
            </View>

            <View style={styles.outputContainer}>
              <Text style={styles.output}>{output}</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chatContainer: {
    width: '90%',
    height: '70%',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F2F2F2',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  sendButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  outputContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  output: {
    fontSize: 16,
  },
});


export default CaretakerAIChat