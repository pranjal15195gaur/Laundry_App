import { Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "./Screens/Get_Started";
import LoginAs from "./Screens/Login_as";
import AdminLogin from "./Screens/Admin_Login_Page";
import StudentLogin from "./Screens/Student_Login_Page";
import AdminHome from "./Screens/Admin_Home_page";
import StudentHome from "./Screens/Student_Home_Page";
import UpdateStatus from "./Screens/Update_Status";
import EnterDetail from "./Screens/Enter_Details";
import ClothDetails from "./Screens/Cloth_Detail";
import Complaint_portal from "./Screens/Complaint_portal";
import Feedback_portal from "./Screens/Feedback_portal";
import Submit_laundry from "./Screens/Submit_laundry";
import Enter_Clothes_Details from "./Screens/Enter_Clothes_Details";
import LaundryDetails from "./Screens/LaundryDetails";

import { AppRegistry } from "react-native";


const Stack = createNativeStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="GetStarted" // Set initialRouteName to "GetStarted"
      screenOptions={{
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="LoginAs" component={LoginAs} />
      <Stack.Screen name="AdminLogin" component={AdminLogin} />
      <Stack.Screen name="StudentLogin" component={StudentLogin} />
      <Stack.Screen name="AdminHome" component={AdminHome} />
      <Stack.Screen name="StudentHome" component={StudentHome} />
      <Stack.Screen name="UpdateStatus" component={UpdateStatus} />
      <Stack.Screen name="EnterDetail" component={EnterDetail} />
      <Stack.Screen name="ClothDetails" component={ClothDetails} />
      <Stack.Screen name="Complaint_portal" component={Complaint_portal} />
      <Stack.Screen name="Feedback_portal" component={Feedback_portal} />
      <Stack.Screen name="Submit_laundry" component={Submit_laundry} />
      <Stack.Screen name="Enter_Clothes_Details" component={Enter_Clothes_Details} />
      <Stack.Screen name="LaundryDetails" component={LaundryDetails} />
      
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      {/* Render the AboutStack component */}
      <AboutStack />
    </NavigationContainer>
  );
}
