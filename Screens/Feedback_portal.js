import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Feedback_portal() {
    const formUrl = 'https://forms.gle/nY6jDavErdPoFF8W7';
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: formUrl }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    webview: {
      flex: 1,
    },
  });