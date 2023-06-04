import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  const handleSectionPress = (sectionName) => {
    navigation.navigate(sectionName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Alulu</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sidebar')}>
          <Feather name="sidebar" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={handleSearchChange}
          />
        </View>

        <View style={styles.boxContainer}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => handleSectionPress('AluminiumProfile')}
          >
            <Text style={styles.boxText}>Aluminium Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => handleSectionPress('AluminiumAlucobond')}
          >
            <Text style={styles.boxText}>Aluminium Alucobond</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => handleSectionPress('AluminiumFitting')}
          >
            <Text style={styles.boxText}>Aluminium Fitting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => handleSectionPress('Accessories')}
          >
            <Text style={styles.boxText}>Accessories</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F6FF',
    padding: 16,
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    height: 40,
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  box: {
    width: '48%',
    height: 150,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;
