/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker,Popup,Circle } from 'react-leaflet'
import Recenter from "./Recenter"
import { TruckLocation } from './TruckLocation'
export const Map = ({userCords,fetchedData}) => {
  return (
    <div className='map' >

    <MapContainer center={[userCords.lat,userCords.lng]} zoom={12} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Recenter lat={userCords.lat} lng={userCords.lng}/>
    <Circle
              center={[userCords.lat,userCords.lng]}
              pathOptions={{ fillColor: '#93c5fd' }}
              radius={3300}
            />
    
    {fetchedData.map((truck)=><TruckLocation markerData={truck} user={userCords} key={truck.id}/>
    )}
<Marker position={[userCords.lat,userCords.lng] } zIndexOffset={100}>
      <Popup>
        User
      </Popup>
    </Marker>

  </MapContainer>

</div>
  )
}
