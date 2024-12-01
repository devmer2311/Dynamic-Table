import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const parsedData = JSON.parse(input); 
      if (Array.isArray(parsedData)) {
        setData(parsedData); 
      } else {
        alert('Please enter a valid array of objects');
      }
    } catch (error) {
      alert('Invalid JSON format');
    }
  };

  
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="app">
      <h1>Dynamic Table Generator</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder='Enter an array of objects, e.g., [{"column1":"data","column2":"data",..}, ...]'
          rows="5"
          style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
        />
        <button type="submit" className="button">Generate Table</button>
      </form>

      {data.length > 0 && (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((header, colIndex) => (
                    <td key={colIndex}>{row[header]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
