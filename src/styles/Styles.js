import styled from 'styled-components/native'

import { Dimensions } from 'react-native'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export const Container  = styled.ScrollView`
  flex: 1;
`

export const Content  = styled.View`
  flex: 1;
  height: ${screenHeight};
`

export const Back  = styled.View`
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




