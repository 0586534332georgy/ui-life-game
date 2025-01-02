import { useState } from 'react';
import './App.css';
import { InputParameters } from './components/InputParameters';
import { Life } from './components/Life';
import config from './config/default-config.json'


function App() {
  const [areaSize, setAreaSize] = useState<number>(config["game-area-size"]);
  const [gameTicInterval, setGameTicInterval] = useState<number>(config["game-tic-interval"]);
  return (
    <div className="App" style={{display:'flex', flexDirection:'row'}}>
      <Life areaSize={areaSize} gameTicInterval={gameTicInterval}/>
      <InputParameters areaSize={areaSize} ticInterval={gameTicInterval} 
            setAreaSize={setAreaSize} setTicInterval={setGameTicInterval} />
    </div>
  )
}

export default App;
