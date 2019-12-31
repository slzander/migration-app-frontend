import React from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import sparrow from '../images/sparrow.png'
import sandpiper from '../images/sandpiper.png'

export default function ViewMap ({ mappedBirds }) {
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

    // make function: setInterval(() => changeCounter(i), 1000)

    function showBirds () {
        return mappedBirds.map(bird => {
            console.log(bird)
            if (bird.name === 'Upland Sandpiper'){
                return bird.locations.map(location => {
                    return <Marker 
                        position={[location.latitude, location.longitude]}
                        icon={sandpiperIcon}>
                        </Marker>
                })
            } else {
                return bird.locations.map(location => {
                    return <Marker 
                        position={[location.latitude, location.longitude]}
                        icon={sparrowIcon}>
                        </Marker>
                })
            }
        })
    }

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