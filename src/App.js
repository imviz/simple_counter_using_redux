import './App.css';
import React,{useReducer, useRef, useState} from 'react';
import {Provider,useDispatch,useSelector} from 'react-redux'
import store from './toolstore';
// import stores from './store';
import Counter from './Counter';
import Tick from './Tick';
// function redi(state,action){
//   switch(action.type){
  
//     case 'counter':
//       return {
//         ...state,
//         count:state.count+action.payload
//       }
//     case 'color':
//       return {
//         ...state,
//         clr:state.clr=action.payload  
//       }
//       default:
//         return state ;
      

//   }
  
// }

function App() {
// const [redu,dispach]=useReducer(redi,{
//   count:0,
//   clr:'red'
// })
const [show,setShow]=useState(false)
 const onHandle=()=>{
  if (show){
    setShow(false)
  }else{
    setShow(true)   
  }
  
 }

  return (
            <Provider store={store} >
              <button onClick={onHandle} >click</button>
           
              { show ?  <>
              <h1>hhhhh</h1>
                <Counter />
              </> 
                  : <>
                  <h1>kkkk</h1>                
                  <Tick />
                  </>  }
                 
            </Provider>
  );
}

export default App;
