import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import 'expo-dev-client';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React,{useState,useEffect} from 'react';
import Header from '../Header';

 const Landing=({navigation}) =>{
  const [initializing, setInitializing]= useState(true);
  const [user, setUser]= useState();

  GoogleSignin.configure({
    webClientId: '149208804617-lfq3ecfk3pqnkq9mgnih9e5ltu8bova6.apps.googleusercontent.com',
  });

  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onGoogleButtonPress = async() => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in.then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  const signOut = async () =>{
    try{
      await GoogleSignin.revokeAccess();
      await auth().signOut();
    } catch (error){
      console.error(error);
    }
  }

  if (initializing) return null;

  if(!user){
    return(
      <View style={styles.container}>
        <Header />
        <GoogleSigninButton 
         style={{width:300, height:65, marginTop:300}}
         onPress={onGoogleButtonPress}
        />
      </View>
    )
  }
  return(
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
      <Button  title='next' style={styles.button} onPress={()=> navigation.navigate('CameraS')}></Button>
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

export default Landing;