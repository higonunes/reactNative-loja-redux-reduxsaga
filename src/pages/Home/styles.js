import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: rgb(0, 0, 0);
  padding: 0px 0px;
  padding-bottom: 1px;
`;

export const ProductList = styled.FlatList`
  margin: 10px;
`;

export const ProductCard = styled.View`
  width: 220px;
  height: 358px;
  align-items: center;
  background: white;
  padding: 10px;
  margin-right: 15px;
  border-radius: 4px;
`;

export const ProductImg = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductDescription = styled.Text`
  margin: 10px 14px 5px 0;
  font-size: 16px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  align-self: flex-start;
`;

export const ProductButton = styled(RectButton)`
  flex-direction: row;
  background: #0353a4;
  width: 200px;
  height: 42px;
  border-radius: 6px;
  margin-top: 5px;
`;

export const ProductButtonCounter = styled.Text`
  width: 50px;
  font-size: 14px;
  color: white;
  background: ${colors.primary};
  text-align-vertical: center;
  text-align: right;
  padding-right: 13px;
  border-radius: 6px;
`;

export const ProductButtonDescription = styled.Text`
  flex: 1;
  color: white;
  text-align: center;
  text-align-vertical: center;
`;
