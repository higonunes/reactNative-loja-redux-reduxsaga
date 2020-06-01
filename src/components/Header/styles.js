import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
  padding: 20px;
  background: black;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  height: 24px;
  width: 185px;
`;

export const CarrinhoContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
`;

export const Carrinho = styled.Image`
  height: 24px;
  width: 24px;
`;

export const Contador = styled.Text`
  align-self: baseline;
  color: #eee;
  font-size: 12px;
  padding: 0px 5px 1px 5px;
  margin-left: -10px;
  margin-top: -10px;
  background: red;
  border-radius: 8px;
`;
