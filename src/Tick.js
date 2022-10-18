import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
function Tick() {
    const val=useSelector((state)=>{
        return state.show;
    })
    // console.log(val)
    const dispach=useDispatch ()
    
    const handle =(e)=>{
        console.log(e.target.value)
        const check=e.target.checked        
            dispach({
                type:'show',
                payload:check,
            })
       
    }
  return (
    <div>Tick
           <input type='checkbox' onChange={handle} checked={val}  />
    </div>
    
  )
}

export default Tick