import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

// name  //  function   it return a promise
const getdatas=createAsyncThunk('api/data',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res)=>{
        return res.data
    })
})


const dataInfoSlice=createSlice({
    name:'data',
    initialState:{
        data:[],
        loading:false,
        error:''
    },
    extraReducers:{
        [getdatas.pending]:(state,action)=>{
            state.loading=true;
        },
        [getdatas.fulfilled]:(state,action)=>{
            state.loading=false;
            state.data=action.payload
            console.log(action.payload)
        },
        [getdatas.rejected]:(state,action)=>{
            state.error='error occured'
            state.loading=false
        }
    }

});

export {getdatas}
export default dataInfoSlice.reducer;