import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function UpdateStatus(navigation) {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with current date
  const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility
  const [data, setData] = useState([
    {
      date: "2024-04-25",
      name: "Pranjal Gaur",
      laundryId: "1234",
      numberOfClothes: 5,
    },
    {
      date: "2024-04-25",
      name: "Alice Smith",
      laundryId: "5678",
      numberOfClothes: 3,
    },
    {
      date: "2024-04-25",
      name: "Bob Johnson",
      laundryId: "9012",
      numberOfClothes: 7,
    },
    {
      date: "2024-04-25",
      name: "Emily Davis",
      laundryId: "3456",
      numberOfClothes: 2,
    },
    {
      date: "2024-04-25",
      name: "John Doe",
      laundryId: "7890",
      numberOfClothes: 4,
    },
    {
      date: "2024-04-25",
      name: "Sarah Adams",
      laundryId: "2345",
      numberOfClothes: 6,
    },
    {
      date: "2024-04-25",
      name: "Michael Brown",
      laundryId: "6789",
      numberOfClothes: 1,
    },
    {
      date: "2024-04-25",
      name: "Emma Wilson",
      laundryId: "0123",
      numberOfClothes: 8,
    },
    {
      date: "2024-04-25",
      name: "David Martinez",
      laundryId: "4567",
      numberOfClothes: 3,
    },
    {
      date: "2024-04-26",
      name: "Jessica Garcia",
      laundryId: "8901",
      numberOfClothes: 5,
    },
    {
      date: "2024-04-26",
      name: "Ryan Thompson",
      laundryId: "2345",
      numberOfClothes: 2,
    },
    {
      date: "2024-04-26",
      name: "Lauren Hernandez",
      laundryId: "6789",
      numberOfClothes: 6,
    },
    {
      date: "2024-04-26",
      name: "Christopher Smith",
      laundryId: "0123",
      numberOfClothes: 4,
    },
    {
      date: "2024-04-26",
      name: "Megan Davis",
      laundryId: "4567",
      numberOfClothes: 7,
    },
    {
      date: "2024-04-26",
      name: "Justin Brown",
      laundryId: "8901",
      numberOfClothes: 3,
    },
    {
      date: "2024-04-26",
      name: "Amanda Miller",
      laundryId: "2345",
      numberOfClothes: 5,
    },
    {
      date: "2024-04-26",
      name: "Kevin Wilson",
      laundryId: "6789",
      numberOfClothes: 1,
    },
    {
      date: "2024-04-21",
      name: "Nicole Taylor",
      laundryId: "0123",
      numberOfClothes: 6,
    },
    {
      date: "2024-04-21",
      name: "Brandon Garcia",
      laundryId: "4567",
      numberOfClothes: 4,
    },
    {
      date: "2024-04-21",
      name: "Samantha Rodriguez",
      laundryId: "8901",
      numberOfClothes: 2,
    },
    {
      date: "2024-04-21",
      name: "Joshua Martinez",
      laundryId: "2345",
      numberOfClothes: 7,
    },
    {
      date: "2024-04-21",
      name: "Ashley Brown",
      laundryId: "6789",
      numberOfClothes: 3,
    },
    {
      date: "2024-04-21",
      name: "Daniel Hernandez",
      laundryId: "0123",
      numberOfClothes: 5,
    },
    {
      date: "2024-04-21",
      name: "Brittany Smith",
      laundryId: "4567",
      numberOfClothes: 8,
    },
    {
      date: "2024-04-21",
      name: "Jose Adams",
      laundryId: "8901",
      numberOfClothes: 1,
    },
    {
      date: "2024-04-21",
      name: "Melissa Wilson",
      laundryId: "2345",
      numberOfClothes: 6,
    },
    {
      date: "2024-04-21",
      name: "Andrew Davis",
      laundryId: "6789",
      numberOfClothes: 4,
    },
    {
      date: "2024-04-21",
      name: "Stephanie Taylor",
      laundryId: "0123",
      numberOfClothes: 2,
    },
    {
      date: "2024-04-21",
      name: "Timothy Miller",
      laundryId: "4567",
      numberOfClothes: 5,
    },
    {
      date: "2024-04-22",
      name: "Olivia Brown",
      laundryId: "8901",
      numberOfClothes: 3,
    },
    {
      date: "2024-04-22",
      name: "Jacob Garcia",
      laundryId: "2345",
      numberOfClothes: 7,
    },
    {
      date: "2024-04-22",
      name: "Hannah Rodriguez",
      laundryId: "6789",
      numberOfClothes: 1,
    },
    {
      date: "2024-04-22",
      name: "Alexander Martinez",
      laundryId: "0123",
      numberOfClothes: 4,
    },
    {
      date: "2024-04-22",
      name: "Madison Hernandez",
      laundryId: "4567",
      numberOfClothes: 6,
    },
    {
      date: "2024-04-22",
      name: "William Smith",
      laundryId: "8901",
      numberOfClothes: 8,
    },
    {
      date: "2024-04-22",
      name: "Jessica Adams",
      laundryId: "2345",
      numberOfClothes: 3,
    },
    {
      date: "2024-04-22",
      name: "David Wilson",
      laundryId: "6789",
      numberOfClothes: 5,
    },
    {
      date: "2024-04-22",
      name: "Ashley Davis",
      laundryId: "0123",
      numberOfClothes: 7,
    },
    {
      date: "2024-04-22",
      name: "Daniel Brown",
      laundryId: "4567",
      numberOfClothes: 2,
    },
  ]);

  const filteredData = data.filter(
    (item) => new Date(item.date).toDateString() === selectedDate.toDateString() // Compare dates only without time
  );

  const handleDateChange = (event, date) => {
    if (date) {
      setSelectedDate(date);
      handleCalendarDismiss(); // Dismiss the calendar when the date is changed
    }
  };
  

  const handleUpdate = () => {
    setShowCalendar(!showCalendar); // Toggle the calendar visibility state
  };

  const handleCalendarDismiss = () => {
    setShowCalendar(false); // Dismiss the calendar when the user selects a date
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dateBox}>
        <Pressable onPress={handleUpdate} style = {styles.buttonSelect}>
          <Text style={styles.buttonText}>Select the date </Text>
        </Pressable>
        <Pressable style = {styles.button} onPress = {() => alert('Status Updated to Delivered')}>
          <Text style = {styles.buttonText}> Update the Status </Text>
        </Pressable>
        {showCalendar && (
          <DateTimePicker
            style={{ width: 200 }}
            value={selectedDate}
            mode="date"
            display="default"
            minimumDate={new Date("2000-01-01")}
            maximumDate={new Date("2100-12-31")}
            onChange={handleDateChange}
            onTouchCancel={handleCalendarDismiss} // Dismiss calendar on touch outside
          />
        )}
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.dataBox}>
          <View style={styles.dataHeading}>
            <Text style={styles.dataTextHeading}>Date</Text>
            <Text style={styles.dataTextHeading}>Name</Text>
            <Text style={styles.dataTextHeading}>Laundry ID</Text>
            <Text style={styles.dataTextHeading}>No of Clothes</Text>
          </View>
          {filteredData.map((item, index) => (
            <View style={styles.data} key={index}>
              <Text style={styles.datatext}>{item.date}</Text>
              <Text style={styles.datatext}>{item.name}</Text>
              <Text style={styles.datatext}>{item.laundryId}</Text>
              <Text style={styles.datatext}>{item.numberOfClothes}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
    margin: 10,
  },
  dateBox: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "lightblue",
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
  },
  dataBox: {
    borderWidth: 1,
    borderRadius: 10,
  },
  dataHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: "lightblue",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  dataTextHeading: {
    flex: 1,
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  datatext: {
    flex: 1,
    fontSize: 14,
    color: "black",
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
  },
  buttonSelect: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
  },
});
