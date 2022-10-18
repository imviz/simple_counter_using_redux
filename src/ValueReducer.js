import {createSlice} from '@reduxjs/toolkit'
// ist set up slice and export the actions like inc and dec then create store using config store


const valueSlice=createSlice({
    name:'value',
    initialState:0,
    reducers:{
        'inc':(state,action)=>{
            return state+1
        },
        'dec':(state,action)=>{
            return state-1
 
        }
        
    },
    //except from the reducers
    extraReducers :{
        reset:()=>{
            return 0
        }
    }
});
export const {inc,dec} =valueSlice.actions;
export default valueSlice.reducer;