function cartreducer(state = [], { type, payload }) {
  switch (type) {
    case "cart/remove":
      return state.filter((item) => item.id !== payload.id);
    case "cart/add":
      if (state.length === 0) {
        return [...state, payload];
      } else {
        return state.find((item) => item.id === payload.id) === undefined
          ? [...state, payload]
          : state;
      }

    case "cart/increasequantity":
      return state.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            price: item.price / item.quantity + item.price,
            quantity: item.quantity + 1,
          };
        } else return item;
      });
    case "cart/decreasequantity":
      return state.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            quantity: item.quantity - 1 > 0 ? item.quantity - 1 : 0,
            price: item.price > 0 ? item.price - item.price / item.quantity : 0,
          };
        } else return item;
      });
    default:
      return state;
  }
}

export default cartreducer;
