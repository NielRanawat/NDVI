import React , {useState} from 'react';
import MapComponent from './MapComponent';

export default function App() {
    const [coordinates , setCoordinates] = useState(null);
    return (
        <div>
            <MapComponent setCoordinates={setCoordinates} />
            {coordinates && (
                <div>
                    <h2>Selected Coordinates</h2>
                    <p>Lat: {coordinates.lat}, Lng: {coordinates.lng}</p>
                </div>
            )}
        </div>
    )
}
