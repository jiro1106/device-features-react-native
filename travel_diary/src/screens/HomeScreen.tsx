import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles/HomeScreen';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';

const HomeScreen = ({ navigation }: any) => {
  const [entries, setEntries] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


  // load entries from AsyncStorage
  const loadEntries = async () => {
    const savedEntries = await AsyncStorage.getItem('entries');
    setEntries(savedEntries ? JSON.parse(savedEntries) : []);
  };

  // remove entry from AsyncStorage
  const handleRemoveEntry = async (index: number) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    await AsyncStorage.setItem('entries', JSON.stringify(updatedEntries));
    setEntries(updatedEntries);
  };

  const confirmRemoveEntry = (index: number) => {
    setSelectedIndex(index);
    setModalVisible(true);
  };

  // toggle 
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadEntries(); // reload entries when the screen comes into focus
    });

    // load entries initially
    loadEntries();

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={[styles.mainContainer, { backgroundColor: isDarkMode ? 'black' : '#ebe3d8' }]}>
      <View style={[styles.headerContainer, { backgroundColor: isDarkMode ? 'black' : '#ebe3d8' }]}>
        <Image
          source={isDarkMode ? require('../../assets/logo-white.png') : require('../../assets/logo-black.png')}
          style={styles.logo}
        />
        <TouchableOpacity onPress={toggleTheme}>
          <Ionicons
            style={styles.toggleIcon}
            name={isDarkMode ? 'moon' : 'sunny'}
            size={30}
            color={isDarkMode ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.addEntryBtn, { backgroundColor: isDarkMode ? '#ffbb00' : '#ffbb00', borderColor: isDarkMode ? 'black' : 'black'}]}
        onPress={() => navigation.navigate('AddTravel')}
      >
        <Ionicons name="camera-outline" size={30} color="black" style={styles.cameraIcon} />
        <Text style={[styles.addEntryText, { color: isDarkMode ? 'black' : 'black' }]}>Add Travel Snap</Text>
      </TouchableOpacity>

      {entries.length === 0 ? (
        <Text style={[styles.noEntry, { color: isDarkMode ? 'white' : 'black' }]}>No Entries Yet!</Text>
      ) : (
        <FlatList
          data={entries}
          renderItem={({ item, index }) => (
            <View style={[styles.entryParentContainer, { backgroundColor: isDarkMode ? 'black' : '#ebe3d8',}]}>
              <View style={[styles.entryContainer, { backgroundColor: isDarkMode ? '#333' : '#bb976b', borderColor: isDarkMode ? '#565656' : 'black', borderWidth: 2 }]}>
                <View style={styles.addressContainer}>
                  <MaterialCommunityIcons name="map-marker-outline" size={30} color="#ffbb00" />
                  <Text style={[styles.entryText, { color: isDarkMode ? 'white' : 'black' }]}>{item.address}</Text>
                </View>
                <Image source={{ uri: item.imageUri }} style={styles.entryImg} />
                <View style={{ height: 2, backgroundColor: isDarkMode ? '#565656' : 'black', width: '100%', marginTop: 20 }} />
                {item.description && (
                  <Text style={[styles.entryDescription, { color: isDarkMode ? 'white' : 'black' }]}>
                    {item.description}
                  </Text>
                )}

                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={() => confirmRemoveEntry(index)}
                >
                  <Ionicons name="trash-outline" size={20} color="red" />
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      {/* modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.16)',
          }}
        >
          <View
            style={{
              backgroundColor: isDarkMode ? '#444' : '#ebe3d8',
              padding: 20,
              borderRadius: 20,
              width: '70%',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: isDarkMode ? '#a7a7a7' : 'black',
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginBottom: 15,
                fontWeight: '600',
                textAlign: 'center',
                padding: 5,
                color: isDarkMode ? 'white' : 'black',
              }}
            >
              Are you sure you want to remove this entry?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Pressable
                style={{
                  padding: 10,
                  backgroundColor: 'gray',
                  borderRadius: 5,
                  flex: 1,
                  marginRight: 10,
  
                }}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: 'white', textAlign: 'center',fontWeight:'bold', }}>Cancel</Text>
              </Pressable>
              <Pressable
                style={{
                  padding: 10,
                  backgroundColor: 'red',
                  borderRadius: 5,
                  flex: 1,

                }}
                onPress={() => {
                  if (selectedIndex !== null) {
                    handleRemoveEntry(selectedIndex);
                    setModalVisible(false);
                    setSelectedIndex(null);
                  }
                }}
              >
                <Text style={{ color: 'white', textAlign: 'center',fontWeight:'bold',}}>Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
