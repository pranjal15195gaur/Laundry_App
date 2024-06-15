import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Pressable, TextInput, StyleSheet } from "react-native";
import { getFirestore, collection, getDocs, updateDoc, query, where, doc } from 'firebase/firestore';
import { app } from "../firebase";

const UpdateStatus = () => {
  const [laundryData, setLaundryData] = useState([]);
  const [searchDate, setSearchDate] = useState('');

  useEffect(() => {
    const fetchLaundryData = async () => {
      try {
        const firestore = getFirestore(app);
        const laundryDetailsRef = collection(firestore, 'laundryDetails');
        const querySnapshot = await getDocs(laundryDetailsRef);
        const data = [];
        querySnapshot.forEach(doc => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setLaundryData(data);
      } catch (error) {
        console.error('Error fetching laundry data:', error);
      }
    };

    fetchLaundryData();
  }, []);

  const handleSearch = () => {
    if (!searchDate) {
      console.error('Search date is empty');
      return;
    }

    const formattedSearchDate = searchDate.split('/').reverse().join('-'); 
    const filteredData = laundryData.filter(item => {
      if (!item.date) {
        console.error('Item date is empty');
        return false;
      }
      const itemDate = item.date.split('/').reverse().join('-');
      return itemDate === formattedSearchDate;
    });
    setLaundryData(filteredData);
  };

  const handleUpdateStatus = async (id) => {
    try {
      const firestore = getFirestore(app);
      const laundryDocRef = doc(firestore, 'laundryDetails', id);
      await updateDoc(laundryDocRef, {
        status: 'Ready for Pickup'
      });
      alert('Status updated successfully');
      setLaundryData(prevData => prevData.map(item => item.id === id ? { ...item, status: 'Ready for Pickup' } : item));
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Date (YYYY-MM-DD)"
          value={searchDate}
          onChangeText={setSearchDate}
        />
        <Pressable style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </Pressable>
      </View>
      <View style={styles.dataBox}>
        <View style={styles.dataHeading}>
          <Text style={styles.dataTextHeading}>Date</Text>
          <Text style={styles.dataTextHeading}>Name</Text>
          <Text style={styles.dataTextHeading}>Laundry ID</Text>
          <Text style={styles.dataTextHeading}>No of Clothes</Text>
          <Text style={styles.dataTextHeading}>Status</Text>
          <Text style={styles.dataTextHeading}>Update Status</Text>
        </View>
        {laundryData.map((item, index) => (
          <View style={styles.data} key={index}>
            <Text style={styles.datatext}>{item.date}</Text>
            <Text style={styles.datatext}>{item.name}</Text>
            <Text style={styles.datatext}>{item.laundryCode}</Text>
            <Text style={styles.datatext}>{item.clothes}</Text>
            <Text style={styles.datatext}>{item.status}</Text>
            <Pressable style={styles.updateButton} onPress={() => handleUpdateStatus(item.id)}>
              <Text style={styles.updateButtonText}>Mark as Ready</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
    margin: 10,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "lightblue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  searchButtonText: {
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
  updateButton: {
    backgroundColor: "lightgreen",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  updateButtonText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default UpdateStatus;
