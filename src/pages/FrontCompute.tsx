import { InputParameters } from "../components/InputParameters";
import { Life } from "../components/Life";
import { useState } from "react";
import config from '../config/default-config.json'
import { Button } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export const FrontCompute: React.FC = () => {
    const [areaSize, setAreaSize] = useState<number>(config["game-area-size"]);
    const [gameTicInterval, setGameTicInterval] = useState<number>(config["game-tic-interval"]);
    const [startGame, setStartGame] = useState<boolean>(false);

    function handleStartGame() {
        setStartGame(false);
        setTimeout(() => setStartGame(true), 0);
    }

    return (
        <div className="FrontCompute" style={{
            display: 'flex', flexDirection: 'row',
            height: '100vh', justifyContent: 'space-around'
        }}>

            {startGame && <Life areaSize={areaSize} gameTicInterval={gameTicInterval} />}

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <InputParameters areaSize={areaSize} ticInterval={gameTicInterval}
                    setAreaSize={setAreaSize} setTicInterval={setGameTicInterval} handleStartGame={handleStartGame} />

                <Button variant="contained"
                    style={{ fontSize: '20px', backgroundColor: 'lightgreen', margin: "10px" }}
                    onClick={() => handleStartGame()}
                    endIcon={<RestartAltIcon />}>
                    Start new Game
                </Button>

            </div>
        </div>
    )

}