import React, { useState } from 'react';

function DemoExam({ options }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setSelectedOptions((prevSelectedOptions) =>
      checked
        ? [...prevSelectedOptions, value] // Add option to selectedOptions
        : prevSelectedOptions.filter((option) => option !== value) // Remove option from selectedOptions
    );
  };

  return (
    <div>
      <h1>Select Options:</h1>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={`option-${index}`}
            value={option}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
      <h2>Selected Options:</h2>
      <ul>
        {selectedOptions.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
}


export default DemoExam;
