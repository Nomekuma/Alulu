import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const handleSidebarPress = () => {
    setShowSidebar(!showSidebar);
  };

  const handleHomePress = () => {
    navigation.navigate('HomeScreen');
  };

  const handleAluminiumProfile= () => {
     navigation.navigate('AluminiumProfileScreen')
  }

  const sidebarWidth = Dimensions.get('window').width * 0.75; // Adjust the sidebar width as needed

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardOpen(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpen(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Alulu</Text>
        <TouchableOpacity onPress={handleSidebarPress}>
          <Feather name="sidebar" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="black" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search..." />
        </View>

        <View style={styles.boxContainer}>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.boxText} onPress={handleAluminiumProfile}>Aluminium Profile</Text>
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
      </View>

      {showSidebar && (
        <View style={[styles.sidebar, { width: sidebarWidth }]}>
          <TouchableOpacity style={styles.sidebarItem}>
            <Feather name="file-text" size={16} color="black" />
            <Text style={styles.sidebarText}>Aluminium Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <Feather name="box" size={16} color="black" />
            <Text style={styles.sidebarText}>Aluminium Alucobond</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <Feather name="tool" size={16} color="black" />
            <Text style={styles.sidebarText}>Aluminium Fitting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <Feather name="package" size={16} color="black" />
            <Text style={styles.sidebarText}>Accessories</Text>
          </TouchableOpacity>
          <View style={styles.sidebarLine} />
          <TouchableOpacity style={styles.sidebarItem}>
            <Feather name="settings" size={16} color="black" />
            <Text style={styles.sidebarText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <Feather name="help-circle" size={16} color="black" />
            <Text style={styles.sidebarText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <Feather name="lock" size={16} color="black" />
            <Text style={styles.sidebarText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      )}

      {!keyboardOpen && (
        <View style={styles.homebar}>
          <TouchableOpacity onPress={handleHomePress}>
            <Feather name="home" size={24} color="black" />
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
    marginTop:'35%'
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
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'white',
    padding: 16,
    zIndex: 1,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop:30
  },
  sidebarText: {
    fontSize: 16,
    marginLeft: 8,

  },
  sidebarLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginVertical: 8,
  },
  homebar: {
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 1,
  },
});

export default HomeScreen;





