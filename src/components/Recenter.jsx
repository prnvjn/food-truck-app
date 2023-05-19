
import { useMap } from "react-leaflet"
// based on the updated user co-ordinates relocates the map 
export default function MyComponent(props) {
    const map = useMap()
    // eslint-disable-next-line react/prop-types
    map.setView([props.lat,props.lng])
    return null
  }