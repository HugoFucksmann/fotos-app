/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');
const numColumns = 3;
const size = (width - 8 * numColumns) / numColumns;

const PhotoGrid = ({photo, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detalle de Foto', {photo})}>
      <View style={styles.photoContainer}>
        <Image source={{uri: 'file://' + photo.uri}} style={styles.photo} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    width: size,
    height: size,
    padding: 4,
  },
  photo: {
    flex: 1,
    borderRadius: 5,
  },
});

export default PhotoGrid;
