import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counterSlice = createSlice({
    name:"counter",
    initialState: initialState,
    reducers:{
        addNumber(state, action){
            if(parseInt(action.payload)%2 === 0){
                state.value = state.value + action.payload;
            }
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions;
export default store;