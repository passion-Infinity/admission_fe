import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../components/context';

export default function LoginScreen({navigation}) {
  const onPress = () => {
    Keyboard.dismiss();
    setFocus(false);
  };

  const goBack = () => {
    navigation.goBack();
  };

  // Focus into Textinput
  const [focus, setFocus] = useState(false);
  const [focus1, setFocus1] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const onFocus1 = () => {
    setFocus1(true);
  };

  const onBlur1 = () => {
    setFocus1(false);
  };

  // auth context
  const {LogIn} = useContext(AuthContext);

  // data to Login
  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    sercureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = val => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePassword = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSercureTextInput = () => {
    setData({
      ...data,
      sercureTextEntry: !data.sercureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const handleValidPassword = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidPassword: false,
      });
    }
  };

  const loginHandler = (username, password) => {
    LogIn(username, password);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} activeOpacity={0.4}>
            <FontAwesome5 name="arrow-left" color="#fff" size={20} />
          </TouchableOpacity>
          <View style={styles.header_title}>
            <Text style={styles.header_title_text}>Đăng nhập</Text>
            <Text style={styles.header_title_text}>tài khoản của bạn</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.form}>
            <View
              style={[styles.form_item, focus ? {borderColor: '#bda50d'} : '']}>
              <FontAwesome5 name="user" color="#c4c9d1" size={20} />
              <TextInput
                style={styles.form_item_input}
                placeholder="Tên đăng nhập"
                placeholderTextColor="#fff"
                autoCapitalize="none"
                onChangeText={val => textInputChange(val)}
                onEndEditing={e => handleValidUser(e.nativeEvent.text)}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              {data.check_textInputChange ? (
                <Feather name="check-circle" color="#17e84b" size={20} />
              ) : null}
            </View>
            <View style={styles.form_error}>
              {data.isValidUser ? null : (
                <Text style={styles.form_error_text}>
                  Tên đăng nhập phải từ 6 ký tự trở lên
                </Text>
              )}
            </View>
            <View
              style={[
                styles.form_item,
                focus1 ? {borderColor: '#bda50d'} : '',
              ]}>
              <FontAwesome5 name="lock" color="#c4c9d1" size={20} />
              <TextInput
                style={styles.form_item_input}
                placeholder="Mặt khẩu"
                placeholderTextColor="#fff"
                autoCapitalize="none"
                onChangeText={val => handlePassword(val)}
                onEndEditing={e => handleValidPassword(e.nativeEvent.text)}
                onFocus={onFocus1}
                onBlur={onBlur1}
                secureTextEntry={data.sercureTextEntry}
              />
              <TouchableOpacity onPress={updateSercureTextInput}>
                {data.sercureTextEntry ? (
                  <Feather name="eye-off" color="#c4c9d1" size={20} />
                ) : (
                  <Feather name="eye" color="#c4c9d1" size={20} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.form_error}>
              {data.isValidPassword ? null : (
                <Text style={styles.form_error_text}>
                  Mặt khẩu phải từ 8 ký từ trở lên
                </Text>
              )}
            </View>
          </View>
          <View style={styles.control}>
            <TouchableOpacity
              onPress={() => loginHandler(data.username, data.password)}
              style={[styles.button_wrapper, styles.button_normal]}
              activeOpacit={0.8}>
              <Text style={styles.button}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button_wrapper, styles.button_google]}
              activeOpacit={0.8}>
              <View style={styles.button_image_wrapper}>
                <Image
                  style={styles.button_image}
                  source={require('../../assets/images/google.png')}
                />
              </View>
              <Text style={[styles.button, styles.button_google_text]}>
                Đăng nhập bằng Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 18,
    backgroundColor: '#414755',
  },
  header: {
    width: '100%',
    height: 300,
    justifyContent: 'space-evenly',
    paddingLeft: 10,
  },
  header_title: {},
  header_title_text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  body: {
    width: '100%',
    marginTop: 20,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  form_item: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#747981',
    marginBottom: 8,
  },
  form_item_input: {
    width: '82%',
    marginLeft: 15,
    color: '#fff',
    fontSize: 15,
    paddingRight: 12,
  },
  form_error: {
    width: '90%',
    height: 30,
    alignItems: 'flex-start',
  },
  form_error_text: {
    color: '#db3214',
    fontWeight: '500',
  },
  control: {
    width: '100%',
    marginTop: 60,
    alignItems: 'center',
  },
  button_wrapper: {
    width: '80%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    borderRadius: 50,
  },
  button_image_wrapper: {
    width: 22,
    height: 22,
    marginRight: 15,
  },
  button_image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  button_normal: {
    backgroundColor: '#000',
  },
  button_google: {
    backgroundColor: '#fff',
  },
  button_google_text: {
    color: '#000',
  },
});
