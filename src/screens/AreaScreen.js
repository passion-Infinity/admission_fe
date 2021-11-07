import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import School from '../components/School';
import schoolService from '../../services/SchoolService';

export default function AreaScreen({navigation, route}) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const areaName = route.params.areaName;

  useEffect(() => {
    const getListSchool = async () => {
      try {
        const params = {area: route.params.area, name: search};
        const response = await schoolService.getAll(params);
        setData(response.data);
      } catch (error) {
        console.log('Failed to get school list: ', error);
      }
    };
    getListSchool();
  }, [search]);

  const renderData = data => {
    return (
      <School
        key={data.id}
        data={data}
        onPress={() => navigation.navigate('School', {data})}
      />
    );
  };

  const goBack = () => {
    navigation.goBack();
  };

  const TextInputChange = val => {
    setSearch(val);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={goBack}
            activeOpacity={0.5}
            style={styles.header_icon}>
            <FontAwesome5 name="arrow-left" color="#fff" size={20} />
          </TouchableOpacity>
          <Text style={styles.header_title}>{areaName}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.search_wrapper}>
            <View style={styles.search}>
              <TextInput
                style={styles.search_input}
                placeholder="Nhập tên trường"
                placeholderTextColor="#666"
                onChangeText={val => TextInputChange(val)}
              />
              <FontAwesome5
                style={styles.search_icon}
                name="search"
                size={16}
                color="#000"
              />
            </View>
          </View>
          <ScrollView>
            <View style={styles.school}>
              {data.map(item => renderData(item))}
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 150,
  },
  header: {
    width: '100%',
    height: 65,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c7523e',
  },
  header_icon: {},
  header_title: {
    fontSize: 22,
    marginLeft: 35,
    color: '#fff',
    fontWeight: '500',
  },
  body: {},
  search_wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingBottom: 20,
  },
  search: {
    width: '85%',
    height: 50,
  },
  search_input: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    paddingLeft: 40,
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 0.5,
    borderColor: '#ccc',
    borderTopColor: '#ddd',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  search_icon: {
    position: 'absolute',
    top: 18,
    left: 15,
  },
  school: {
    marginTop: 20,
    alignItems: 'center',
  },
});
