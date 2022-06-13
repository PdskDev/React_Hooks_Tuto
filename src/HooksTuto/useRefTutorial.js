import React, { useRef } from 'react';

const RefTutorial = () => {
  const inputRef = useRef(null);
  const HandleClick = () => {
    alert(`Vous avez saisi ${inputRef.current.value}`);
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Nadet</h1>
      <input type="text" placeholder="Saisir ton prénom" ref={inputRef} />
      <button onClick={HandleClick}>Changer le nom</button>
    </div>
  );
};

export default RefTutorial;
