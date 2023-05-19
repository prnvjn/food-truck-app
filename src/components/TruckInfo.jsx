import React from 'react'

export const TruckInfo = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.addr?  <p><strong>Address:</strong>  {props.addr}</p>: null}
  <strong>Menu: </strong>
    <ul> 
      {props.menu.map((item)=> <li key={item} >{ item.trim()}</li> )}
    </ul>
    </div>

  )
}
