import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image } from 'react-native';

export default function GetStarted({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/icon.png')} style={styles.image} />
      <View>
        <Text style={styles.text}>Welcome to IIT GN</Text>
        <Text style={styles.text}>Laundry App</Text>
      </View>
      <StatusBar style="auto" />
      <Pressable style={styles.button} onPress={() => navigation.navigate("LoginAs")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    borderRadius: 25,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});
