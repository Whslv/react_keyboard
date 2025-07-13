import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handleKeyPress = (e: React.KeyboardEvent) => {
      setKey(e.key);
    };

    addEventListener('keyup', handleKeyPress);

    return () => {
      removeEventListener('keyup', handleKeyPress);
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
