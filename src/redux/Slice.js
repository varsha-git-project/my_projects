import { createSlice } from '@reduxjs/toolkit';
import { cart_data } from '../data/Cart';


export const productSlice = createSlice(
    {
        name: "products",
        initialState:
        {

            prod_state: cart_data,
        },
        reducers:
        {
            add_to_cart: (state, action) => {
                const item_index = state.prod_state.findIndex((item) => item.id === action.payload.id);
                // console.log(item_index);
                if (item_index >= 0) {
                    state.prod_state[item_index].quantity += 1;

                }
                else {
                    state.prod_state = [...state.prod_state, action.payload];
                }


            },

            del_from_cart: (state, action) => {
                state.prod_state.splice(action.payload, 1);
            },

            decrease: (state, action) => {
                const item_index = state.prod_state.findIndex((item) => item.id === action.payload.id);
                const quantity= state.prod_state[item_index].quantity;

                if(quantity !== 1)
                {
                state.prod_state[item_index].quantity -= 1;

                }

                else 
                {
                state.prod_state.splice(item_index, 1);

                }







            }
        }
    }
);

export default productSlice.reducer;
 export const { add_to_cart, del_from_cart, decrease } = productSlice.actions;