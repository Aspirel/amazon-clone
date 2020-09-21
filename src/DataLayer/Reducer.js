export const initialState = {
  basket: [],
  user: null,
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
    case "REMOVE_FROM_BASKET":
      /**
       * Since ID's can be repeated in some cases, I'll search by index
       * where the "action.id" is basically the click event.
       * It'll then compared the basketItem passed as a parameter and
       * compare it to the clicked item id.
       */
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //temporary new basket
      let newBasket = [...state.basket];

      if (index >= 0) {
        //goes inside the basket and removes the first occurance of the item that matches.
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}). It's not in the basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
