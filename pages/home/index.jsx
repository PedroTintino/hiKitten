
import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { styles } from './styles';
import TypeWriter from '@sucho/react-native-typewriter'
import cute from '../../assets/cute.png';
import { useNavigation } from '@react-navigation/native';

const fetchFonts = () => {
  return Font.loadAsync({
    'Inconsolata': require('../../assets/font/Inconsolata.ttf'),
  });
};

export default function Home() {
    const navigation = useNavigation();

    const goToNext = () =>{
    navigation.navigate('Generator');
    }

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
        <View>
            <Image source={cute} style={styles.image}/>
            <Text style={styles.introText}>
            Bem vindo ao,
            </Text>
            <Text style={styles.fontCustom}>Hi, Kitten.</Text>
        </View>
        <Text style={styles.introduction}>
        "Explore um mundo encantador dedicado aos amantes de gatos. Com o nosso aplicativo, você terá acesso a uma vasta galeria de fotos irresistíveis desses adoráveis bichanos...".
        </Text>
        <TouchableOpacity style={styles.btn}>
            <Text 
            style={{textAlign: 'center', fontWeight: '600', color: 'white', fontSize: 16}}
            onPress={goToNext} 
            >
                Explorar
            </Text>
        </TouchableOpacity>
        <TypeWriter
        textArray={['Meow!', 'Meow!']}
        loop
        speed={500}
        delay={600}
        textStyle={styles.TypeWriter}
      />
  </View>
  );
}


