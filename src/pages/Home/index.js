import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartRequest } from '../../store/modules/cart/ActionsCart';

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
import { formatPrice } from '../../util/format';
import api from '../../services/api';

export default function Home() {
  const dispatch = useDispatch();

  const [list, setList] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('products');
      const dataFormatted = response.data.map((p) => ({
        ...p,
        formattedPrice: formatPrice(p.price),
      }));

      setList(dataFormatted);
    }
    getProducts();
  }, []);

  const amountItem = useSelector((state) =>
    state.cart.reduce((a, p) => {
      a[p.id] = p.amount;
      return a;
    }, {}),
  );

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
            <ProductPrice>{item.formattedPrice}</ProductPrice>
            <ProductButton onPress={() => dispatch(addToCartRequest(item.id))}>
              <ProductButtonCounter>
                {amountItem[item.id] || 0}
              </ProductButtonCounter>
              <ProductButtonDescription>ADICIONAR</ProductButtonDescription>
            </ProductButton>
          </ProductCard>
        )}
      />
    </Container>
  );
}
