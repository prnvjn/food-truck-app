import { useState, useEffect } from 'react'
import data from '../data.json'
import './leaflet.css'
import L,{latLng} from 'leaflet'
import './App.css'
import axios from 'axios'

import { Map } from './components/Map'


function App() {
  let x =latLng(37.7749, -122.4194)
const [inputVal,setInputVal]=useState("")
const [postalCode,setPostalCode]=useState("")
  const [fetchedData, setFetchedData] = useState([])
  const [userCords,setUserCords] = useState(x)
  const key = import.meta.env.VITE_TOKEN






// fetch data from dataset 
  useEffect(()=>{
    const getData = async()=>{
      try{
        const data = await axios.get("https://data.sfgov.org/resource/rqzj-sfat.json",{
          params:{
            $$app_token :key,
            status: 'APPROVED'
          }

        })
setFetchedData(data.data)
      }catch(error){
        console.log(error)
      }
        
    }

getData()

  },[])




const getUserLocation = ()=>{if (!navigator.geolocation) {
  alert("Geolocation is not supported by your browser")
} else {
  console.log("Locating…")
  navigator.geolocation.getCurrentPosition((position)=>{setUserCords(latLng(position.coords.latitude,position.coords.longitude))
  
});
}}

useEffect(()=>{
  const getPostalCoord = async()=>{
  try{
    if(postalCode.length != 0){ 

      const data = await axios.get('https://nominatim.openstreetmap.org/search.php?q=$&countrycodes=us&format=jsonv2', 
      {params:{
        q:postalCode,
        countrycodes:"us",
        format:"jsonv2"
   }})
   
   setUserCords(latLng(data.data[0].lat,data.data[0].lon))}
  }
   catch(error){
     console.log(error,"error")
   }
   
 }
 getPostalCoord()
},[postalCode])
  
  return (
    <div className='container' >
      <h1>Find Food Trucks in 🌁</h1>
      <div className='inputs'>
        <div className='pincode'>
        <input type="text" pattern="[0-9]*" placeholder='Enter a Pincode xxxxx' onChange={(e)=>{setInputVal(e.target.value)}} value={inputVal}/> 
      <button onClick={()=>{setPostalCode(inputVal)
      setInputVal("")
      }} >Submit</button>
        </div>
      
      test
      94111


     <button onClick={getUserLocation}>Get Your location</button>

      </div>


   



<Map userCords={userCords} fetchedData={fetchedData}/>
    </div>
  )
}

export default App
