import React, { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={incrementarContador}>Clique aqui</button>
    </div>
  );
};

export default Contador;