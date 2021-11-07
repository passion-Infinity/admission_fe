import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {menu} from '../model/menu';
import About from '../components/About';
import Subject from '../components/Subject';
import Event from '../components/Event';

export default function SchoolDetailsScreen({route}) {
  const data = route.params.data;
  const [isSelected, setIsSeleted] = useState(0);
  const onClickMenu = val => {
    setIsSeleted(val);
  };

  const renderMajorInfo = (data, index) => {
    return <Subject key={index} data={data} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_image}>
          <Image
            style={styles.image}
            source={{
              uri: data.image,
            }}
          />
        </View>
        <View style={styles.header_title}>
          <Text style={styles.header_title_text}>{data.name}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.menu}>
          <View style={styles.menu_image}>
            <Image
              style={styles.image}
              source={require('../../assets/images/menu.png')}
            />
          </View>
          {menu.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onClickMenu(item.id)}
              style={styles.menu_item}>
              <Text
                style={[
                  styles.menu_item_text,
                  isSelected === item.id ? styles.menu_item_text_active : '',
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.main_content}>
          {isSelected === 0 ? (
            <About data={data} />
          ) : isSelected === 1 ? (
            <ScrollView style={{width: '100%', height: '100%'}}>
              <Text style={styles.title}>Các ngành đào tạo</Text>
              <View style={styles.subject}>
                {data.majorInfo.map((item, index) =>
                  renderMajorInfo(item, index),
                )}
              </View>
            </ScrollView>
          ) : (
            <Event />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 6,
  },
  header: {
    width: '100%',
    height: 380,
    alignItems: 'center',
  },
  header_image: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 30,
    opacity: 0.9,
  },
  header_title: {
    position: 'absolute',
    top: 150,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_title_text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 22,
  },
  body: {
    width: '100%',
    height: '100%',
  },
  menu: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  menu_item: {
    maxWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu_image: {
    width: 25,
    height: 25,
  },
  menu_item_text: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  menu_item_text_active: {
    fontWeight: 'bold',
    color: '#4f1d82',
  },
  main_content: {
    width: '100%',
    height: 340,
    marginTop: 15,
  },
  title: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 17,
    color: '#000',
    fontWeight: '300',
  },
  subject: {
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 20,
  },
});
