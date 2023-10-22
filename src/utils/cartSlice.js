import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:'cart',
    initialState:{
    items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            //Vanilla Redux(old redux ) do not mutate the state
            // const newState=[...state]
            // newState.items.push(action.payload);
            // return newState

            //Redux Toolkit uses Immer BTS
            // we have to mutate the state
state.items.push(action.payload)
        },
        removeItems:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            //RTK:either mutate the existing state or return new state
            state.items.length=0 //[]
            //or
           //return {items:[]}
        },

    },

}
)
export const {addItems,removeItems,clearCart}=cartSlice.actions
export default cartSlice.reducer