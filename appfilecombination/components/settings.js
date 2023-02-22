import React from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
} from 'react-native';

const Frame2 = () => {
  return (
    <SafeAreaView>
      <View style={[styles.maincontainer, styles.shadowProp]}>
        <View style={[styles.headingContainer, styles.shadowProp]}>
          <Text style={{ fontWeight: 600, fontSize: 18, padding: 10 }}>
            Device Configuration
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'center',
          }}>
          <View style={[styles.box, styles.shadowProp]}>
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                gap: 10,
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Image
                style={styles.icons}
                source={
                  (uri =
                    'https://cdn-icons-png.flaticon.com/128/8599/8599788.png')
                }
              />
              <Text style={{ fontSize: 14, textAlign: 'center' }}>
                Device Setup
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.box, styles.shadowProp]}>
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                gap: 10,
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Image
                style={styles.icons}
                source={
                  (uri =
                    'https://cdn-icons-png.flaticon.com/512/3505/3505363.png')
                }
              />
              <Text style={{ fontSize: 14, textAlign: 'center' }}>
                Parameter Setting
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'center',
          }}>
          <View style={[styles.box, styles.shadowProp]}>
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                gap: 10,
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Image
                style={styles.icons}
                source={
                  (uri =
                    'https://cdn-icons-png.flaticon.com/128/5028/5028779.png')
                }
              />
              <Text style={{ fontSize: 14, textAlign: 'center' }}>
                Report Setting
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.box, styles.shadowProp]}>
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                gap: 10,
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Image
                style={styles.icons}
                source={
                  (uri =
                    'https://cdn-icons-png.flaticon.com/128/9361/9361008.png')
                }
              />
              <Text style={{ fontSize: 14, textAlign: 'center' }}>
                Alert Setting
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'center',
          }}>
          <View style={[styles.box, styles.shadowProp]}>
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                gap: 10,
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Image
                style={styles.icons}
                source={
                  (uri =
                    'https://cdn-icons-png.flaticon.com/128/462/462776.png')
                }
              />
              <Text style={{ fontSize: 14, textAlign: 'center' }}>
                Dashboard Management
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.maincontainer, styles.shadowProp]}>
        <View style={[styles.headingContainer, styles.shadowProp]}>
          <Text style={{ fontWeight: 600, fontSize: 18, padding: 10 }}>
            User Configuration
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'center',
          }}>
          <View style={[styles.box, styles.shadowProp]}>
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                gap: 10,
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Image
                style={styles.icons}
                source={
                  (uri =
                    'https://cdn-icons-png.flaticon.com/128/2961/2961348.png')
                }
              />
              <Text style={{ fontSize: 14, textAlign: 'center' }}>
                Add User
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.box, styles.shadowProp]}>
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                gap: 10,
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Image
                style={styles.icons}
                source={
                  (uri =
                    'https://cdn-icons-png.flaticon.com/128/2449/2449158.png')
                }
              />
              <Text style={{ fontSize: 14, textAlign: 'center' }}>
                Station Allocation
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icons: {
    width: 50,
    height: 50,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  box: {
    width: '50%',
    height: 'auto',
    paddingVertical: 10,
    borderRadius: 10,
  },
  headingContainer: {
    width: '100%',
    height: 'auto',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Frame2;
