import React, { useState } from 'react';

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState('Nadet');

  const increment = () => {
    setCounter(counter + 1);
  };

  let onChangeValue = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      {counter} <button onClick={increment}>Increment me</button>
      <p>
        <input
          placeholder="Merci de saisir quelque chose..."
          onChange={onChangeValue}
        />
        {inputValue}
      </p>
    </div>
  );
};

export default StateTutorial;
