import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Enter_Clothes_Details() {
    const formUrl = 'https://forms.gle/SSp3SfXwRCWw98WW9';
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: formUrl }}
        style={styles.webview}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    webview: {
      flex: 1,
    },
  });