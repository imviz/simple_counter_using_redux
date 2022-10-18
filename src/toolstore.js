import {configureStore} from '@reduxjs/toolkit'
import ValueReducer from './ValueReducer'
import  datafetch  from './datafetch'

const store=configureStore({
    reducer:{
        value:ValueReducer,
        data:datafetch,
    }
})
export default store;