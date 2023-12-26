import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, CheckBox } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  const [text, setText] = useState('...');
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Math.random().toString(36).substring(7));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
  <View style={styles.checkboxContainer}>
    <CheckBox
      value={isSelected1}
      onValueChange={setSelection1}
    />
    <Text style={styles.checkboxLabel}>Deseja adicionar letras à senha?</Text>
  </View>
  <View style={styles.checkboxContainer}>
    <CheckBox
      value={isSelected2}
      onValueChange={setSelection2}
    />
    <Text style={styles.checkboxLabel}>Deseja adicionar números à senha?</Text>
  </View>
  <View style={styles.checkboxContainer}>
    <CheckBox
      value={isSelected3}
      onValueChange={setSelection3}
    />
    <Text style={styles.checkboxLabel}>Deseja adicionar caracteres especiais à senha?</Text>
  </View>
      <Slider
      style={{width: 200, height: 40}}
      minimumValue={0}
      maximumValue={40}
      onValueChange={value => setSliderValue(Math.round(value))}
      value={sliderValue}
    />
    <Text>Tamanho: {sliderValue}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      alignItems: 'center',
    },
    checkboxLabel: {
      margin: 8,
    },
  });
