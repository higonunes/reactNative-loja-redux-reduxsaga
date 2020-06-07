import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Logo,
  Carrinho,
  Contador,
  CarrinhoContainer,
} from './styles';
import logoImg from '../../assets/images/logo.png';
import carrinhoImg from '../../assets/images/carrinho.png';

export default function header({
  navigation: {
    navigation,
    scene: {
      route: { name },
    },
  },
}) {
  const disabled = name === 'Cart';

  const cartSize = useSelector((state) => state.cart.length);
  function handleCart() {
    navigation.push('Cart');
  }

  return (
    <Container>
      <Logo source={logoImg} />
      <CarrinhoContainer
        disabled={disabled}
        onPress={disabled ? null : handleCart}
      >
        <Carrinho source={carrinhoImg} />
        <Contador>{cartSize}</Contador>
      </CarrinhoContainer>
    </Container>
  );
}
