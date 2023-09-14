import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { Configuration, OpenAIApi } from 'openai';
import OpenAI from 'openai';
import axios from "axios";


const CaretakerAIChat = ({ navigation }) => {

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleSubmit = async () => {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        text: message,
        prompt: "Reply to my message:",
        temperature: 0.7,
        top_p: 0.9,
      },
      {
        headers: {
          Authorization: `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`,
        },
      }
    );

    setReply(response.data.choices[0].text);
  };
  
  return (
    <View style={styles.container}>
        <View>
      <TextInput
        placeholder="Enter your message"
        onChangeText={(text) => setMessage(text)}
      />
      <Button
        title="Send"
        onPress={handleSubmit}
      />
      <Text>Reply: {reply}</Text>
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