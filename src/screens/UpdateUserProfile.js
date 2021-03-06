import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import userService from '../../services/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UpdateProfileScreen({navigation}) {
  const onPress = () => {
    Keyboard.dismiss();
    setFocus1(false);
    setFocus2(false);
  };
  const goBack = () => {
    navigation.goBack();
  };
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const onFocus1 = () => {
    setFocus1(true);
  };
  const onBlur1 = () => {
    setFocus1(false);
  };
  const onFocus2 = () => {
    setFocus2(true);
  };
  const onBlur2 = () => {
    setFocus2(false);
  };

  const [fullname, setFullname] = useState('');

  const onChangeTextFullname = val => {
    setFullname(val);
  };

  const [isChangePass, setIsChangePass] = useState(false);

  const isChangePassFunc = () => {
    setIsChangePass(!isChangePass);
  };

  // data to Register
  const [data, setData] = useState({
    username: '',
    password: '',
    confirm: '',
    sercureTextEntry: true,
    sercureTextEntryConfirm: true,
    isValidPassword: true,
    isValidCofirmPassword: true,
    isMatchedPassword: true,
  });

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

  const handleConfirmPassword = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        confirm: val,
        isValidCofirmPassword: true,
        isMatchedPassword: val === data.password,
      });
    } else {
      setData({
        ...data,
        confirm: val,
        isValidCofirmPassword: false,
        isMatchedPassword: true,
      });
    }
  };

  const updateSercureTextInput = () => {
    setData({
      ...data,
      sercureTextEntry: !data.sercureTextEntry,
    });
  };

  const updateConfirmSercureTextInput = () => {
    setData({
      ...data,
      sercureTextEntryConfirm: !data.sercureTextEntryConfirm,
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

  const handleValidConfirmPassword = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        isValidCofirmPassword: true,
        isMatchedPassword: val === data.password,
      });
    } else {
      setData({
        ...data,
        isValidPassword: false,
        isMatchedPassword: true,
      });
    }
  };

  const updateHandler = async (password, confirm) => {
    let payload;

    if (isChangePass) {
      if (!password || !confirm || password.length < 8 || confirm.length < 8) {
        alert('Th??ng tin c???p nh???t kh??ng ????ng');
        return;
      }

      if (confirm !== password) {
        alert('M???t kh???u x??c nh???n kh??ng ????ng');
        return;
      }
    }

    if (isChangePass) {
      payload = {
        fullname,
        password,
      };
    } else {
      payload = {
        fullname,
      };
    }

    console.log(payload);

    const response = await userService.UpdateUser(user.username, payload);

    if (response && response.success) {
      alert('C???p nh???t t??i kho???n th??nh c??ng');
      navigation.navigate('Profile', {loading: fullname});
    } else {
      alert('Th??ng tin c???p nh???t kh??ng ????ng');
    }
  };

  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const username = await AsyncStorage.getItem('username');
        const userFind = await userService.GetUser(username);
        if (userFind) {
          setUser(userFind);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} activeOpacity={0.4}>
            <FontAwesome5 name="arrow-left" color="#fff" size={20} />
          </TouchableOpacity>
          <View style={styles.header_title}>
            <Text style={styles.header_title_text}>C???p nh???t</Text>
            <Text style={styles.header_title_text}>t??i kho???n c???a b???n</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.form}>
            <View style={styles.form_label}>
              <Text style={styles.form_label_text}>T??n ????ng nh???p</Text>
            </View>
            <View style={[styles.form_item]}>
              <FontAwesome5 name="user" color="#c4c9d1" size={20} />
              <TextInput
                style={styles.form_item_input}
                placeholder={user ? user.username : ''}
                placeholderTextColor="#fff"
                autoCapitalize="none"
                editable={false}
              />
              {/* {data.check_textInputChange ? (
                <Feather name="check-circle" color="#17e84b" size={20} />
              ) : null} */}
            </View>
            <View style={styles.form_error}></View>
            <View style={styles.form_label}>
              <Text style={styles.form_label_text}>H??? t??n</Text>
            </View>
            <View style={[styles.form_item]}>
              <FontAwesome5 name="user" color="#c4c9d1" size={20} />
              <TextInput
                style={styles.form_item_input}
                placeholder={user ? user.fullname : ''}
                placeholderTextColor="#fff"
                autoCapitalize="none"
                onEndEditing={e => onChangeTextFullname(e.nativeEvent.text)}
              />
            </View>
            <View style={styles.form_error}></View>
            <TouchableOpacity
              onPress={isChangePassFunc}
              style={styles.changePass}>
              <Text style={styles.changePass_text}>
                {isChangePass ? '???n ?????i m???t kh???u' : '?????i m???t kh???u'}
              </Text>
            </TouchableOpacity>
            {isChangePass && (
              <View>
                <View style={styles.form_label1}>
                  <Text style={styles.form_label_text}>M???t kh???u</Text>
                </View>
                <View
                  style={[
                    styles.form_item,
                    focus1 ? {borderColor: '#bda50d'} : '',
                  ]}>
                  <FontAwesome5 name="lock" color="#c4c9d1" size={20} />
                  <TextInput
                    style={styles.form_item_input}
                    placeholder="M???t kh???u m???i"
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
                      M???t kh???u ph???i t??? 8 k?? t??? tr??? l??n
                    </Text>
                  )}
                </View>
                <View style={styles.form_label1}>
                  <Text style={styles.form_label_text}>X??c nh???n m???t kh???u</Text>
                </View>
                <View
                  style={[
                    styles.form_item,
                    focus2 ? {borderColor: '#bda50d'} : '',
                  ]}>
                  <FontAwesome5 name="lock" color="#c4c9d1" size={20} />
                  <TextInput
                    style={styles.form_item_input}
                    placeholder="Nh???p l???i m???t kh???u"
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                    onChangeText={val => handleConfirmPassword(val)}
                    onEndEditing={e =>
                      handleValidConfirmPassword(e.nativeEvent.text)
                    }
                    onFocus={onFocus2}
                    onBlur={onBlur2}
                    secureTextEntry={data.sercureTextEntryConfirm}
                  />
                  <TouchableOpacity onPress={updateConfirmSercureTextInput}>
                    {data.sercureTextEntryConfirm ? (
                      <Feather name="eye-off" color="#c4c9d1" size={20} />
                    ) : (
                      <Feather name="eye" color="#c4c9d1" size={20} />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.form_error}>
                  {data.isValidCofirmPassword ? null : (
                    <Text style={styles.form_error_text}>
                      M???t kh???u ph???i t??? 8 k?? t??? tr??? l??n
                    </Text>
                  )}
                  {data.isMatchedPassword ? null : (
                    <Text style={styles.form_error_text}>
                      M???t kh???u x??c nh???n kh??ng ????ng
                    </Text>
                  )}
                </View>
              </View>
            )}
          </View>
          <View style={styles.control}>
            <TouchableOpacity
              onPress={() => updateHandler(data.password, data.confirm)}
              style={[styles.button_wrapper, styles.button_normal]}
              activeOpacit={0.8}>
              <Text style={styles.button}>C???p nh???t</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    height: 150,
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
    marginTop: 10,
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
    marginTop: 30,
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
  form_label: {
    position: 'relative',
    width: 200,
    left: -80,
    marginBottom: 6,
  },
  form_label_text: {
    color: '#777',
    fontWeight: '600',
    fontSize: 16,
  },
  form_label1: {
    position: 'relative',
    width: 200,
    left: -15,
    marginBottom: 6,
  },
  changePass: {
    width: '100%',
    marginBottom: 25,
  },
  changePass_text: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
