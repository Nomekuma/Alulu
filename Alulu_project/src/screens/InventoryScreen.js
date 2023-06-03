import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import InventoryList from '../components/InventoryList';

const InventoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory</Text>
      <SearchBar />
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

export default InventoryScreen;
