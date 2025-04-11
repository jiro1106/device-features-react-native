import * as Location from 'expo-location';

export const getCurrentAddress = async (latitude: number, longitude: number) => {
  const geocode = await Location.reverseGeocodeAsync({ latitude, longitude });
  const address = geocode[0];
  return `${address.street}, ${address.city}, ${address.region},${address.country}`;
};
