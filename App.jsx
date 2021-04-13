import React, { useState, useRef } from 'react';
import { StatusBar, Button, StyleSheet, View, FlatList } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons'

import {
  Container,
  Content,
  Back,
  Img,
  IconButton, ViewSearch, Input, Title, SlideView, MovieImage

} from './src/styles/Styles'
import movies from './src/assets/movies.js'


export default function MovieApp() {

  const [lista, setLista] = useState(movies);
  const [background, setBackground] = useState(lista[0].img)

  const handleTest = () => {
    alert(background)
  }
  const _renderItem = ({ item }) => {
    return (
      <View 
      >
        <MovieImage
          source={{uri: item.img}}
          resizeMode="contain"
          />
      </View>
    )
  }
  return (
    <Content>
      <Img
        source={{ uri: background }}
        blurRadius={8}
        >
        <ViewSearch>
          <Input
            placeholder="Procurando algo"
            />
          <IconButton>
            <Icon name="search" color="#000" size={25} />
          </IconButton>
        </ViewSearch>

        <Title>Acabou de chegar</Title>
          <View >
          <FlatList
            style={styles.carouselArea}
            showsHorizontalScrollIndicator={false}
            data={lista}
            horizontal
            scrollEnabled={true}
            keyExtractor={(item) => item.title}
            contentContainerStyle={{
              alignItems: 'center',
            }}
            renderItem={_renderItem}
          />
        </View>
        <Button title="teste" onPress={handleTest} />
      </Img>
    </Content>
  );
}

const styles = StyleSheet.create({
  carouselArea: {
    maxHeight:400,
    maxWidth: 300,
  }
})