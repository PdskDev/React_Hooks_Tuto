import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EffectTutorial = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[100].email);
        console.log("Appel de l'API");
      });
  }, []);

  return (
    <div>
      UseEffect Tuto
      <p>The email is {data}</p>
    </div>
  );
};

export default EffectTutorial;
