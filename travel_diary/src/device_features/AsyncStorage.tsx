import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'entries';

export const getEntries = async () => {
  try {
    const entries = await AsyncStorage.getItem(STORAGE_KEY);
    return entries ? JSON.parse(entries) : [];
  } catch (error) {
    console.error('Error retrieving entries:', error);
    return [];
  }
};

export const saveEntries = async (entries: { imageUri: string, address: string }[]) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (error) {
    console.error('Error saving entries:', error);
  }
};
