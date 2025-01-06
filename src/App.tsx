import { useState } from 'react';
import './App.css';
import { InputParameters } from './components/InputParameters';
import { Life } from './components/Life';
import config from './config/default-config.json'
import { ServerComputing } from './components/ServerComputing';
import { Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ChartArea from './components/ChartArea';

type DataType = {
  dataKey: string,
  alive: number,
  dead: number,
}

function App() {
  const [areaSize, setAreaSize] = useState<number>(config["game-area-size"]);
  const [gameTicInterval, setGameTicInterval] = useState<number>(config["game-tic-interval"]);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [datas, setDatas] = useState<DataType[]>([]);

  function handleStartGame() {
    setStartGame(false);
    setTimeout(() => setStartGame(true), 0);
  }

  return (
    <div className="App" style={{
      display: 'flex', flexDirection: 'row',
      height: '100vh', justifyContent: 'center'
    }}>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        {startGame && <Life areaSize={areaSize} gameTicInterval={gameTicInterval} />}
        <ChartArea data={datas} />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        <InputParameters areaSize={areaSize} ticInterval={gameTicInterval}
          setAreaSize={setAreaSize} setTicInterval={setGameTicInterval} handleStartGame={handleStartGame} />

        <Button variant="contained"
          style={{ fontSize: '20px', backgroundColor: 'lightgreen', margin: "10px" }}
          onClick={() => handleStartGame()}
          endIcon={<RestartAltIcon />}>
          Start new Game
        </Button>

        <ServerComputing datas={datas} setDatas={setDatas}/>
      </div>
    </div>
  )
}

export default App;
