import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'

const initial={
    value:0,
    show:true,
}
const reducer=combineReducers({
    value :valueReducer,
    show:showReducer,
    dataInfo,
})


// function reducer(state=initial,action){

//     return {
//         value:valueReducer(state.value,action),
//         show:showReducer(state.show,action)
//     }
   
//     }
  
   
function showReducer(state=false,action){
    switch (action.type ){
        case 'show':
            return action.payload
            
        default:
            return state
    }

}

function valueReducer(state=0,action){
    switch (action.type ){
        case 'inc':
            console.log('what');
            return state+1 ;
            

        
        case 'dec':
            console.log('what');
            return state -1 ;
           
        default:
            return state;
        }

}
function dataInfo(state={
    data :[],
    error:' ',
    loading:' ',
    },action){
    switch (action.type){
        case 'set-data':
            return {
                ...state,
                data:action.payload,
            }
        case 'loading':
            return {
                ...state,
                loading:action.payload,
            }
        case 'error':
            return {
                ...state,
                error:action.payload,
            }
    }
}



function setData(data){
    return{
        type:'set-data',
        payload:data
    }
}
function setError(data){
    return{
        type:'error',
        payload:data
    }
}
function setLoading(data){
    return{
        type:'loading',
        payload:data
    }
}
const stores =  createStore(reducer ,applyMiddleware(logger))

export  default stores;

export {
    setData,setError,setLoading
}