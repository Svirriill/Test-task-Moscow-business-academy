import React from 'react';
import './App.css';
import Blocks from '../Blocks/Blocks.js';
import { api } from '../../utils/api';

function App() {
  const [block, setBlock] = React.useState([]);
  React.useEffect(() => {
      Promise.all([api.getData()])
        .then((res) => {
          setBlock(res[0].data);
        })
        .catch((err) => console.log(err));
  });

  return (
  <div className='app'>
    <h1 className='app__title'>Специализированные дисциплины</h1>
    <Blocks 
    block={block}
    />
  </div>
  )}

export default App;
