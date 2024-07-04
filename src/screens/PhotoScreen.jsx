/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Share,
} from 'react-native';

const PhotoScreen = ({route, navigation}) => {
  const {photo} = route.params;

  const handleShare = async () => {
    try {
      const shareOptions = {
        title: 'Compartir foto',
        url: 'file://' + photo.uri,
      };
      await Share.share(shareOptions);
    } catch (error) {
      console.error('Error al compartir:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'file://' + photo.uri}}
        style={[styles.image, styles.border]}
      />
      <Text style={[styles.textLocation, styles.border]}>
        Ubicación: {photo.location.latitude}, {photo.location.longitude}
      </Text>
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Text>Compartir esta foto!</Text>
      </TouchableOpacity>
      <Button
        color={'#a9cad1'}
        title="Volver"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '70%',
  },
  textLocation: {
    marginVertical: 10,
    fontSize: 16,
    padding: 8,
  },
  shareButton: {
    backgroundColor: '#b7c1c7',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  border: {
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#a9cad1',
  },
});

export default PhotoScreen;
