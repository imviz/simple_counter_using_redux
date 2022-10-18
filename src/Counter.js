import React,{useEffect} from 'react'
import {Provider,useDispatch,useSelector} from 'react-redux'
import {inc,dec} from './ValueReducer'
import {getdatas} from './datafetch'


function Counter() {
    const val=useSelector((state) =>{
        return state;
      });



    const dispach=useDispatch()

    useEffect(() => {
      // dispach(getdatas())
   
    }, [])
    

console.log(val) 
  return (
    <div className="App">
        {/* <h1>;djkfljl;</h1>   */}

   
      <button >red</button><button>yellow</button><button>blue</button>
        <h1>welcome</h1>  
        <button style={{backgroundColor:'black',color:'white'}} onClick={()=>{
            dispach(inc())
        }} >inc</button>
        <h1>{val.value}</h1>
        <button style={{backgroundColor:'black',color:'white'}} onClick={()=>{
              dispach(dec())
        }} >dec</button>
        <button onClick={()=>{
          dispach({
            type:'reset'
          });
        }} >reset</button>
       {val.data.loading && <span style={{backgroundColor:'green'}}>loading </span> } 
       {val.data.error && <h5>{val.data.error}</h5> }
        <h5>{val.data.data.title}</h5>

        { val.show && <h5>fooolll</h5> }

  </div>

  )
}

export default Counter