import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import PersonalInfoForm from './personalinfo';
import ChangePassForm from './changepass';

const Frame1 = () => {
  return (
    <SafeAreaView>
      <View style={[styles.maincontainer, styles.shadowProp]}>
        <Image
          style={styles.profileicon}
          source={
            (uri = 'https://cdn-icons-png.flaticon.com/128/1946/1946429.png')
          }
        />
        <Text style={styles.myprofiletext}>My Profile</Text>
      </View>
      <View style={{ flexDirection: 'row', margin: 5, gap: 10 }}>
        <View style={[styles.buttoncontainer, styles.shadowProp]}>
          <TouchableOpacity
            onPress={''}
            style={{
              flexDirection: 'column',
              gap: 20,
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Image
              style={styles.icons}
              source={
                (uri =
                  'https://cdn-icons-png.flaticon.com/128/4803/4803103.png')
              }
            />
            <Text style={{ fontSize: 14 }}>Personal Info</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttoncontainer, styles.shadowProp]}>
          <TouchableOpacity
            style={{
              gap: 20,
              alignItems: 'center',
              marginVertical: 10,
              flexDirection: 'column',
            }}>
            <Image
              style={styles.icons}
              source={
                (uri =
                  'https://cdn-icons-png.flaticon.com/128/3257/3257787.png')
              }
            />
            <Text style={{ fontSize: 14 }}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.maincontainer, styles.shadowProp]}>
        <PersonalInfoForm />
      </View>
      <View style={[styles.maincontainer, styles.shadowProp]}>
        <ChangePassForm />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    width: 'auto',
    height: 'auto',
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileicon: {
    width: 24,
    height: 24,
  },
  icons: {
    width: 50,
    height: 50,
  },
  myprofiletext: {
    fontWeight: '500',
    fontSize: 16,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  buttoncontainer: {
    width: '45%',
    height: 'auto',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
    marginTop: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
export default Frame1;