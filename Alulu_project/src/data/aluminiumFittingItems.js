import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('alulu.db');

const AluminiumFittingScreen = () => {
  const [fittingList, setFittingList] = useState([]);

  useEffect(() => {
    fetchFittingList();
  }, []);

  const fetchFittingList = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM aluminium_fitting',
        [],
        (_, { rows }) => {
          setFittingList(rows._array);
        },
        (error) => {
          console.error('Error fetching Aluminium Fitting:', error);
        }
      );
    });
  };

  return (
    <View>
      <Text>Aluminium Fitting Screen</Text>
      <FlatList
        data={fittingList}
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

export default AluminiumFittingScreen;
