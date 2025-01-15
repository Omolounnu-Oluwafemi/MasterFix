// screens/ChatScreen.js
import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import debounce from 'lodash.debounce';
import * as ImagePicker from 'expo-image-picker';
import EmojiSelector from 'react-native-emoji-selector';

const assistantImage = require('../../assets/images/chatAssistant.png');

export default function ChatScreen({ navigation }) {
  const [messages, setMessages] = useState([
    { id: '1', sender: 'assistant', text: "I'm doing well, thank you! How can I help you today?", time: '08:16 AM' },
    { id: '2', sender: 'user', text: 'Hello, how are you doing?', time: '08:15 AM' },
  ]);

    const [inputText, setInputText] = useState('');
    const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const debouncedSetInputText = useCallback(
    debounce((text) => setInputText(text), 300),
    []
  );
    
  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Handle the selected image
      console.log(result.uri);
    }
  };

  const handleEmojiPick = (emoji) => {
    setInputText(inputText + emoji);
    setEmojiPickerVisible(false);
  };

  const handleInputChange = (text) => {
    debouncedSetInputText(text);
  };

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages((prevMessages) => [
        { id: Date.now().toString(), sender: 'user', text: inputText, time: 'Just Now' },
        ...prevMessages,
      ]);
      setInputText('');
    }
  };

  const renderMessage = ({ item }) => (
    <View
          style={[
              styles.messageContainer,
              item.sender === 'user' ? styles.userMessage : styles.assistantMessage,
          ]}
    >
        {item.sender === 'assistant' ? (
            <View>
                <View style={styles.profileImageWrapper}>     
                    <Image
                        source={assistantImage}
                        style={styles.profileImage}
                    />
                    <Text style={styles.assistantName}>Assistant</Text>
                  </View>
                <View style={styles.assistantMessageContent}>
                    <Text style={styles.assistantMessageText}>{item.text}</Text>
                    <Text style={styles.assistantMessageTime}>{item.time}</Text>    
                </View>
            </View>          
        ): (
      <View style={styles.userMessageContent}>
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.userMessageTime}>{item.time}</Text>
      </View>
    )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
        <View style={styles.header}>
          <LinearGradient
            colors={['#003366', '#4A90E2', '#FF6FD8']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientPalette}
            />
            <View style={styles.headerContent}>
                <View style={styles.profileIconWrapper}>
                    <Text style={styles.profileIcon}>C</Text>
                    <TouchableOpacity style={styles.cancelIcon} onPress={() => navigation.goBack()}>
                        <Icon name="close" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.headerTitle}>ChatFlow</Text>
                    <Text style={styles.headerSubtitle}>
                    A live chat interface that allows for seamless, natural communication and connection.
                    </Text>
                </View>
            </View>
        </View>

      {/* Chat Area */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        inverted={true}
        style={styles.chatArea}
      />

      {/* Input Area */}
      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Reply..."
          value={inputText}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Icon name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View> */}
          
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setEmojiPickerVisible(true)} style={styles.emojiButton}>
          <FontAwesome name="smile-o" size={24} color="#888" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Reply..."
          value={inputText}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity onPress={handleImagePick} style={styles.imageButton}>
          <MaterialIcons name="photo" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <MaterialIcons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <Modal visible={isEmojiPickerVisible} transparent={true} animationType="slide">
        <View style={styles.emojiPickerContainer}>
          <EmojiSelector
            onEmojiSelected={handleEmojiPick}
            showSearchBar={false}
            showTabs={true}
            showHistory={true}
            showSectionTitles={false}
          />
          <TouchableOpacity onPress={() => setEmojiPickerVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: '15%',
  },
  header: {
    backgroundColor: '#003366',
    padding: 20,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative', 
 },
 gradientPalette: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    },
  profileIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '5%',
    width: '100%',
    },
  profileIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    },
  cancelIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingVertical: '2%',
    paddingHorizontal: '2.3%',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    padding: 3,
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
    fontWeight: '400',
    lineHeight: 25,
  },
  chatArea: {
    flex: 1,
    paddingHorizontal: 10,
  },
  profileImageWrapper: {
    flexDirection: 'row',
  },
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'flex-end',
  },
  userMessage: {
    alignSelf: 'flex-end',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    borderRadius: 10,
    padding: 10,
    maxWidth: '90%',
  },
  profileImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    marginRight: 10,
    },
  assistantName: {
    color: '#0D082C',
    fontWeight: '600',
    fontSize: 16,
  },
  userMessageContent: {
    maxWidth: '100%',
    borderRadius: 8,
    borderColor: '#ddd',
  },
  assistantMessageContent: {
    borderRadius: 8,
    borderColor: '#ddd',
    marginLeft: '15%',
  },
  assistantMessageText: {
    fontSize: 16,
  },
  messageText: {
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: '#013C69',
    color: '#fff',
    padding: 15,
    borderRadius: 15,
    borderTopRightRadius: 0
  },
  userMessageTime: {
    alignSelf: 'flex-start',
    marginTop: 5,
    color: '#666',
    fontSize: 12,
  },
  assistantMessageTime: {
    alignSelf: 'flex-end',
    marginTop: 5,
    color: '#666',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
  },
   emojiButton: {
    marginRight: 10,
    },
   imageButton: {
    marginLeft: 10,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#013C69',
    borderRadius: 20,
    padding: 10,
  },
  emojiPickerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
    closeButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  closeButtonText: {
    color: '#007BFF',
    fontSize: 16,
  },
});
