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

export default function Frame() {
  const [text, onChangeText] = React.useState('Select station');
  const [number, onChangeNumber] = React.useState('Select parameter');
  return (
    <SafeAreaView>
      <View style={[styles.frame1Container, styles.shadowProp]}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Select parameter"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={{
            width: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            margin: 5,
            padding: 10,
            borderWidth: 0.5,
          }}>
         <Text> Locate on Map</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.frame2Container, styles.shadowProp]}>
        <TouchableOpacity style={[styles.box2, styles.shadowProp]}>
          <View style={{ padding: 15 }}>
            <Text style={{ fontWeight: '500', fontSize: 20 }}>1</Text>
          </View>
          <View
            style={{
              backgroundColor: '#02F900',
              width: '100%',
              alignItems: 'center',
              resizeMode: 'contain',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <TouchableOpacity
              style={{ fontWeight: '500', color: 'white', padding: 4 }}>
              <Text>LIVE</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box2, styles.shadowProp]}>
          <View style={{ padding: 15 }}>
            <Text style={{ fontWeight: '500', fontSize: 20 }}>1</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FF9300',
              width: '100%',
              alignItems: 'center',
              resizeMode: 'contain',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <TouchableOpacity
              style={{ fontWeight: '500', color: 'white', padding: 4 }}>
              <Text>DELAYED</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box2, styles.shadowProp]}>
          <View style={{ padding: 15 }}>
            <Text style={{ fontWeight: '500', fontSize: 20 }}>1</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FF2600',
              width: '100%',
              alignItems: 'center',
              resizeMode: 'contain',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <TouchableOpacity
              style={{ fontWeight: '500', color: 'white', padding: 4 }}>
              <Text>OFFLINE</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box2, styles.shadowProp]}>
          <View style={{ padding: 15 }}>
            <Text style={{ fontWeight: '500', fontSize: 20 }}>1</Text>
          </View>
          <View
            style={{
              backgroundColor: '#B8678F',
              width: '100%',
              alignItems: 'center',
              resizeMode: 'contain',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <TouchableOpacity
              style={{ fontWeight: '500', color: 'white', padding: 4 }}>
              <Text>MAINTENANCE</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box2, styles.shadowProp]}>
          <View style={{ padding: 15 }}>
            <Text style={{ fontWeight: '500', fontSize: 20 }}>1</Text>
          </View>
          <View
            style={{
              backgroundColor: '#008FFB',
              width: '100%',
              alignItems: 'center',
              resizeMode: 'contain',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <TouchableOpacity
              style={{
                fontWeight: '500',
                color: 'white',
                padding: 4,
                fontFamily: '',
              }}>
              <Text>TOTAL</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.frame3Container, styles.shadowProp]}>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer1}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
              AQM21 ADNEC
            </Text>
            <Text style={{ color: 'white' }}>Location is not set.</Text>
            <Text style={{ color: 'white' }}>28/12/2022, 9:43:00 </Text>
            <Text
              style={{
                color: 'black',
                backgroundColor: 'white',
                width: '60%',
                textAlign: 'center',
                borderRadius: 5,
                fontWeight: '500',
              }}>
              OFFLINE
            </Text>
          </View>
          <View style={styles.innerContainer2}>
            <TouchableOpacity
              style={{
                textDecorationLine: 'underline',
                textDecorationStyle: 'solid',
                textDecorationColor: 'red',
                fontWeight: '500',
                margin: 5,
                fontSize: 20,
              }}>
                <Text>WIDGETS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                fontWeight: '500',
                color: 'gray',
                margin: 5,
                fontSize: 20,
              }}>
                <Text>TABULAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[styles.healthContainer, styles.shadowProp]}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 5,
          }}>
          HEALTH
        </Text>
        <Image
          style={{ height: 30, width: 40, tintColor: 'green', paddingTop: 5 }}
          source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c16a1332f9fb629034dbefdf1766323e',
          }}
        />
      </View>
      <View style={[styles.frame4Container, styles.shadowProp]}>
        <View style={styles.box}>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              alignItems: 'center',
              padding: 5,
            }}>
            <View style={{ flexDirection: 'column' }}>
              <Image
                style={{ height: 30, width: 30, backgroundColor: 'white' }}
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/172/172922.png',
                }}
              />
              <Text style={{ alignItems: 'baseline' }}>ug/m3</Text>
            </View>
            <View style={{ flexDirection: 'column', margin: 10 }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 24,
                  alignContent: 'flex-end',
                  justifyContent: 'center',
                }}>
                0.00
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#D6D6D6',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              padding: 1,
            }}>
            <Text
              style={{
                alignItems: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              PM 1
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              alignItems: 'center',
              padding: 5,
            }}>
            <View style={{ flexDirection: 'column' }}>
              <Image
                style={{ height: 30, width: 30, backgroundColor: 'white' }}
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/172/172922.png',
                }}
              />
              <Text style={{ alignItems: 'baseline' }}>ug/m3</Text>
            </View>
            <View style={{ flexDirection: 'column', margin: 10 }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 24,
                  alignContent: 'flex-end',
                  justifyContent: 'center',
                }}>
                0.00
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#D6D6D6',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              padding: 1,
            }}>
            <Text
              style={{
                alignItems: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              PM 1
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              alignItems: 'center',
              padding: 5,
            }}>
            <View style={{ flexDirection: 'column' }}>
              <Image
                style={{ height: 30, width: 30, backgroundColor: 'white' }}
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/172/172922.png',
                }}
              />
              <Text style={{ alignItems: 'baseline' }}>ug/m3</Text>
            </View>
            <View style={{ flexDirection: 'column', margin: 10 }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 24,
                  alignContent: 'flex-end',
                  justifyContent: 'center',
                }}>
                0.00
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#D6D6D6',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              padding: 1,
            }}>
            <Text
              style={{
                alignItems: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              PM 1
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              alignItems: 'center',
              padding: 5,
            }}>
            <View style={{ flexDirection: 'column' }}>
              <Image
                style={{ height: 30, width: 30, backgroundColor: 'white' }}
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/172/172922.png',
                }}
              />
              <Text style={{ alignItems: 'baseline' }}>ug/m3</Text>
            </View>
            <View style={{ flexDirection: 'column', margin: 10 }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 24,
                  alignContent: 'flex-end',
                  justifyContent: 'center',
                }}>
                0.00
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#D6D6D6',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              padding: 1,
            }}>
            <Text
              style={{
                alignItems: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              PM 1
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              alignItems: 'center',
              padding: 5,
            }}>
            <View style={{ flexDirection: 'column' }}>
              <Image
                style={{ height: 30, width: 30, backgroundColor: 'white' }}
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/172/172922.png',
                }}
              />
              <Text style={{ alignItems: 'baseline' }}>ug/m3</Text>
            </View>
            <View style={{ flexDirection: 'column', margin: 10 }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 24,
                  alignContent: 'flex-end',
                  justifyContent: 'center',
                }}>
                0.00
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#D6D6D6',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              padding: 1,
            }}>
            <Text
              style={{
                alignItems: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              PM 1
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              alignItems: 'center',
              padding: 5,
            }}>
            <View style={{ flexDirection: 'column' }}>
              <Image
                style={{ height: 30, width: 30, backgroundColor: 'white' }}
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/172/172922.png',
                }}
              />
              <Text style={{ alignItems: 'baseline' }}>ug/m3</Text>
            </View>
            <View style={{ flexDirection: 'column', margin: 10 }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 24,
                  alignContent: 'flex-end',
                  justifyContent: 'center',
                }}>
                0.00
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#D6D6D6',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              padding: 1,
            }}>
            <Text
              style={{
                alignItems: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              PM 1
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              alignItems: 'center',
              padding: 5,
            }}>
            <View style={{ flexDirection: 'column' }}>
              <Image
                style={{ height: 30, width: 30, backgroundColor: 'white' }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/172/172922.png',
                }}
              />
              <Text style={{ alignItems: 'baseline' }}>ug/m3</Text>
            </View>
            <View style={{ flexDirection: 'column', margin: 10 }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 24,
                  alignContent: 'flex-end',
                  justifyContent: 'center',
                }}>
                0.00
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#D6D6D6',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              padding: 1,
            }}>
            <Text
              style={{
                alignItems: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              PM 1
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              alignItems: 'center',
              padding: 5,
            }}>
            <View style={{ flexDirection: 'column' }}>
              <Image
                style={{ height: 30, width: 30, backgroundColor: 'white' }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/172/172922.png',
                }}
              />
              <Text style={{ alignItems: 'baseline' }}>ug/m3</Text>
            </View>
            <View style={{ flexDirection: 'column', margin: 10 }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 24,
                  alignContent: 'flex-end',
                  justifyContent: 'center',
                }}>
                0.00
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#D6D6D6',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              padding: 1,
            }}>
            <Text
              style={{
                alignItems: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              PM 1
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              alignItems: 'center',
              padding: 5,
            }}>
            <View style={{ flexDirection: 'column' }}>
              <Image
                style={{ height: 30, width: 30, backgroundColor: 'white' }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/172/172922.png',
                }}
              />
              <Text style={{ alignItems: 'baseline' }}>ug/m3</Text>
            </View>
            <View style={{ flexDirection: 'column', margin: 10 }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 24,
                  alignContent: 'flex-end',
                  justifyContent: 'center',
                }}>
                0.00
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#D6D6D6',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              padding: 1,
            }}>
            <Text
              style={{
                alignItems: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              PM 1
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              alignItems: 'center',
              padding: 5,
            }}>
            <View style={{ flexDirection: 'column' }}>
              <Image
                style={{ height: 30, width: 30, backgroundColor: 'white' }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/172/172922.png',
                }}
              />
              <Text style={{ alignItems: 'baseline' }}>ug/m3</Text>
            </View>
            <View style={{ flexDirection: 'column', margin: 10 }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 24,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                0.00
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#D6D6D6',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              padding: 1,
            }}>
            <Text
              style={{
                alignItems: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              PM 1
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 'auto',
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  frame1Container: {
    width: 'auto',
    height: 'auto',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  frame2Container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 'auto',
    height: 'auto',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  box2: {
    flexDirection: 'column',
    width: '48%',
    height: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  frame3Container: {
    flexDirection: 'row',
    width: 'auto',
    height: 'auto',
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },

  outerContainer: {
    width: '100%',
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    resizeMode: 'cover',
    alignContent: 'flex-start',
  },
  innerContainer1: {
    justifyContent: 'space-between',
    gap: 5,
    backgroundColor: '#ED1A3B',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    width: '50%',
    height: 'auto',
    alignItems: 'flex-start',
    padding: 10,
  },
  innerContainer2: {
    justifyContent: 'space-between',
    gap: 20,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
  },
  healthContainer: {
    flex: 1,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },

  frame4Container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 'auto',
    height: 'auto',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  box: {
    flexDirection: 'column',
    width: '45%',
    height: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  barchartcontainer: {
    flexDirection: 'column',
    width: 'auto',
    height: 'auto',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
