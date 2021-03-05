import styled from 'styled-components/native'

import { Dimensions } from 'react-native'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export const Container  = styled.ScrollView`
  flex: 1;
`

export const Content  = styled.View`
  flex: 1;
  height: ${screenHeight}px;
`

export const Back  = styled.View`
  flex: 1;
  background-color: #000;
`

export const Img  = styled.ImageBackground`
  flex: 1;
  width: null;
  height: null;
  opacity: 1;
  justify-content: flex-start;
  background-color: #000;
`

export const ViewSearch  = styled.View`
  margin: 40px 0;
  padding: 10px;
  background-color: #fff;
  z-index:  10;
  border-radius: 5px;
  width: 95%;
  flex-direction: row;
  align-self: center;
`

export const Input  = styled.TextInput`
  width: 95%;
  font-size: 17px;
`

export const Title  = styled.Text`
  width: 95%;
  font-size: 26px;
  font-weight: 600;
  color: #fff;
  align-self: center;
`

export const Button  = styled.TouchableOpacity`

`

export const SlideView  = styled.View`
  width: 100%;
  height: 350px;
  justify-content: center;
  align-items: center;

`




