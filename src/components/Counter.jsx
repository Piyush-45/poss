import React from 'react'
import "../index.css"

const Counter = ({onAdd, onRemove}) => {
  return (
    <div className='counter' style={{display:'flex',  marginInline:'1rem'}}>
        <div className="plus" onClick={()=> onAdd()}>+</div>
        <div className="minus"  onClick={()=> onRemove()} style={{marginLeft:"1rem"}}>-</div>
        </div>
  )
} 

export default Counter