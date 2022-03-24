/** @format */

import { useState } from 'react';
import './App.css';
import Back from './components/Back';
import Front from './components/Front';

function App() {
  const [select, setSelect] = useState(null);
  const [finish, setFinish] = useState(false);

  const handleSelect = (num) => {
    setSelect(num);
  };

  return (
    <main className='App'>
      {finish ? (
        <Back select={select} />
      ) : (
        <Front
          handleSelect={handleSelect}
          select={select}
          setFinish={setFinish}
        />
      )}
    </main>
  );
}

export default App;
