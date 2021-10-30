import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function About({data}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.information}>
          <View style={styles.icon}>
            <FontAwesome5 name="graduation-cap" color="#584f9e" size={20} />
            <Text style={styles.icon_text}>Trường</Text>
          </View>
          <View style={styles.information_content}>
            <Text style={styles.information_content_text}>{data.name}</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.icon}>
            <FontAwesome5 name="map-marker-alt" color="#584f9e" size={20} />
            <Text style={styles.icon_text}>Địa chỉ</Text>
          </View>
          <View style={styles.item_content}>
            <Text style={styles.item_content_text}>{data.address}</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.icon}>
            <FontAwesome5 name="phone" color="#584f9e" size={20} />
            <Text style={styles.icon_text}>Liên hệ</Text>
          </View>
          <View style={styles.item_content}>
            <Text style={styles.item_content_text}>{data.phone}</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.icon}>
            <FontAwesome5 name="globe" color="#584f9e" size={20} />
            <Text style={styles.icon_text}>Website</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              Linking.openURL(data.link);
            }}
            style={styles.item_content}>
            <Text style={[styles.item_content_text, styles.link]}>
              {data.link}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.description}>
          <Text style={styles.description_title}>Mô tả</Text>
          <View style={styles.description_content}>
            <Text>{data.description}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  information: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  icon: {
    marginRight: 30,
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: 80,
  },
  information_content_text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7c6bfa',
  },
  item: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  item_content_text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#777',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#7568d9',
  },
  icon_text: {
    fontWeight: '700',
    marginLeft: 8,
  },
  description: {
    marginTop: 20,
  },
  description_title: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});
