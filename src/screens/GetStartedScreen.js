import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function GetStartedScreen({navigation}) {
  const onLogin = () => {
    navigation.navigate('Login');
  };
  const onRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DECISION'S</Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/bg.jpg')}
      />
      <View style={styles.content}>
        <Text style={styles.content_text}>Tư vấn chọn trường Đại học</Text>
        <Text style={styles.content_text}>
          Giúp bạn đưa ra quyết định bằng cách nhìn tổng quan
        </Text>
      </View>
      <View style={styles.control}>
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.button_wrapper}
          onPress={onLogin}>
          <Text style={styles.button}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.button_wrapper}
          onPress={onRegister}>
          <Text style={styles.button}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer_text}>Điều khoản &amp; Điều kiện</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 320,
    resizeMode: 'cover',
  },
  title: {
    position: 'absolute',
    top: 100,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 200,
  },
  content_text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  control: {
    width: '100%',
    height: 100,
    top: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button_wrapper: {
    width: 350,
    height: 42,
    backgroundColor: '#3a9de8',
    borderRadius: 50,
  },
  button: {
    textAlign: 'center',
    lineHeight: 45,
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  footer_text: {
    position: 'relative',
    top: 160,
    fontWeight: '400',
    color: '#000',
  },
});
