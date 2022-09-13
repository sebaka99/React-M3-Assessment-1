import React from "react";
import { StyleSheet,Text, TextInput, View, Image, TouchableOpacity, Button, useState, StatusBar,  Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Register = ( { navigation }) =>{

    return (
        
      <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
         height: Dimensions.get("window").height,
          width: '100%'
           }}
      >
      <View style={styles.container}>
      
      <Image style={styles.image} source = {require("../assets/proj.png")}/>
      <StatusBar style="auto" />
  
      <View style={styles.inputView}>
      
      <TextInput style={styles.textInput}
      placeholder='Full Name'
      placeholderTextColor="003f5c"
      //onChangeText={(email) => setEmail(email)}
  
      />
      </View>
  
      <View style={styles.inputView}>
      
      <TextInput style={styles.textInput}
      placeholder='Email'
      placeholderTextColor="003f5c"
      //onChangeText={(email) => setEmail(email)}
  
      />
      </View>
  
      <View style={styles.inputView}>
        
      <TextInput style={styles.textInput}
      placeholder='Password'
      placeholderTextColor="003f5c"
      secureTextEntry={true}
      //onChangeText={(password) => setPassword(password)}
  
      />
  
      </View> 
  
      <View style={styles.inputView}>
        
      <TextInput style={styles.textInput}
      placeholder='Confirm Password'
      placeholderTextColor="003f5c"
      secureTextEntry={true}
      //onChangeText={(password) => setPassword(password)}
  
      />
  
      </View> 
  
      
  
      <View >
    
  
        <Button style={styles.loginButton} 
        title="Register" 
  
        onPress={() => navigation.navigate('Dashboard')}/> 
               
        
  
        <TouchableOpacity>
          <Text style={styles.createAccountText} onPress={() => navigation.navigate('Login')}>Aready a user? Login to you account.</Text>
        </TouchableOpacity>
     
      </View>  
    </View>
      </KeyboardAwareScrollView>
    
    );
    
}

export default Register;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    // Create space between the image and text inputs
    image :{
      marginBottom: 40
    },
  
    inputView: {
      backgroundColor: "skyblue",
      borderRadius: 10,
      width: "90%",
      height: 50,
      marginBottom: 20,
      alignItems: "center"
    },
  
    textInput: {
      alignContent: "center",
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
  
  
    loginButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 50,
      elevation: 3,
      overflow: 'hidden',
      backgroundColor: 'yellow',
    },

    createAccountText: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 20,
      textAlign: "center",
      marginTop: 20
      
    },
  });
  