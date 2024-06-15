import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { styles } from './styles';

export default function Generator(){
  const [catImages, setCatImages] = useState([]);

  const loadCatImages = async () => {
    try {
        // ATRAVÉS DA URL DA API SOLICITAMOS UM LIMITE DE CINCO IMAGENS A SEREM RENDERIZADAS
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=5');
      const newImages = response.data.map(cat => cat.url);
      setCatImages(newImages);
    } catch (error) {
      console.error('Erro ao carregar imagen:', error);
    }
  };

  // NÃO MEXER, CARREGA A PRIMEIRA VEZ
  useEffect(() => {
    loadCatImages();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeria</Text>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.imageContainer}>
        {catImages.map((imageUrl, index) => (
          <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.btn} onPress={loadCatImages} >
        <Text style={styles.btnText}>Gerar Nova Galeria</Text>
      </TouchableOpacity>
    </View>
  );
};