import { Camera } from 'expo-camera';
import { requestForegroundPermissionsAsync } from 'expo-location';
import * as Notifications from 'expo-notifications';

export const requestPermissions = async () => {
  try {
    // camera
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    if (cameraPermission.status !== 'granted') {
      alert('Camera permission is required to take photos.');
      return false;
    }

    // loc
    const locationPermission = await requestForegroundPermissionsAsync();
    if (locationPermission.status !== 'granted') {
      alert('Location permission is required to get your current address.');
      return false;
    }

    // notif
    const notificationPermission = await Notifications.requestPermissionsAsync();
    if (notificationPermission.status !== 'granted') {
      alert('Notification permission is required to send alerts.');
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error requesting permissions:', error);
    return false;
  }
};
