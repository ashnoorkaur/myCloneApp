import React from 'react';
import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function App() {
  const handlePress = () => {
    Alert.alert('Assignment 1 Completed');
  };

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.topHeader}>
        <MaterialIcons name="arrow-back-ios" style={styles.topBackArrow} />
        <View style={styles.headerCenter}>
          <Text style={styles.smallText}>POSTS_EVERYDAY</Text>
          <Text style={styles.largeText}>Posts</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Press" onPress={handlePress} />
        </View>
      </View>
      <View style={styles.lineDivider} />

      {/* Bottom Navigation Bar */}
      <View style={styles.lineDividerNavbar} />
      <View style={styles.navbar}>
        <FontAwesome name="home" size={27} color="black" />
        <FontAwesome name="search" style={styles.navbarIcon} />
        <MaterialIcons name="video-collection" style={styles.navbarIcon} />
        <FontAwesome name="shopping-bag" style={styles.navbarIcon} />
        <FontAwesome name="user-circle-o" style={styles.navbarIcon} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  // Main container
  container: {
    paddingTop: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    flex: 1,
  },

  // Top Header
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 10,
  },
  topBackArrow: {
    color: 'black',
    fontSize: 24,
  },

  headerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallText: {
    fontSize: 12,
    color: 'gray',
  },

  largeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  buttonWrapper: {
    marginTop: 2,
    marginRight: 0,
  },

  // Divider
  lineDivider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '100%',
    marginTop: 0,
    marginBottom: 10,
  },

  // Bottom Navigation
  lineDividerNavbar: {

  },
  navbar: {

  },
  navbarIcon: {

  },
});
