export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_REQUEST':
      console.tron.log('sss');
      return state;

    default:
      return state;
  }
}
