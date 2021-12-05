import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Image,
  Animated
} from 'react-native';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1500);
  }, []);

  const onLoadEnd = () => {
    Animated.timing(opacity, {
      duration: 1500,
      toValue: 1,
      useNativeDriver: true
    }).start();
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        style={styles.image}
        source={{ uri: 'https://github.com/Bruno3C.png?s=64' }}
        blurRadius={4}  
      >
        {
          isLoaded && (
            <Animated.Image 
            style={{
              ...styles.image,
              opacity,
            }}
              source={{ uri: 'https://github.com/Bruno3C.png'}}
              onLoadEnd={onLoadEnd}
            />
          )
        }
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: '100%',
    aspectRatio: 1, //Usado para imagem manter a proporção
  }
});

export default App;