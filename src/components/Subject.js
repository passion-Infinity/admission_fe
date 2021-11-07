import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Subject({data, index}) {
  const [show, setShow] = useState(false);
  const openPopup = () => {
    setShow(true);
  };
  return (
    <View key={index}>
      <Modal
        animationType={'fade'}
        transparent
        visible={show}
        onRequestClose={() => {
          setShow(false);
        }}>
        <View style={styles.center_view}>
          <View style={styles.modal}>
            <View style={styles.body}>
              <Image style={styles.image} source={{uri: data.image}} />
              <ScrollView style={styles.scroll}>
                <View style={styles.modal_content}>
                  <Text style={styles.name}>{data.name}</Text>
                  <Text style={styles.grade}>Điểm đầu vào: {data.grade}</Text>
                  <Text style={styles.salary}>
                    Có cơ hội việc làm ngay sau khi tốt nghiệp với mức lương lên
                    đến {data.salary}
                  </Text>
                  <Text style={styles.description}>{data.description}</Text>
                </View>
              </ScrollView>
            </View>
            <View style={styles.btn}>
              <TouchableOpacity
                onPress={() => {
                  setShow(false);
                }}>
                <Text style={[styles.btn_action, styles.btn_apply]}>Đóng</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={openPopup} style={styles.subject_item}>
        <View style={styles.subject_item_name_wrapper}>
          <Text style={styles.subject_item_name}>{data.name}</Text>
        </View>
        <Text style={styles.subject_item_grade}>{data.grade} điểm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  subject: {
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  subject_item: {
    width: 350,
    minHeight: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  subject_item_name_wrapper: {
    maxWidth: 220,
  },
  subject_item_name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  subject_item_grade: {
    fontSize: 16,
    fontWeight: '600',
    color: '#c91e35',
  },
  center_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  modal: {
    position: 'relative',
    width: 380,
    height: 500,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  body: {
    flex: 3,
    paddingLeft: 20,
    paddingRight: 5,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
    paddingBottom: 20,
    paddingTop: 20,
  },
  btn_action: {
    width: 120,
    textAlign: 'center',
    paddingVertical: 5,
    borderRadius: 3,
    fontSize: 16,
    fontWeight: 'bold',
  },
  btn_apply: {
    marginLeft: 10,
    backgroundColor: '#1976d2',
    color: '#fff',
  },
  btn_cancel: {
    backgroundColor: '#ddd',
  },
  image: {
    position: 'relative',
    width: 380,
    height: 200,
    left: -20,
  },
  modal_content: {
    paddingTop: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  grade: {
    fontSize: 16,
    color: 'red',
    fontWeight: '400',
    marginTop: 5,
  },
  salary: {
    fontSize: 16,
    color: '#333',
    marginTop: 15,
    fontWeight: '400',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
  scroll: {
    height: 150,
    paddingHorizontal: 10,
  },
});
