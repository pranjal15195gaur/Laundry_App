import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView  , Pressable} from 'react-native';

export default function LoginAs({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.Text}>Login as</Text>
      <View>
      <Pressable style = {styles.button} onPress = {() => navigation.navigate("StudentLogin")}>
        <Text style = {styles.buttonText}>Student</Text>
      </Pressable>
      <Pressable style = {styles.button} onPress = {() => navigation.navigate("AdminLogin")}>
        <Text style = {styles.buttonText}>Admin</Text>
      </Pressable>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  Text: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    borderRadius: 30,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },  

});
