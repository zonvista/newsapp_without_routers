import React from 'react'
import { useState } from 'react';

const optionsMap = {
    'USA': ['North America', 'South America'],
    'Europe': ['Germany', 'Britain'],
    'Asia': ['India', 'China'],
  };
  
  const countrySideOptions = ['East', 'West', 'North', 'South', 'Central'];
  
  const stateOptionsMap = {
    'North America': {
      'East': ['New York', 'California'],
      'West': ['Texas', 'Florida'],
      'North': ['Washington', 'Oregon'],
      'South': ['Arizona', 'Nevada'],
      'Central': ['Kansas', 'Nebraska'],
    },
    'South America': {
      'East': ['Buenos Aires', 'Santiago'],
      'West': ['Lima', 'Bogota'],
      'North': ['Caracas', 'Quito'],
      'South': ['Montevideo', 'Asuncion'],
      'Central': ['La Paz', 'Sucre'],
    },
    'Germany': {
      'East': ['Berlin', 'Hamburg'],
      'West': ['Munich', 'Frankfurt'],
      'North': ['Stuttgart', 'Dusseldorf'],
      'South': ['Leipzig', 'Dortmund'],
      'Central': ['Essen', 'Bremen'],
    },
    'Britain': {
      'East': ['London', 'Manchester'],
      'West': ['Birmingham', 'Liverpool'],
      'North': ['Leeds', 'Sheffield'],
      'South': ['Bristol', 'Coventry'],
      'Central': ['Leicester', 'Edinburgh'],
    },
    'India': {
      'East': ['Delhi', 'Mumbai'],
      'West': ['Bangalore', 'Hyderabad'],
      'North': ['Chennai', 'Pune'],
      'South': ['Kolkata', 'Jaipur'],
      'Central': ['Lucknow', 'Kanpur'],
    },
    'China': {
      'East': ['Beijing', 'Shanghai'],
      'West': ['Guangzhou', 'Shenzhen'],
      'North': ['Chengdu', 'Wuhan'],
      'South': ['Nanjing', 'Hangzhou'],
      'Central': ['Tianjin', 'Xi\'an'],
    }
  };
  
export default function Home() {
    const [region, setRegion] = useState('');
    const [country, setCountry] = useState('');
    const [countrySide, setCountrySide] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [submittedData, setSubmittedData] = useState([]);
  
    const handleRegionChange = (e) => {
      setRegion(e.target.value);
      setCountry('');
      setCountrySide('');
      setState('');
      setCity('');
    };
  
    const handleCountryChange = (e) => {
      setCountry(e.target.value);
      setCountrySide('');
      setState('');
      setCity('');
    };
  
    const handleCountrySideChange = (e) => {
      setCountrySide(e.target.value);
      setState('');
      setCity('');
    };
  
    const handleStateChange = (e) => {
      setState(e.target.value);
      setCity('');
    };
  
    const handleCityChange = (e) => {
      setCity(e.target.value);
    };
  
    const handleSubmit = () => {
      const newEntry = { region, country, countrySide, state, city };
      setSubmittedData([...submittedData, newEntry]);
      setRegion('');
      setCountry('');
      setCountrySide('');
      setState('');
      setCity('');
    };
  
    const boxStyle = {
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '20px',
      borderRadius: '5px',
    };
  
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={boxStyle}>
          <h3>Region</h3>
          {Object.keys(optionsMap).map(option => (
            <div key={option} style={{ marginBottom: '5px' }}>
              <input
                type="radio"
                id={option}
                name="region"
                value={option}
                onChange={handleRegionChange}
                checked={region === option}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
  
        {region && (
          <div style={boxStyle}>
            <h3>Country</h3>
            {optionsMap[region].map(option => (
              <div key={option} style={{ marginBottom: '5px' }}>
                <input
                  type="radio"
                  id={option}
                  name="country"
                  value={option}
                  onChange={handleCountryChange}
                  checked={country === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        )}
  
        {country && (
          <div style={boxStyle}>
            <h3>Country Side</h3>
            {countrySideOptions.map(option => (
              <div key={option} style={{ marginBottom: '5px' }}>
                <input
                  type="radio"
                  id={option}
                  name="countrySide"
                  value={option}
                  onChange={handleCountrySideChange}
                  checked={countrySide === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        )}
  
        {countrySide && (
          <div style={boxStyle}>
            <h3>States</h3>
            {stateOptionsMap[country][countrySide].map(option => (
              <div key={option} style={{ marginBottom: '5px' }}>
                <input
                  type="radio"
                  id={option}
                  name="state"
                  value={option}
                  onChange={handleStateChange}
                  checked={state === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        )}
  
        {state && (
          <div style={boxStyle}>
            <h3>City</h3>
            <input
              type="text"
              id="city-name"
              name="city-name"
              placeholder="Enter city name"
              value={city}
              onChange={handleCityChange}
              style={{ padding: '5px', width: 'calc(100% - 10px)' }}
            />
          </div>
        )}
  
        {state && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <button type="button" onClick={handleSubmit} style={{ padding: '10px 20px', fontSize: '16px' }}>
              Submit
            </button>
          </div>
        )}
        {submittedData.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h3>Submitted Data</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ccc', padding: '8px' }}>Region</th>
                  <th style={{ border: '1px solid #ccc', padding: '8px' }}>Country</th>
                  <th style={{ border: '1px solid #ccc', padding: '8px' }}>Country Side</th>
                  <th style={{ border: '1px solid #ccc', padding: '8px' }}>State</th>
                  <th style={{ border: '1px solid #ccc', padding: '8px' }}>City</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((data, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{data.region}</td>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{data.country}</td>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{data.countrySide}</td>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{data.state}</td>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{data.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
}