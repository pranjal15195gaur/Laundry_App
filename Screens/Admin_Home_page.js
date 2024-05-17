import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView , Pressable} from 'react-native';

export default function AdminHome({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.info}> Hi 👋 , Admin</Text>
      <View style = {styles.option}>
        <StatusBar style="auto" />
        <Pressable style = {styles.button} onPress = {() => navigation.navigate("UpdateStatus")}>
          <Text style = {styles.buttonText}>Update Status</Text>
        </Pressable>
        <Pressable style = {styles.button} onPress = {() => navigation.navigate("Enter_Clothes_Details")}>
          <Text style = {styles.buttonText}>Enter the Cloth Details</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 70,
  },
  info: {
    fontSize: 20,
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 30,
    textAlign: 'right',
    fontSize: 25,
    fontWeight: 'bold',
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 20,
    borderRadius: 20,
    width: 275,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
  },
});
