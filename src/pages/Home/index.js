import React, { useState } from 'react';

import {
  Container,
  ProductList,
  ProductCard,
  ProductImg,
  ProductDescription,
  ProductPrice,
  ProductButton,
  ProductButtonCounter,
  ProductButtonDescription,
} from './styles';
import Header from '../../components/Header';

export default function Home({ navigation }) {
  const [list, setList] = useState([
    {
      id: 1,
      title: 'Tênis de Caminhada Leve Confortável',
      price: 179.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    },
    {
      id: 2,
      title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
      price: 139.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
    },
    {
      id: 3,
      title: 'Tênis Adidas Duramo Lite 2.0',
      price: 219.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
    },
    {
      id: 5,
      title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
      price: 139.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
    },
    {
      id: 6,
      title: 'Tênis Adidas Duramo Lite 2.0',
      price: 219.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
    },
    {
      id: 4,
      title: 'Tênis de Caminhada Leve Confortável',
      price: 179.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    },
  ]);

  console.tron.log(list);
  return (
    <Container>
      <ProductList
        data={list}
        horizontal
        keyExtractor={(p) => String(p.id)}
        renderItem={({ item }) => (
          <ProductCard>
            <ProductImg
              source={{
                uri: item.image,
              }}
            />
            <ProductDescription numberOfLines={2} ellipsizeMode="tail">
              {item.title}
            </ProductDescription>
            <ProductPrice>{item.price}</ProductPrice>
            <ProductButton>
              <ProductButtonCounter>2</ProductButtonCounter>
              <ProductButtonDescription>ADICIONAR</ProductButtonDescription>
            </ProductButton>
          </ProductCard>
        )}
      />
    </Container>
  );
}
