import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

export default function Card({data}) {
  const [show, setShow] = useState(false);
  return (
    <View>
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
      <TouchableOpacity
        onPress={() => {
          setShow(true);
        }}>
        <View style={styles.card}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.grade}>{data.grade}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  grade: {
    fontSize: 16,
    fontWeight: '500',
    color: 'red',
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
    paddingHorizontal: 20,
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
  },
});
