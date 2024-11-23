import React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, Text, Image, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

function CustomButton({
  title,
  onPress,
  width,
  marginRight,
  height,
  marginLeft,
  marginTop,
  marginBottom,
  backgroundColor,
  borderWidth,
  borderLeftWidth,
  borderColor,
  TextColor,
  iconName,
  paddingVertical,
  fontSize = 16,
  loading, 
  borderRadius = 5,
  borderTopStartRadius,
  borderBottomStartRadius,
  linkedInLogo,
  googleLogo,
  emailLogo,
  microsoftLogo
}) {
  const { colors } = useTheme(); // Access theme colors

  // Fallback to theme colors if no explicit color is provided
  const buttonBackgroundColor = backgroundColor || colors.primary;
  const buttonTextColor = TextColor || colors.text;
  const buttonBorderColor = borderColor || colors.border;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: buttonBackgroundColor },
        { width },
        { height },
        { marginRight },
        { marginLeft },
        { marginTop },
        { marginBottom },
        { borderWidth },
        { borderLeftWidth },
        { borderColor: buttonBorderColor },
        { paddingVertical },
        { borderRadius },
        { borderTopStartRadius },
        { borderBottomStartRadius },
      ]}
      disabled={loading}
    >
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator color={buttonTextColor} />
        ) : (
          <>
            {googleLogo && <Image source={googleLogo} style={styles.logo} />}
            {linkedInLogo && <Image source={linkedInLogo} style={styles.logo} />}
            {microsoftLogo && <Image source={microsoftLogo} style={styles.logo} />}
            {emailLogo && (
              <MaterialCommunityIcons
                name="email-outline"
                size={20}
                color={buttonTextColor}
              />
            )}
            <Text style={[styles.text, { fontSize }, { color: buttonTextColor }]}>
              {title}
            </Text>
          </>
        )}
        {!loading && iconName && (
          <FontAwesome name={iconName} size={22} color={buttonTextColor} style={styles.icon} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 17,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
  },
  icon: {
    marginLeft: 0,
  },
  logo: {
    alignContent: 'flex-start',
    width: 30,
    height: 30,
  },
});

export default CustomButton;