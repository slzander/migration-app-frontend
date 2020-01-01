import React from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import sparrow from '../images/sparrow.png'
import sandpiper from '../images/sandpiper.png'

export default function ViewMap ({ mappedBirds, month }) {
    const sparrowIcon =  L.icon({
            iconUrl: sparrow,
            iconSize: [20, 20],
            iconAnchor: [30, 30]
        })
    const sandpiperIcon = L.icon({
            iconUrl: sandpiper,
            iconSize: [20, 20],
            iconAnchor: [30, 30]
        })

    function showBirds () {
        return mappedBirds.map(bird => {
            if (month === 0){
                return <Marker 
                    position={[bird.locations[0].latitude, bird.locations[0].longitude]}
                    icon={sandpiperIcon}>
                    </Marker>
            } else if (month === 1){
                return <Marker 
                    position={[bird.locations[1].latitude, bird.locations[1].longitude]}
                    icon={sandpiperIcon}>
                    </Marker>
            } else if (month === 2){
                return <Marker 
                    position={[bird.locations[2].latitude, bird.locations[2].longitude]}
                    icon={sandpiperIcon}>
                    </Marker>
            } else if (month === 3){
                return <Marker 
                    position={[bird.locations[3].latitude, bird.locations[3].longitude]}
                    icon={sandpiperIcon}>
                    </Marker>
            } else if (month === 4){
                return <Marker 
                    position={[bird.locations[4].latitude, bird.locations[4].longitude]}
                    icon={sandpiperIcon}>
                    </Marker>
            } else if (month === 5){
                return <Marker 
                    position={[bird.locations[5].latitude, bird.locations[5].longitude]}
                    icon={sandpiperIcon}>
                    </Marker>
            } else if (month === 6){
                return <Marker 
                    position={[bird.locations[6].latitude, bird.locations[6].longitude]}
                    icon={sandpiperIcon}>
                    </Marker>
            } else if (month === 7){
                return <Marker 
                    position={[bird.locations[7].latitude, bird.locations[7].longitude]}
                    icon={sandpiperIcon}>
                    </Marker>
            } else if (month === 8){
                return <Marker 
                    position={[bird.locations[8].latitude, bird.locations[8].longitude]}
                    icon={sandpiperIcon}>
                    </Marker>
            } else if (month === 9){
                return <Marker 
                    position={[bird.locations[9].latitude, bird.locations[9].longitude]}
                    icon={sandpiperIcon}>
                    </Marker>
            } else if (month === 10){
                return <Marker 
                    position={[bird.locations[10].latitude, bird.locations[10].longitude]}
                    icon={sandpiperIcon}>
                    </Marker>
            } else {
                return <Marker 
                    position={[bird.locations[11].latitude, bird.locations[11].longitude]}
                    icon={sandpiperIcon}>
                    </Marker>
                }
        })
    }


    // function showBirds () {
    //     return mappedBirds.map(bird => {
    //         if (bird.name === 'Upland Sandpiper'){   
    //             return bird.locations.map(location => {
    //                 return <Marker 
    //                     position={[location.latitude, location.longitude]}
    //                     icon={sandpiperIcon}>
    //                     </Marker>
    //             })
    //         } else {
    //             return bird.locations.map(location => {
    //                 return <Marker 
    //                     position={[location.latitude, location.longitude]}
    //                     icon={sparrowIcon}>
    //                     </Marker>
    //             })
    //         }
    //     })
    // }

    return(
        <Map id='map' center={[10, -80]} zoom={3}>
            <TileLayer
                url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
                attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                detectRetina='true'
                maxZoom='16'
            />
            {showBirds()}
        </Map>
    )
}