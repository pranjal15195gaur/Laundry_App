import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView , Pressable} from 'react-native';

export default function StudentHome({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.info}> 🔔 Hi , Student's name</Text>
      <View style = {styles.option}>
        <StatusBar style="auto" />
        <Pressable style = {styles.button} onPress = {() => navigation.navigate("ClothDetails")}>
          <Text style = {styles.buttonText}>Get Laundry Status</Text>
        </Pressable>
        <Pressable style = {styles.button} onPress = {() => navigation.navigate("Complaint_portal")}>
          <Text style = {styles.buttonText}>Complaint Portal</Text>
        </Pressable>
        <Pressable style = {styles.button} onPress = {() => navigation.navigate("Feedback_portal")}>
          <Text style = {styles.buttonText}>Feedback Portal</Text>
        </Pressable>
        <Pressable style = {styles.button} onPress = {() => navigation.navigate("Submit_laundry")}>
          <Text style = {styles.buttonText}>Submit Laundry</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    width: 275,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
  },
});
