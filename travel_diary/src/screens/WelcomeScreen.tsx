import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, Image, View } from 'react-native';
import { styles } from '../styles/WelcomeScreen';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/WelcomeBg3.jpg')} 
          style={styles.background} 
        />
      </View>
      <View style={styles.bottomContainer}>
      <Image
          source={require('../../assets/logo-black.png')} 
          style={styles.logo} 
        />
       <Text style={styles.title}>Snapture the moments!</Text>
       <View style={styles.samplePictures}>
       <Image
          source={require('../../assets/image1.jpg')} 
          style={styles.eachImg} 
        />
        <Image
          source={require('../../assets/image3.jpg')} 
          style={styles.eachImg} 
        />
        <Image
          source={require('../../assets/image2.jpg')} 
          style={styles.eachImg} 
        />
       </View>
        <TouchableOpacity style={styles.redirectBtn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.redirectText}>Get started!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
