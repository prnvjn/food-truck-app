/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker,Popup,Circle } from 'react-leaflet'
import L from 'leaflet'
import Recenter from "./Recenter"
import { TruckLocation } from './TruckLocation'
export const Map = ({userCords,fetchedData}) => {

const icon = L.icon({
  iconUrl:'../../public/marker-icon.png',
  shadowUrl:"../../public/marker-shadow.png",
  // iconSize:     [25, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -46], // point from which the popup should open relative to the iconAnchor
  iconSize: [30, 40],
  iconAnchor: [12, 40],
})




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

<Marker position={[userCords.lat,userCords.lng] }  zIndexOffset={100} icon={icon}> 
      <Popup>
        User
      </Popup>
    </Marker>

  </MapContainer>

</div>
  )
}
