/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  View,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {loadPhotos} from '../redux/reducers/photoReducer';
import PhotoGrid from '../components/PhotoGrid';

const HomeScreen = ({navigation}) => {
  const photos = useSelector(state => state.photos.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotos());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <Text style={styles.title}>Galeria de fotos</Text>
        {photos.length ? (
          <FlatList
            data={photos}
            renderItem={({item}) => (
              <PhotoGrid photo={item} navigation={navigation} />
            )}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
          />
        ) : (
          <Text style={styles.subtitle}>No tienes fotos</Text>
        )}
      </View>

      <Button
        color={'#a9cad1'}
        title="Tomar Foto"
        onPress={() => navigation.navigate('Camara')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingBottom: 22,
    justifyContent: 'space-between',
  },
  flatListContainer: {
    maxHeight: '90%',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
