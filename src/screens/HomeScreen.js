import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import {AuthContext} from '../components/context';
import schoolService from '../../services/SchoolService';
import areaService from '../../services/AreaService';

export default function HomeScreen({navigation}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getListRegion = async () => {
      try {
        const response = await areaService.getAll();
        setData(response.data);
      } catch (error) {
        console.log('Failed to get region list: ', error);
      }
    };

    getListRegion();

    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>Lựa chọn khu vực</Text>
      </View>
      <ScrollView>
        <View style={styles.body}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate('Area', {
                  area: item.kv,
                  areaName: item.name,
                });
              }}>
              <View style={[styles.card, {backgroundColor: '#c7523e'}]}>
                <View style={styles.card_left}>
                  <Text style={styles.card_title}>{item.name}</Text>
                </View>
                <View style={styles.card_right}>
                  <Image style={styles.img} source={{uri: item.image}} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#399673',
    marginBottom: 20,
  },
  header_title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
  },
  body: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
    marginLeft: 20,
    position: 'relative',
    top: 15,
  },
  card: {
    flexDirection: 'row',
    width: '95%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    opacity: 0.85,
  },
  card_left: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card_right: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card_title: {
    paddingLeft: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
