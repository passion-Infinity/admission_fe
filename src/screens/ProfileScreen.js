import React, {useContext} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AuthContext} from '../components/context';

export default function ProfileScreen({navigation}) {
  const {LogOut} = useContext(AuthContext);
  const onPress = () => {
    navigation.navigate('UpdateProfile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_avarta}>
          <Image
            source={require('../../assets/images/google.png')}
            resizeMode="contain"
            style={{
              width: '80%',
              height: '80%',
              borderRadius: 1000,
            }}
          />
        </View>
        <View style={styles.header_info}>
          <Text style={styles.header_name}>Nguyen Lam Cong Danh</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.my_info}>
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.6}
            style={styles.my_action_item}>
            <View style={styles.my_action_item_left}>
              <FontAwesome5 name={'user'} color={'#039be5'} size={20} />
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: '500',
                  fontSize: 16,
                }}>
                Cập nhật thông tin
              </Text>
            </View>
            <FontAwesome5 name={'chevron-right'} size={20} color={'#888'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => LogOut()}
            activeOpacity={0.6}
            style={styles.my_action_item}>
            <View style={styles.my_action_item_left}>
              <FontAwesome5 name={'sign-out-alt'} color={'#039be5'} size={20} />
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: '500',
                  fontSize: 16,
                }}>
                Đăng xuất
              </Text>
            </View>
            <FontAwesome5 name={'chevron-right'} size={20} color={'#888'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#c7523e',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    opacity: 0.85,
  },
  header_info: {
    width: '70%',
    paddingRight: 20,
  },
  header_name: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
  },
  header_avarta: {
    width: '25%',
    paddingLeft: 20,
  },
  my_action: {
    marginTop: 15,
  },
  my_action_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  my_action_item_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  my_info: {
    marginTop: 20,
  },
});
