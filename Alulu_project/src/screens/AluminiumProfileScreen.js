import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getAluminiumProfileItems } from '../utils/database'; 

const AluminiumProfileScreen = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch the items from the database
    const fetchData = async () => {
      const data = await getAluminiumProfileItems(); 
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Aluminium Profile Screen</Text>
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

export default AluminiumProfileScreen;
