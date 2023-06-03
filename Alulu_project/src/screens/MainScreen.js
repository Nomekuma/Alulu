import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InventoryList from '../components/InventoryList';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alulu App</Text>
      <InventoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default MainScreen;
