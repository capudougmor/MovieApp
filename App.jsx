import React, { useState } from 'react';
import Icon from '@expo/vector-icons/MaterialIcons'

import { Container, Content, Back, Img, ViewSearch, Input, Title, Button, SlideView } from './src/styles/Styles'
import { StatusBar } from 'react-native';


export default function MovieApp() {

  const [lista, setLista] = useState([
    {
      title: "O Justiceiro",
      text: "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro",
      release: 2018,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg'
    },
    {
      title: "Bad Boys for life",
      text: "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.",
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg'
    },
    {
      title: "Viúva Negra",
      text: "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.",
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg'
    },
    {
      title: "Top Gun: MAVERICK",
      text: "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.",
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg'
    },
    {
      title: "BloodShot",
      text: "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ",
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg'
    },
    {
      title: "Free Guy",
      text: "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.",
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
    },
  ]);

  const [background, setBackgrounf] = useState(lista[0].img)

  return (
    
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Content>
        <Back >
          <Img
            source={{ uri: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg'}}
            blurRadius={8}
          >
            <ViewSearch>
              <Input 
                placeholder="Procurando algo"
              />
              <Button>
                <Icon name="search" color="#000" size={25} />
              </Button>
            </ViewSearch>

            <Title>Acabou de chegar</Title>

            <SlideView>

            </SlideView>
          </Img>
        </Back>
      </Content>
    </Container>
  );
}