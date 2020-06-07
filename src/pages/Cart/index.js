import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native';
import {
  updateAmountRequest,
  removeFromCart,
} from '../../store/modules/cart/ActionsCart';
import colors from '../../styles/colors';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

import { formatPrice } from '../../util/format';

export default function Cart() {
  const dispatch = useDispatch();

  const totalCart = useSelector((state) =>
    formatPrice(
      state.cart.reduce((t, p) => {
        return t + p.price * p.amount;
      }, 0),
    ),
  );

  const products = useSelector((state) =>
    state.cart.map((p) => ({
      ...p,
      productTotal: formatPrice(p.price * p.amount),
    })),
  );

  function decrement(product) {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  }

  function increment(product) {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#000', flex: 1 }}>
      <Container>
        {products.length ? (
          <>
            <Products
              data={products}
              keyExtractor={(p) => String(p.id)}
              renderItem={({ item: product }) => (
                <>
                  <Product>
                    <ProductInfo>
                      <ProductImage source={{ uri: product.image }} />
                      <ProductDetails>
                        <ProductTitle>{product.title}</ProductTitle>
                        <ProductPrice>{product.formattedPrice}</ProductPrice>
                      </ProductDetails>
                      <ProductDelete
                        onPress={() => {
                          dispatch(removeFromCart(product.id));
                        }}
                      >
                        <Icon
                          name="delete-forever"
                          size={24}
                          color={colors.primary}
                        />
                      </ProductDelete>
                    </ProductInfo>
                    <ProductControls>
                      <ProductControlButton onPress={() => decrement(product)}>
                        <Icon
                          name="remove-circle-outline"
                          size={20}
                          color={colors.primary}
                        />
                      </ProductControlButton>
                      <ProductAmount>{product.amount}</ProductAmount>
                      <ProductControlButton onPress={() => increment(product)}>
                        <Icon
                          name="add-circle-outline"
                          size={20}
                          color={colors.primary}
                        />
                      </ProductControlButton>
                      <ProductSubtotal>{product.productTotal}</ProductSubtotal>
                    </ProductControls>
                  </Product>
                </>
              )}
            />
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalAmount>{totalCart}</TotalAmount>
              <Order>
                <OrderText>FINALIZAR PEDIDO</OrderText>
              </Order>
            </TotalContainer>
          </>
        ) : (
          <EmptyContainer>
            <Icon name="remove-shopping-cart" size={64} color="#eee" />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyContainer>
        )}
      </Container>
    </SafeAreaView>
  );
}
