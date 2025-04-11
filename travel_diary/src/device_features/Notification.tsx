import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';

export const sendNotification = async () => {

  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Permission Denied', 'Notification permission was not granted.');
    return;
  }

  const trigger: Notifications.TimeIntervalTriggerInput = {
    type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
    seconds: 1,
    repeats: false,
  };

  try {
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Snapture Saved",
        body: "Your Snapture has been saved successfully!",
      },
      trigger,
    });

    console.log("Notification scheduled with ID:", notificationId);
  } catch (error) {
    console.error("Failed to schedule notification:", error);
    Alert.alert("Error", "Failed to schedule notification.");
  }
};
