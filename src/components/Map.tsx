import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L, { LeafletMouseEvent } from 'leaflet';

type MapProps = {
    location: string | null;
};

const defaultPosition: [number, number] = [14.5995, 120.9842]; // Example: Manila

const PinMap: React.FC<{ onPin: (lat: number, lng: number) => void }> = ({ onPin }) => {
    useMapEvents({
        click(e: LeafletMouseEvent) {
            onPin(e.latlng.lat, e.latlng.lng);
        },
    });
    return null;
};


const Map: React.FC<MapProps> = ({ location }) => {
    const [pin, setPin] = useState<[number, number] | null>(null);

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <MapContainer center={defaultPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <PinMap onPin={(lat, lng) => setPin([lat, lng])} />
                {pin && <Marker position={pin} icon={L.icon({ iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', iconSize: [25, 41], iconAnchor: [12, 41] })} />}
            </MapContainer>
            {pin && (
                <div>
                    <p>Pinned at: {pin[0].toFixed(5)}, {pin[1].toFixed(5)}</p>
                </div>
            )}
        </div>
    );
};

export default Map;