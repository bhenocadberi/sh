import React, { useState } from 'react';
import LocationInput from './components/LocationInput';
import Map from './components/Map';
import ButtonGroup from './components/ButtonGroup';

const App: React.FC = () => {
    const [location, setLocation] = useState<string | null>(null);

    const handleLocationChange = (newLocation: string) => {
        setLocation(newLocation);
    };

    return (
        <div>
            <h1>Choose location:</h1>
            <LocationInput onLocationChange={handleLocationChange} />
            <Map location={location} />
            {location && <ButtonGroup isLocationPinned={!!location} />}

        </div>
    );
};

export default App;