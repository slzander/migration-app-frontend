import React from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default class Map extends React.Component {
    
    componentDidMount(){
        const map = L.map('map', {
            center: [0, -80],
            zoom: 4
        })

        L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            detectRetina: true,
            maxZoom: 10,
            attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        }).addTo(map)


        // why is marker not working?

        const birdIcon = L.icon({
            iconUrl: '../sparrow.png',
            iconsize: [1500, 1500],
            iconAnchor: [1, 1],
            popupAnchor: [-3, -76]
        })

        L.marker([80, -80], { icon: birdIcon }).addTo(map)
    }

    render(){
        return(
            <div id='map'></div>
        )
    }
}