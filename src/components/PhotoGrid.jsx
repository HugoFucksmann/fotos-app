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
const size = width / numColumns;

const PhotoGrid = ({photo, navigation}) => {
  console.log('photo ', photo);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Photo', {photo})}>
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
    padding: 1,
  },
  photo: {
    flex: 1,
  },
});

export default PhotoGrid;
