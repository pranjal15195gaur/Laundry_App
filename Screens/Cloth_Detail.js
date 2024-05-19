import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput } from 'react-native';

export default function ClothDetail({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.info}> 🔔 Hi , student name</Text>
      <View style = {styles.datebox}>
        <Text style = {styles.datetext}> Date : </Text>
        <Text style = {styles.datetext}> 21/04/2024 </Text>
      </View>
      <View style = {styles.box}>
        <Text style = {styles.headtext}>Cloth Details </Text>
        <View style = {styles.clothestype}>
          <Text style = {styles.text}>Shirts </Text>
          <Text style = {styles.text}>4</Text>
        </View>
        <View style = {styles.clothestype}>
          <Text style = {styles.text}>Pants </Text>
          <Text style = {styles.text}>3</Text>
        </View>
        <View style = {styles.clothestype}>
          <Text style = {styles.text}>Trousers </Text>
          <Text style = {styles.text}>1</Text>
        </View>
        <View style = {styles.clothestype}>
          <Text style = {styles.text}> Others </Text>
          <Text style = {styles.text}>3</Text>
        </View>
        <View style = {styles.Total}>
          <Text style = {styles.Totaltext}> Total Clothes </Text>
          <Text style = {styles.Totaltext}>11</Text>
        </View>

      </View>

      <View style = {styles.Status}>
          <Text style = {styles.StatusText}> Status : </Text>
          <Text style = {styles.Statusstatus}> Delivered </Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 70,
  },
  info: {
    fontSize: 20,
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    textAlign: 'right',
  },
  input: {
    marginTop: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    alignSelf: 'center',
  },
  box: {
    margin: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: 350,
    alignSelf: 'center',
  },
  headtext: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  clothestype: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  Total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  Totaltext: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  Status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 30,
  },
  StatusText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  Statusstatus: {
    fontSize: 20,
    color: 'blue',
  },
    datebox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 30,
    },
    datetext: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    


});
