import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import InventoryItem from './InventoryItem';

const inventoryData = [
  {
    id: 1,
    name: 'Item 1',
    description: 'Description 1',
    quantity: 5,
    image: require('../assets/images/aluminiumFittings/item1.png'),
  },
  // Add more inventory items as needed
];

const InventoryList = () => {
  const renderItem = ({ item }) => (
    <InventoryItem
      name={item.name}
      description={item.description}
      quantity={item.quantity}
      image={item.image}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={inventoryData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },
});

export default InventoryList;
