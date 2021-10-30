import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default function SplashScreen({navigation}) {
  const animationFinish = () => {
    navigation.replace('GetStarted');
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <LottieView
          source={require('../../assets/animations/splashScreen.json')}
          autoPlay
          loop={false}
          speed={0.8}
          onAnimationFinish={animationFinish}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  content: {
    width: 200,
    height: 200,
  },
});
