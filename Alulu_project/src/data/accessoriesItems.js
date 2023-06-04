import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getAllRecords } from '../utils/database';

const Accessories = () => {
  const [accessoriesList, setAccessoriesList] = useState([]);

  useEffect(() => {
    fetchAccessoriesList();
  }, []);

  const fetchAccessoriesList = async () => {
    try {
      const records = await getAllRecords('accessories');
      setAccessoriesList(records);
    } catch (error) {
      console.error('Error fetching Accessories:', error);
    }
  };

  return (
    <View>
      <Text>Accessories</Text>
      <FlatList
        data={accessoriesList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.quantity}</Text>
            <Text>{item.image}</Text>
            <Text>{item.colour}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Accessories;
