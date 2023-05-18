/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import {Marker,Popup} from 'react-leaflet'
import L,{latLng, distanceTo} from 'leaflet'

export const TruckLocation = ({markerData,user,key}) => {
let lat = Number(markerData.latitude)
let lng = Number(markerData.longitude)
let truckName = markerData.applicant
let truckCoords = latLng(lat,lng)
let distance = user.distanceTo(truckCoords)

const svgIcon = L.divIcon({
  html: `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#818cf8" stroke="#fef2f2" class="w-6 h-6">
  <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
</svg>


`,
  className: "",
  iconSize: [30, 30],
  iconAnchor: [12, 40],
})



  return (
    <div key={key}>
        {distance<=3218.69?
        <Marker position={[lat,lng]} icon={svgIcon} >
    <Popup>
      {truckName}
    </Popup>
  </Marker>:null}

    </div>
    
  )
}
