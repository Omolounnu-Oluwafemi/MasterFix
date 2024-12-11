// VideoPlayer.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

const VideoPlayer = () => {
  const [videoVisible, setVideoVisible] = useState(false);

  const handleVideoPress = () => {
    setVideoVisible(true);
  };

  return (
    <View style={styles.container}>
      {videoVisible ? (
        <View style={styles.videoContainer}>
          <WebView
            style={styles.webView}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: 'https://www.youtube.com/watch?v=cZHaBYb7Q2c' }} // Replace with your YouTube video URL
          />
        </View>
      ) : (
        <TouchableOpacity style={styles.videoContainer} onPress={handleVideoPress}>
          <Image source={require('../../assets/images/thumbnail.png')} style={styles.videoThumbnail} />
          <Ionicons name="play-circle" size={64} color="white" style={styles.playIcon} />
        </TouchableOpacity>
          )}
          
            <View style={styles.scrollContainer}>
              <Text style={styles.scroll}>See steps</Text>  
              <AntDesign name="right" size={18} color="#7C7C7F" />
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  playIcon: {
    position: 'absolute',
  },
  webView: {
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    width: "25%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  scroll: {
    fontSize: 13,
  }
});

export default VideoPlayer;