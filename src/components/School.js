import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default function School({data, onPress}) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.card_top}>
          <View style={styles.card_left}>
            <Image
              style={styles.img}
              source={{
                uri: data.image,
                width: '100%',
                height: 150,
              }}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.card_right}>
            <Text style={styles.name}>{data.name}</Text>
            <Text numberOfLines={2} style={styles.shortDesc}>
              {data.shortDesc}
            </Text>
            <Text numberOfLines={2} style={styles.marjor}>
              Ngành chính: {data.majorInfo[0].name}, {data.majorInfo[1].name}
            </Text>
          </View>
        </View>
        <View style={styles.card_bottom}>
          <Text numberOfLines={3} style={styles.description}>
            {data.description}
          </Text>
          <Text style={styles.grade}>
            Điểm tuyển sinh cao nhất: {data.grade}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 250,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginBottom: 15,
    borderWidth: 0.3,
    borderColor: '#c7523e',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  card_top: {
    width: '100%',
    height: '60%',
    flexDirection: 'row',
  },
  card_bottom: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  card_left: {
    width: 150,
  },
  card_right: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  img: {
    position: 'relative',
    borderRadius: 20,
    top: -3,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  shortDesc: {
    fontSize: 15,
    marginTop: 5,
  },
  marjor: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
  },
  description: {
    fontSize: 15,
    fontWeight: '300',
    color: '#333',
  },
  grade: {
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  },
});
