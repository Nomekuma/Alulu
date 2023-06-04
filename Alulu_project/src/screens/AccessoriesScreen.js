import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getAccessoriesItems } from '../utils/database'; 

const AccessoriesScreen = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch the items from the database
    const fetchData = async () => {
      const data = await getAccessoriesItems(); 
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Accessories Screen</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.colour}</Text>
            <Text>{item.quantity}</Text>
           
          </View>
        )}
      />

      <TouchableOpacity>
        <Text>+</Text> 
      </TouchableOpacity>
    </View>
  );
};

export default AccessoriesScreen;
