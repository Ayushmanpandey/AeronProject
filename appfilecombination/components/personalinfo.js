import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function PersonalInfoForm() {
  return (
    <View style={styles.maincontainer}>
      <Text
        style={{
          fontWeight: '500',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 18,
        }}>
        Personal Information
      </Text>
      <Text style={{ margin: 10 }}>Profile Image</Text>
      <Image
        style={{ width: 150, height: 150 }}
        source={
          (uri = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png')
        }
      />
      <View style={styles.imageinputcontainer}>
        <Image style={{ width: 20, height: 20 }} source={(uri = '')} />
        <TextInput
          style={styles.name}
          placeholder="First Name"
          onChangeText={{}}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.imageinputcontainer}>
        <Image style={{ width: 20, height: 20 }} source={(uri = '')} />
        <TextInput
          style={styles.name}
          placeholder="Last Name"
          onChangeText={{}}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.imageinputcontainer}>
        <Image
          style={{ width: 20, height: 20 }}
          source={
            (uri = 'https://cdn-icons-png.flaticon.com/512/2354/2354127.png')
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          onChangeText={{}}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.imageinputcontainer}>
        <Image
          style={{ width: 20, height: 20 }}
          source={
            (uri = 'https://cdn-icons-png.flaticon.com/512/482/482138.png')
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={{}}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.imageinputcontainer}>
        <Image
          style={{ width: 20, height: 20 }}
          source={
            (uri = 'https://cdn-icons-png.flaticon.com/512/993/993891.png')
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Company Name"
          onChangeText={{}}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.imageinputcontainer}>
        <Image
          style={{ width: 20, height: 20 }}
          source={
            (uri = 'https://cdn-icons-png.flaticon.com/512/3015/3015933.png')
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Designation"
          onChangeText={{}}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.cancelbutton} onPress={{}}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitbutton} onPress={{}}>
          <Text style={{ color: 'white' }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    margin: 10,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  imageinputcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1,
  },
  name: {
    justifyContent: 'center',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  buttoncontainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'end',
    margin: 10,
  },
  cancelbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    width: '50%',
  },
  submitbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    width: '50%',
    backgroundColor: '#0066ff',
  },
});