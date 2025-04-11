import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { takePicture } from '../device_features/Camera';
import * as Location from 'expo-location';
import { sendNotification } from '../device_features/Notification';
import { requestPermissions } from '../device_features/Permissions';
import { getEntries, saveEntries } from '../device_features/AsyncStorage';
import styles from '../styles/AddTravel';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';

const AddTravelEntryScreen = ({ navigation }: any) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');

  const { isDarkMode } = useTheme(); 

  const getCurrentAddress = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Location permission is required');
      return null;
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    const geocode = await Location.reverseGeocodeAsync({ latitude, longitude });
    const formattedAddress = geocode[0]?.city + ', ' + geocode[0]?.region + ', ' +geocode[0]?.country;
    return formattedAddress || 'Unknown Location';
  };

  const handleTakePhoto = async () => {
    const hasPermissions = await requestPermissions();
    if (!hasPermissions) return;

    const uri = await takePicture();
    if (uri) {
      const location = await getCurrentAddress();
      setImageUri(uri);
      setAddress(location);
    }
  };

  const handleSaveEntry = async () => {
    if (imageUri && address) {
      const newEntry = { imageUri, address, description };
      const entries = await getEntries();
      entries.push(newEntry);
      await saveEntries(entries);
      sendNotification();
      navigation.goBack();
    }
  };

  const isSaveDisabled = !imageUri;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View
        style={[
          styles.mainContainer,
          { backgroundColor: isDarkMode ? '#121212' : '#ebe3d8' }, 
        ]}
      >
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color={isDarkMode ? 'white' : 'black'} />
        </TouchableOpacity>

        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardDismissMode="none" // prevent keyboard dismiss
        >
          <SafeAreaView style={styles.inner}>
            <TouchableOpacity style={styles.cameraBtn} onPress={handleTakePhoto}>
              <Ionicons name="camera-outline" size={45} color={isDarkMode ? 'black' : 'black'} />
            </TouchableOpacity>
            <Text style={[styles.title, { color: isDarkMode ? 'white' : 'black' }]}>
              New Snapture
            </Text>

            <View style={styles.imgWithDetailsContainer}>
              <View
                style={[
                  styles.imageContainer,
                  {
                    backgroundColor: isDarkMode ? '#1e1e1e' : '#f9f9f9',
                    borderColor: isDarkMode ? 'black' : 'black',
                  },
                ]}
              >
                {imageUri ? (
                  <Image source={{ uri: imageUri }} style={styles.image} />
                ) : (
                  <Text style={[styles.placeholderText, { color: isDarkMode ? '#aaa' : '#666' }]}>
                    No image taken
                  </Text>
                )}
              </View>

              {address && (
                <Text style={[styles.addressText, { color: isDarkMode ? '#ccc' : '#333' }]}>
                  {address}
                </Text>
              )}

              <TextInput
                placeholder="Add a description..."
                placeholderTextColor={isDarkMode ? '#888' : '#aaa'} 
                value={description}
                onChangeText={setDescription}
                style={[
                  styles.input,
                  {
                    backgroundColor: isDarkMode ? '#1e1e1e' : '#f9f9f9',
                    color: isDarkMode ? 'white' : 'black',
                  },
                ]}
                multiline
                returnKeyType="done"
                blurOnSubmit={false} 
              />

              <TouchableOpacity
                style={[
                  styles.buttonSave,
                  isSaveDisabled && styles.buttonSaveDisabled,
                  { backgroundColor: isSaveDisabled ? '#ccc' : '#ffbb00' },
                ]}
                onPress={handleSaveEntry}
                disabled={isSaveDisabled}
              >
                <Text
                  style={{
                    color: isDarkMode ? 'black' : 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Save Entry
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddTravelEntryScreen;