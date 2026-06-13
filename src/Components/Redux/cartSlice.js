import { createSlice } from "@reduxjs/toolkit";

const cartState ={
    cart :[],
    users :{
        active:false,
    },
    
}

export const cartSlice = createSlice({
    name :"cart",
    initialState: cartState ,
    reducers:{
        addToCart:(state , action)=>{
            state.cart.push(action.payload)
        },
        removeFromCart:(state , action)=>{
            state.cart.splice(action.payload , 1)
        },
        log:(state , action)=>{
            state.users = {active:true,
                users: action.payload}
        },
        out:(state )=>{
            state.users = {active:false,
                users: {}}
        }
    }
})