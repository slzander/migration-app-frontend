import React from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import sparrow from '../images/sparrow.png'

export default function ViewMap ({ mappedBirds }) {

        const birdIcon = L.icon({
            iconUrl: sparrow,
            iconSize: [60, 60],
            iconAnchor: [30, 30]
        })

        return(
            <Map id='map' center={[0, -80]} zoom={4}>
                <TileLayer
                    url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
                    attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                    detectRetina='true'
                    maxZoom='16'
                />
                <Marker position={[0, -80.0]} icon={birdIcon}></Marker>
            </Map>
        )
}