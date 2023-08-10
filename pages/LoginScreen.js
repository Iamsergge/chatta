import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.appname}>Chatta</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Email" />
            <TextInput style={styles.textInput} placeholder="Password" />
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.signIn}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.signUpOpt}>
              <Text style={styles.noAccountText}>No account?</Text>
              <Text style={styles.SignUptext}>Sign Up</Text>
            </View>
            <View style={styles.forgotPasswordContainer}>
              <Text style={styles.forgorPasswordText}>Forgot Password</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: 80,
    alignItems: 'center',
    backgroundColor: '#26394D',
  },
  topContainer: {
    flex: 1.2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appname: {
    fontFamily: 'berkshire',
    fontSize: 54,
    color: '#fff',
  },
  bottomContainer: {
    flex: 2.8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderRadius: 15,
    height: 46,
    borderColor: '#1EA0E5',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  innerContainer: {
    height: 320,
    backgroundColor: '#fff',
    borderRadius: 25,
    width: 320,
    padding: 20,
  },
  inputContainer: {
    height: 120,
  },
  actionContainer: {
    height: 140,
    top: 20,
  },
  actionButton: {
    color: '#FFF',
    backgroundColor: '#1EA0E5',
    borderRadius: 15,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpOpt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  signIn: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
    
  },
  noAccountText: {
    fontSize: 16
  },
  signUpText: {
    color: '#1EA0E5',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    
  },
  forgorPasswordText: {
    color: '#1EA0E5',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
