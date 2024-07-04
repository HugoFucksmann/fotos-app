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
  console.log('photos ', photos);
  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <Text style={styles.title}>Photo Gallery</Text>
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
          <Text style={styles.title}>No tienes fotos</Text>
        )}
      </View>

      <Button
        title="Tomar Foto"
        onPress={() => navigation.navigate('Camera')}
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
    maxHeight: '80%',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default HomeScreen;
