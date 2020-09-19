export const initialState = {
  basket: [],
};

/* SELECTOR.
 * Reduce maps/iterates the basket and adds the total amount.
 * Has an initial "amount", and iterate each "item".
 * Everytimes it looks throught it gets the "item.price" + the "amount".
 * Initial amount is "0"
 * This function does not need to be in here, but since the basket itself is here, it makes sense.
 */
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        //returns what what was previously in the basket + the item selected
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
