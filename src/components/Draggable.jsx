import { useMapEvent,Marker, Popup } from 'react-leaflet'
import { useState } from 'react'
function Draggable({userCords,setUserCords}) {
const [user,setUser]=useState(userCords)
    const map = useMapEvent('click',(e)=>{
        map.setView(e.latlng)
        setUser(e.latlng)
        setUserCords(e.latlng)
        console.log(user,"target")
    })
    console.log(":map",map)

  return (<>
  {(user!=null)?
    <Marker position={[user.lat,user.lng]} >
    <Popup>
      User
    </Popup>
  </Marker>:null
  }
  </>
 
  )
}

export default Draggable