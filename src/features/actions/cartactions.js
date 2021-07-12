export const add = (payload) => {
  return {
    type: "cart/add",
    payload,
  };
};

export const remove = (payload) => {
  return {
    type: "cart/remove",
    payload,
  };
};

export const increaseQuantity = (payload) => {
  return {
    type: "cart/increasequantity",
    payload,
  };
};

export const decreaseQuantity = (payload) => {
  return {
    type: "cart/decreasequantity",
    payload,
  };
};
