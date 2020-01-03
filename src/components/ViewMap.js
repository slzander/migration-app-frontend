import React from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import buttonBlue from '../images/buttonBlue.png'
import buttonRed from '../images/buttonRed.png'
import buttonGray from '../images/buttonGray.png'
import buttonYellow from '../images/buttonYellow.png'


export default function ViewMap ({ mappedBirds, currentMonth, changePause, pauseClicked }) {
    // const months = [
    //     'January',
    //     'February',
    //     'March',
    //     'April',
    //     'May',
    //     'June',
    //     'July',
    //     'August',
    //     'September',
    //     'October',
    //     'November',
    //     'December'
    // ]

    function showBirds () {
        return mappedBirds.map(bird => {
            if (bird.name === 'Upland Sandpiper'){
                return <Marker 
                    key={bird.tag}
                    position={[bird.locations[currentMonth].latitude, 
                        bird.locations[currentMonth].longitude]
                    }
                    icon={L.icon({
                        iconUrl: buttonBlue,
                        iconSize: [15, 15],
                        iconAnchor: [10, 10]
                    })}>
                    <Popup>{bird.name}<br />{bird.tag}</Popup>
                </Marker>
            } else if (bird.name === 'Grasshopper Sparrow'){
                return <Marker
                    key={bird.tag}
                    position={
                        [bird.locations[currentMonth].latitude, 
                        bird.locations[currentMonth].longitude]
                        }
                    icon={L.icon({
                        iconUrl: buttonRed,
                        iconSize: [15, 15],
                        iconAnchor: [10, 10]
                        })}>
                    <Popup>{bird.name}<br />{bird.tag}</Popup>
                </Marker>
            } else if (bird.name === 'Golden Eagle'){
                return <Marker 
                    key={bird.tag}
                    position={
                        [bird.locations[currentMonth].latitude, 
                        bird.locations[currentMonth].longitude]
                        }
                    icon={L.icon({
                        iconUrl: buttonGray,
                        iconSize: [15, 15],
                        iconAnchor: [10, 10]
                        })}>
                    <Popup>{bird.name}<br />{bird.tag}</Popup>
                </Marker>
            } else {
                return <Marker
                    key={bird.tag}
                    position={
                        [bird.locations[currentMonth].latitude, 
                        bird.locations[currentMonth].longitude]
                        }
                    icon={L.icon({
                        iconUrl: buttonYellow,
                        iconSize: [15, 15],
                        iconAnchor: [10, 10]
                        })}>
                    <Popup>{bird.name}<br />Tag#: {bird.tag}</Popup>
                </Marker>
            }
        })
    }
 
    // function showMonth () {
    //     if (mappedBirds.length !== 0){
    //         return (
    //             <div id='show-month-div'>
    //                 <h2>{months[currentMonth]}</h2>
    //                 <button onClick={changePause}>
    //                     {pauseClicked ? 'Stop Migration': 'Start Migration'}
    //                 </button>
    //             </div>
    //         )
    //     }
    // }

    return(
        <div>
            {/* <div id='map-header'>
                <h2>-</h2>
                {showMonth()}
            </div> */}
            <Map id='map' center={[10, -80]} zoom={3}>
                <TileLayer
                    url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    detectRetina='true'
                    maxZoom='16'
                />
                {showBirds()}
            </Map>
        </div>
    )
}