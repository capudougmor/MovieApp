import styled from 'styled-components/native'

export const Content  = styled.View`
  flex: 1;
`

export const Back  = styled.View`
  background-color: #000;
`

export const Img  = styled.ImageBackground`
  flex: 1;
  width: null;
  height: null;
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
  color: #000;
  align-self: center;
`

export const IconButton  = styled.TouchableOpacity`

`

export const SlideView  = styled.View`
  width: 100%;
  height: 350px;
  justify-content: center;
  align-items: center;
`

export const MovieImage  = styled.Image`
  width: 200px;
  height: 400px;

  margin: 40px;
  border-radius: 10px;
`