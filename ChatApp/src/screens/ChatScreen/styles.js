import styled from "styled-components/native"
import Icon from "react-native-vector-icons/FontAwesome"


export const MessageContainer = styled.View`
  flex : 1;
  background-color: #f1f1f1;
`

export const ActionsContainer = styled.View`
    position: absolute;
    left : 0;
    right : 0;
    bottom : 0;
    background-color: #f1f1f1;
    flex-direction: row;
    padding: 12px;
`

export const MessageInput = styled.TextInput`
    border: 1px solid #6b6b6b;
    padding: 8px;
    border-radius: 5px;
    background-color: #fff;
    flex: 1;
`

export const IconComponent = styled(Icon)`
  font-size : 28px;
  color :  ${({ iconColor }) => iconColor ? iconColor : '#363636'};
  align-self: center;
  padding-right : 12px;
  padding-left : 12px;
`

export const SendButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  border-color :  ${({ checkColor }) => checkColor ? checkColor : '#fff'};
`
