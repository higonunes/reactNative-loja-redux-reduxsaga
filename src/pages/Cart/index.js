import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import Header from '../../components/Header';
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

export default function Cart({ navigation }) {
  const [products, setList] = useState([
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
  function decrement(product) {
    // updateAmountRequest(product.id, product.amount - 1);
  }

  function increment(product) {
    // updateAmountRequest(product.id, product.amount + 1);
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#000', flex: 1 }}>
      {/* <Header cart /> */}
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
                        <ProductPrice>{product.price}</ProductPrice>
                      </ProductDetails>
                      <ProductDelete onPress={() => {}}>
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
                      <ProductAmount>4</ProductAmount>
                      <ProductControlButton onPress={() => increment(product)}>
                        <Icon
                          name="add-circle-outline"
                          size={20}
                          color={colors.primary}
                        />
                      </ProductControlButton>
                      <ProductSubtotal>R$581,43</ProductSubtotal>
                    </ProductControls>
                  </Product>
                </>
              )}
            />
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalAmount>R$567,45</TotalAmount>
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

//   return (
//     <Container>
//       <Header navigation={navigation} cart />
//       <Card>
//         <CardView>
//           <CardList
//             data={list}
//             keyExtractor={(p) => String(p.id)}
//             renderItem={({ item }) => (
//               <>
//                 <CardItem>
//                   <CardInfo>
//                     <CardImage source={{ uri: item.image }} />
//                     <CardText>
//                       <CardTextDescription>{item.title}</CardTextDescription>
//                       <CardTextPrice>{item.price}</CardTextPrice>
//                     </CardText>
//                   </CardInfo>
//                 </CardItem>
//                 <TotalItem>
//                   <ItemQuantity>3</ItemQuantity>
//                   <ItemTotal>R$560,70</ItemTotal>
//                 </TotalItem>
//               </>
//             )}
//           />
//         </CardView>
//         <FinishField>
//           <TotaText>TOTAL</TotaText>
//           <TotalValue>1642,10</TotalValue>
//           <TotalButton title="FINALIZAR PEDIDO" />
//         </FinishField>
//       </Card>
//     </Container>
//   );
// }
