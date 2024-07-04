/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';
import {addPhoto} from '../redux/reducers/photoReducer';
import {useToolTip} from '../hooks/useToolTip';
import ToolTip from '../components/ToolTip';

const CameraScreen = ({navigation}) => {
  const {hasPermission} = useCameraPermission();
  const [camera, setCamera] = useState(null);
  const dispatch = useDispatch();
  const device = useCameraDevice('back');
  const showToolTip = useToolTip();

  const requestPermissions = async () => {
    try {
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );

      const locationPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const photo = await camera.takePhoto({
        qualityPrioritization: 'speed',
        flash: 'off',
      });

      Geolocation.getCurrentPosition(
        position => {
          dispatch(addPhoto({uri: photo.path, location: position.coords}));
          showToolTip('Foto tomada');
        },
        error => console.log(error),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
    }
  };

  if (!hasPermission) return <View style={styles.container} />;

  if (device == null) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        device={device}
        isActive={true}
        photo={true}
        ref={camera => setCamera(camera)}
      />

      <TouchableOpacity style={styles.button} onPress={takePicture} />

      <ToolTip />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
});

export default CameraScreen;
