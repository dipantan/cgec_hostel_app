import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Color} from '../../utils/color';
import {Button} from '@react-native-material/core';

const {height, width} = Dimensions.get('window');

const Index = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focus();
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleLogin = () => {
    Alert.alert('', 'Login Successful');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={-height * 0.8}>
      {isKeyboardVisible ? null : (
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.webp')}
            style={styles.logo}
          />
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Login Now</Text>
        <Text style={{color: Color.black.lightest}}>
          Please enter the details below to continue
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          value={username}
          returnKeyType="next"
          ref={userNameRef}
          placeholderTextColor={Color.black.lightest}
          keyboardType="default"
          selectionColor={Color.black.default}
          onSubmitEditing={() => passwordRef.current.focus()}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          ref={passwordRef}
          placeholderTextColor={Color.black.lightest}
          returnKeyType="next"
          onSubmitEditing={handleLogin}
          selectionColor={Color.black.default}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        {/* submit button */}
        <Button
          style={styles.button}
          onPress={handleLogin}
          title="Login"
          titleStyle={{
            textTransform: 'capitalize',
            fontWeight: 'bold',
            fontSize: width * 0.05,
          }}
          accessibilityLabel="Login"
        />
        {/* sign in with google */}
        
      </View>
    </KeyboardAvoidingView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white.default,
  },
  logoContainer: {
    flex: 5.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.7,
    height: height * 0.3,
    borderRadius: 10,
    marginTop: height * 0.05,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: width * 0.08,
    color: Color.black.default,
    fontWeight: 'bold',
    paddingTop: height * 0.01,
    paddingBottom: height * 0.01,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 5.5,
    padding: width * 0.05,
  },
  textInput: {
    backgroundColor: Color.white.light,
    borderRadius: 10,
    color: Color.black.default,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    marginVertical: height * 0.01,
    marginHorizontal: width * 0.04,
  },
  button: {
    backgroundColor: Color.button.secondary,
    borderRadius: width * 0.1,
    marginVertical: height * 0.02,
    marginHorizontal: width * 0.04,
  },
});
