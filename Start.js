import React from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import styles from './assets/styles';

const StartPage = ({ navigation }) => {
  const navigateToFonts = () => {
    navigation.navigate('Fonts'); 
  };

  return (
    <View style={styles.container2}>
      <View style={{borderWidth:1, borderColor:"#00AFB9", width:'100%',padding:20, marginBottom:20,marginHorizontal:20, borderRadius:10}}>
        <Text style={styles.header}>Feature added: Clipboard</Text>
        <Text style={styles.header1}>Enables users to copy the phrase with its associated font style, size, bold, and italic attributes.</Text>
      </View>
      <Button title="Font Browser" color="#00AFB9" onPress={navigateToFonts} />
    </View>
  );
};



export default StartPage;
