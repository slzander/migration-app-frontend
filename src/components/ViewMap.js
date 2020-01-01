import React from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import buttonBlue from '../images/buttonBlue.png'
import buttonRed from '../images/buttonRed.png'


export default function ViewMap ({ mappedBirds, month }) {

    function showBirds () {
        return mappedBirds.map(bird => {
            if (bird.name === 'Upland Sandpiper'){
                return <Marker 
                position={[bird.locations[month].latitude, bird.locations[month].longitude]}
                icon={L.icon({
                    iconUrl: buttonBlue,
                    iconSize: [20, 20],
                    iconAnchor: [10, 10]
                    })}>
                </Marker>
            } else {
                return <Marker 
                position={[bird.locations[month].latitude, bird.locations[month].longitude]}
                icon={L.icon({
                    iconUrl: buttonRed,
                    iconSize: [20, 20],
                    iconAnchor: [10, 10]
                    })}>
                </Marker>
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