import { event } from 'cypress/types/jquery';
import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handlKeyPress = (event: React.KeyboardEvent) => {
      setKey(event.key);
    };
    document.addEventListener('keyup', handlKeyPress);

    return () => {
      document.removeEventListener('keyup', handlKeyPress);
    };
  }, []);

  return (
    <div className="App">
      {key === '' ? (
        <p className="App__message">Nothing was pressed yet</p>
      ) : (
        <p className="App__message">The last pressed key is [{key}]</p>
      )}
    </div>
  );
};
