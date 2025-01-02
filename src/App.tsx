import { useEffect, useState } from 'react';
import './App.css';
import { InputParameters } from './components/InputParameters';
import { Life } from './components/Life';
import config from './config/default-config.json'
import { ServerComputing } from './components/ServerComputing';


function App() {
  const [areaSize, setAreaSize] = useState<number>(config["game-area-size"]);
  const [gameTicInterval, setGameTicInterval] = useState<number>(config["game-tic-interval"]);
  const [startGame, setStartGame] = useState<boolean>(false);

  useEffect(() => {setAreaSize(areaSize)}, [startGame])

  function handleStartGame() {
    setStartGame(false);
    setTimeout(() => setStartGame(true), 0);

  }

  return (
    <div className="App" style={{display:'flex', flexDirection:'row'}}>
      {startGame && <Life areaSize={areaSize} gameTicInterval={gameTicInterval}/>}
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
        <InputParameters areaSize={areaSize} ticInterval={gameTicInterval} 
              setAreaSize={setAreaSize} setTicInterval={setGameTicInterval} />
        <button style={{fontSize:'20px', backgroundColor:'lightgreen'}} onClick={() => handleStartGame()}>Start new Game</button>
        <ServerComputing />
      </div>
    </div>
  )
}

export default App;
