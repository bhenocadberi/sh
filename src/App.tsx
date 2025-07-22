import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LocationInput from './components/LocationInput';
import Map from './components/Map';
import ButtonGroup, { ButtonOption, jobOptions } from './components/ButtonGroup';

const JobOrderPage: React.FC<{ onSelect: (option: ButtonOption) => void }> = ({ onSelect }) => (
  <div>
    <h2>What is your situation?</h2>
    <h4>please select job order</h4>
    <ButtonGroup options={jobOptions} onSelect={onSelect} />
  </div>
);

const SubButtonPage: React.FC<{ options: ButtonOption[]; onSelect: (option: ButtonOption) => void }> = ({ options, onSelect }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <ButtonGroup options={options} onSelect={onSelect} />
    </div>
  );
};

const JobFormPage: React.FC<{ jobTitle: string }> = ({ jobTitle }) => (
  <div>
    <h3>Job Title: {jobTitle}</h3>
    <label>
      Date job needed:
      <input type="date" />
    </label>
    <br />
    <label>
      Time job needed:
      <input type="time" />
    </label>
    <br />
    <div>Display of price amount: <b>₱1234</b></div>
    <button>Book Job Order</button>
  </div>
);

const App: React.FC = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [selected, setSelected] = useState<ButtonOption | null>(null);
  const [subSelected, setSubSelected] = useState<ButtonOption | null>(null);
  const navigate = useNavigate();

  const handleLocationChange = (newLocation: string) => setLocation(newLocation);

const handleJobSelect = (option: ButtonOption) => {
  setSelected(option);
  setSubSelected(null); // Reset sub-selection
  if (option.next) {
    navigate('/sub');
  } else if (option.form) {
    navigate('/form');
  }
};

  const handleSubSelect = (option: ButtonOption) => {
    setSubSelected(option);
    if (option.next) {
      // For Aircon: go deeper
      setSelected(option);
      navigate('/sub');
    } else if (option.form) {
      setSelected(option);
      navigate('/form');
    }
  };

  return (
    <div>
      <h1>Choose location:</h1>
      <LocationInput onLocationChange={handleLocationChange} />
      <Map location={location} />
      {location && (
        <Routes>
          <Route path="/" element={<JobOrderPage onSelect={handleJobSelect} />} />
          <Route path="/sub" element={selected?.next ? <SubButtonPage options={selected.next} onSelect={handleSubSelect} /> : null} />
          <Route path="/form" element={<JobFormPage jobTitle={selected?.label || subSelected?.label || ''} />} />
        </Routes>
      )}
    </div>
  );
};

export default App;