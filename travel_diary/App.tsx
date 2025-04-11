import {View, StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import * as Notifications from 'expo-notifications';
import { ThemeProvider } from './src/theme/ThemeContext';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  return (
    <ThemeProvider>
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <AppNavigator />
      </View>
    </ThemeProvider>
    );
}