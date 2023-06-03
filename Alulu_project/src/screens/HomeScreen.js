import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const HomeScreen = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropDownPress = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.appName}>Alulu</Text>
          <TouchableOpacity onPress={handleDropDownPress}>
            <Feather name="chevron-down" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Aluminium Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Aluminium Alucobond</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Aluminium Fitting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Accessories</Text>
        </TouchableOpacity>
      </View>

      {showDropdown && (
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.dropdownItem}>
            <Feather name="file-text" size={16} color="black" />
            <Text style={styles.dropdownText}>Aluminium Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Feather name="box" size={16} color="black" />
            <Text style={styles.dropdownText}>Aluminium Alucobond</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Feather name="tool" size={16} color="black" />
            <Text style={styles.dropdownText}>Aluminium Fitting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Feather name="package" size={16} color="black" />
            <Text style={styles.dropdownText}>Accessories</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.dropdownItem}>
            <Feather name="settings" size={16} color="black" />
            <Text style={styles.dropdownText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Feather name="help-circle" size={16} color="black" />
            <Text style={styles.dropdownText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Feather name="lock" size={16} color="black" />
            <Text style={styles.dropdownText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F6FF',
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8, // Adjust margin as needed
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dropdown: {
    position: 'absolute',
    top: 64, // Adjust top position as needed
    right: 0,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownText: {
    fontSize: 16,
    marginLeft: 8,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginVertical: 8,
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop:'50%',
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


