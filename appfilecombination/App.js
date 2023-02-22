import React, { Component, useState } from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import bcrypt from 'bcryptjs';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { MongoClient} from 'mongodb';
import Frame from './components/dash';
import Frame1 from './components/user';
import Frame2 from './components/settings';

import { GestureHandlerRootView } from 'react-native-gesture-handler';


// const mongoose = require('mongoose');
// // Set up the MongoDB connection
// mongoose.connect('mongodb+srv://Demo:Pass_demo1@cluster0.yizd48m.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});

// // Define the user schema
// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String
// });

// const UserId = mongoose.model("UserInfo", UserDetailsScehma);

function Dashboard({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Frame />
      </View>
    </ScrollView>
  );
}

function User({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Frame1 />
      </View>
    </ScrollView>
  );
}
function Setting({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Frame2 />
      </View>
    </ScrollView>
  );
}

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
	//Method 1 for handleLogin
  //  const handleLogin = async () => {
  //   // Connect to MongoDB database
  //   const uri = 'mongodb://localhost:27017';
  //   const client = new MongoClient(uri);

  //   try {
  //     await client.connect();
  //     const db = client.db('myDatabase');

  //     // Find user with matching email
  //     const user = await db.collection('users').findOne({ email });

  //     // Compare password hashes
  //     const isMatch = await bcrypt.compare(password, user.password);

  //     if (isMatch) {
  //       // Store user data in AsyncStorage
  //       await AsyncStorage.setItem('userData', JSON.stringify(user));

  //       // Redirect to main page
  //       navigation.navigate('Main');
  //     } else {
  //       alert('Invalid email or password');
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     alert('An error occurred');
  //   } finally {
  //     await client.close();
  //   }
  // };
  
  	//Method 2 for handleLogin

  // const handleLogin = async () => {
  //   try {
  //     const user = await User.findOne({ email, password });
  //     if (user) {
  //       navigation.navigate('Dashboard');
  //     } else {
  //       setErrorMessage('Invalid email or password');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setErrorMessage('An error occurred');
  //   }
  // };
  
  //temp method
  const handleLogin = async () => {
    navigation.navigate('Dashboard');
  };
  return (
    <View style={styles.logincontainer}>
      <View style={styles.logininnercontainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button style={{ marginTop: 10 }} title="Login" onPress={handleLogin} />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <Text style={{ marginTop: 10 }} href="">
          Forgot Password
        </Text>
      </View>
    </View>
  );
};

const LeftDrawer = createDrawerNavigator();

function LeftDrawerScreen() {
  return (
    <View style={{flex:1}}>
    <LeftDrawer.Navigator
      useLegacyImplementation
      id="LeftDrawer"
      screenOptions={{ drawerPosition: 'left',
       }}
      initialRouteName="Dashboard">
      <LeftDrawer.Screen
        name="Login"
        component={LoginPage}
         options={{ headerShown: false,
         drawerItemStyle: { height: 0 } }}
      />
      <LeftDrawer.Screen name="Dashboard" component={Dashboard} />
      <LeftDrawer.Screen name="Analytics" component={Dashboard} />
      <LeftDrawer.Screen name="User" component={User} />
      <LeftDrawer.Screen name="Notification" component={Dashboard} />
      <LeftDrawer.Screen name="Setting" component={Setting} />
      <LeftDrawer.Screen name="Logout" component={LoginPage}
      options={{headerShown:false,}} />
    </LeftDrawer.Navigator>
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    backgroundColor: 'white',
    height: 'auto',
  },
  logincontainer: {
    flex: 1,
    width: 'auto',
    height: 'auto',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  logininnercontainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  input: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    justifyContent:'center',
    align:'center'
  },
});

export default function App() {
  return (
  <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer independent={true}>
      <LeftDrawerScreen />
    </NavigationContainer>
  </GestureHandlerRootView>
  );
}