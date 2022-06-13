import React, { useLayoutEffect, useEffect, useRef } from 'react';

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = 'Hello';
  }, []);

  return (
    <div>
      <div className="App">
        <input
          ref={inputRef}
          value="Nadet"
          style={{ width: 200, height: 50 }}
        />
      </div>
    </div>
  );
}

export default LayoutEffectTutorial;
