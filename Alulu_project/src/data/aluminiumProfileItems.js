import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('alulu.db');

const AluminiumProfileScreen = () => {
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    fetchProfileList();
  }, []);

  const fetchProfileList = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM aluminium_profile',
        [],
        (_, { rows }) => {
          setProfileList(rows._array);
        },
        (error) => {
          console.error('Error fetching Aluminium Profile:', error);
        }
      );
    });
  };

  return (
    <View>
      <Text>Aluminium Profile Screen</Text>
      <FlatList
        data={profileList}
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

export default AluminiumProfileScreen;
