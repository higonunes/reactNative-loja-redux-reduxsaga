import { Alert } from 'react-native';
import { all, put, call, takeLatest, select } from 'redux-saga/effects';
import * as Actions from './ActionsCart';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import * as NavigationService from '../../../services/navigation';

function* addToCartRequest({ id }) {
  const produtoExists = yield select((state) =>
    state.cart.find((p) => p.id === id),
  );

  if (produtoExists) {
    yield put(Actions.updateAmountRequest(id, produtoExists.amount + 1));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    yield put(
      Actions.addToCartSuccess({
        ...response.data,
        amount: 1,
        formattedPrice: formatPrice(response.data.price),
      }),
    );

    NavigationService.navigate('Cart');
  }
}

function* updateAmountRequest({ id, amount }) {
  if (amount <= 0) yield put(Actions.removeFromCart(id));

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount <= stockAmount) {
    yield put(Actions.updateAmountSuccess(id, amount));
  } else {
    Alert.alert('Quantidade solicitada fora de estoque');
  }
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCartRequest),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmountRequest),
]);
