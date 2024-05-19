import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , TextInput , SafeAreaView,ScrollView ,Pressable} from 'react-native';
import { app } from '../firebase';
import {getFirestore, collection, addDoc} from 'firebase/firestore';

const firestore = getFirestore(app);

export default function EnterDetail() {
  const [LaundryCode, setLaundryCode] = useState('');
  const [Date, setDate] = useState('');
  const [errors, setErrors] = useState({});
  const [Clothes, setClothes] = useState('');
  const [Hostel, setHostel] = useState('');
  const [Name, setName] = useState('');
  const [Rollnumber, setRollnumber] = useState('');
  const [Email, setEmail] = useState('');

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
      // Add details to Firestore
      addDoc(collection(firestore, 'laundryDetails'), {
        laundryCode: LaundryCode,
        date: Date,
        clothes: Clothes,
        hostel: Hostel,
        name: Name,
        rollnumber: Rollnumber,
        email: Email,
      })
      .then(() => {
        alert('Details have been uploaded');
        // Clear the input fields after successful submission
        setLaundryCode('');
        setDate('');
        setClothes('');
        setHostel('');
        setName('');
        setRollnumber('');
        setEmail('');
      })
      .catch(error => {
        console.error('Error uploading details: ', error);
        alert('Failed to upload details. Please try again.');
      });
    }
  };

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
          placeholder = 'Enter the Date (DD/MM/YYYY)'
          value={Date}
          onChangeText={setDate}
        />
        {errors.Date ? (
          <Text style={styles.errorText}>{errors.Date}</Text>
        ) : null}
        
        <View style = {styles.box}>
          <View style = {styles.clothestype}>
            <Text style = {styles.clothestext}>Number of clothes</Text>
            <TextInput 
              style = {styles.clothesinput}  
              placeholder = '0'
              value={Clothes}
              onChangeText={setClothes}
              keyboardType='numeric'
            />
          </View>
          <View style = {styles.clothestype}>
            <Text style = {styles.clothestext}>Hostel</Text>
            <TextInput 
              style = {styles.clothesinput}
              value={Hostel} 
              onChangeText={setHostel}
            />
          </View>
          <View style = {styles.clothestype}>
            <Text style = {styles.clothestext}>Name</Text>
            <TextInput 
              style = {styles.clothesinput}
              value={Name}
              onChangeText={setName}
            />
          </View>
          <View style = {styles.clothestype}>
            <Text style = {styles.clothestext}>Roll Number</Text>
            <TextInput 
              style = {styles.clothesinput} 
              value={Rollnumber}
              onChangeText={setRollnumber}
              keyboardType='numeric'
            />
          </View>
          <View style = {styles.clothestype}>
            <Text style = {styles.clothestext}>Email</Text>
            <TextInput 
              style = {styles.clothesinput}
              value={Email}  
              onChangeText={setEmail}
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
