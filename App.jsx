import React, { useState, useRef } from 'react';
import { StatusBar, Button, StyleSheet, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons'
import Carousel from 'react-native-snap-carousel'


import {
  Container,
  Content,
  Back,
  Img,
  IconButton, ViewSearch, Input, Title, SlideView,

} from './src/styles/Styles'
import movies from './src/assets/movies.js'


export default function MovieApp() {
  const carouselRef = useRef(null)

  const [lista, setLista] = useState(movies);
  const [background, setBackground] = useState(lista[0].img)

  const handleTest = () => {
    alert(background)
  }
  const _renderItem = ({ item }) => {
    return (
      <View>

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
          <View style={styles.carousel} >
          <Carousel
            data={lista}
            layout="tinder"
            layoutCardOffset={9}
            ref={isCarousel}
            renderItem={_renderItem}
            sliderWidth={300}
            itemWidth={300}
            inactiveSlideShift={0}
            useScrollView={true}
          />
        </View>
        <Button title="teste" onPress={handleTest} />
      </Img>
    </Content>
  );
}

const styles = StyleSheet.create({
  carousel: {

  }
})