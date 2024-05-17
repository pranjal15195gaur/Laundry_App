import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , TextInput , SafeAreaView,ScrollView ,Pressable} from 'react-native';
import { useEffect } from 'react';

export default function EnterDetail() {
  const [LaundryCode, setLaundryCode] = useState('');
  const [Date, setDate] = useState('');
  const [errors, setErrors] = useState({});
  const [Shirts, setShirts] = useState('');
  const [Lower, setLower] = useState('');
  const [Pants, setPants] = useState('');
  const [Trousers, setTrousers] = useState('');
  const [Others, setOthers] = useState('');

  const validate = () => {
    let errors = {};
    if (!LaundryCode) {
      errors.LaundryCode = 'Laundry Code is required';
    }
    if (!Date) {
      errors.Date = 'Date is required';
    }
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert('Details have been uploaded');
      setLaundryCode('');
      setDate('');
      setShirts('');
      setLower('');
      setPants('');
      setTrousers('');
      setOthers('');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style ={styles.inputtext}>Enter the Laundry Details</Text>
        <TextInput 
          style = {styles.input} 
          placeholder = 'Enter the Student Laundry number' 
          value={LaundryCode}
          onChangeText={setLaundryCode}
        />
        {errors.LaundryCode ? (
          <Text style={styles.errorText}>{errors.LaundryCode}</Text>
        ) : null}
        <TextInput 
          style = {styles.input} 
          placeholder = 'Enter the Date'
          value={Date}
          onChangeText={setDate}
        />
        {errors.Date ? (
          <Text style={styles.errorText}>{errors.Date}</Text>
        ) : null}
        
        <View style = {styles.box}>
          <Text style = {styles.headtext}>Enter the number of clothes </Text>
          <View style = {styles.clothestype}>
            <Text style = {styles.clothestext}>Shirts</Text>
            <TextInput 
              style = {styles.clothesinput}  
              placeholder = '0'
              value={Shirts}
              onChangeText={setShirts}
            />
          </View>
          <View style = {styles.clothestype}>
            <Text style = {styles.clothestext}>Lower</Text>
            <TextInput 
              style = {styles.clothesinput} 
              placeholder = '0' 
              value={Lower} 
              onChangeText={setLower}
            />
          </View>
          <View style = {styles.clothestype}>
            <Text style = {styles.clothestext}>Pants</Text>
            <TextInput 
              style = {styles.clothesinput} 
              placeholder = '0' 
              value={Pants}
              onChangeText={setPants}
            />
          </View>
          <View style = {styles.clothestype}>
            <Text style = {styles.clothestext}>Trousers</Text>
            <TextInput 
              style = {styles.clothesinput} 
              placeholder = '0' 
              value={Trousers}
              onChangeText={setTrousers}
            />
          </View>
          <View style = {styles.clothestype}>
            <Text style = {styles.clothestext}>Others</Text>
            <TextInput 
              style = {styles.clothesinput} 
              placeholder = '0' 
              value={Others}  
              onChangeText={setOthers}
            />
          </View>
        </View>

        <Pressable style = {styles.button} onPress ={handleSubmit}>
          <Text style = {styles.buttonText}> Submit </Text>
        </Pressable>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 80,
  },
  inputtext: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  
  },

  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  box: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: 300,
    margin: 12,
  },
  headtext: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  clothestype: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  clothestext: {
    fontSize: 15,
    color: 'black',
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center',
  },
  clothesinput: {
    height: 40,
    width: 100,
    margin: 2,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 20,
    borderRadius: 20,
    fontSize: 30,
    width: 290,
    alignItems: 'center',
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 0,
    textAlign: 'left',
    marginLeft: 20,
  },
});
