import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeMessage} from '../redux/reducers/toolTipReducer';

const ToolTip = () => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.toolTip.messages);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (messages.length > 0) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => dispatch(removeMessage()));
      }, 2700);

      return () => clearTimeout(timer);
    }
  }, [messages, fadeAnim, dispatch]);

  if (messages.length === 0) return null;

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <View style={styles.tooltip}>
        <Text style={styles.text}>{messages[0]}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000,
  },
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 20,
    padding: 10,
    maxWidth: '80%',
  },
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ToolTip;
