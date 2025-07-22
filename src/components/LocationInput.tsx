import React, { useState } from 'react';

type LocationInputProps = {
    onLocationChange: (newLocation: string) => void;
};

const LocationInput: React.FC<LocationInputProps> = ({ onLocationChange }) => {
    const [input, setInput] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        onLocationChange(e.target.value);
    };

    return (
        <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Enter location"
        />
    );
};

export default LocationInput;