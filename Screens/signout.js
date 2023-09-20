/*import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Header from '../Header'
import 'expo-dev-client';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
//import React,{useState,useEffect} from 'react';

const signout = () => {


    const signOut = async () =>{
        try{
          await GoogleSignin.revokeAccess();
          await auth().signOut();
        } catch (error){
          console.error(error);
        }
      } 

  return (
    <View style ={styles.container}>
      
      <Header />
      <View style={{marginTop:100, alignItems:'center'}}>
        <Text style={styles.text}>Welcome, {user.displayName}</Text>
        <Image 
        source={{uri: user.photoURL}}
        style= {{height:150, width:150, borderRadius:75, margin:75}}
        />
        <Button title='Sign Out' onPress={signOut}/>
        <Text></Text>
        <Button  onPress={next} title='next' style={styles.button} ></Button>
      </View>
  
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize: 23,
      fontWeight: 'bold',
    },
    button:{
      margin:10,
      padding: 50
    },
  });

export default signout*/