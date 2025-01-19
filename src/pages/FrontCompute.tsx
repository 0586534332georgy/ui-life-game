import { InputParameters } from "../components/InputParameters";
import { Life } from "../components/Life";
import { useState } from "react";
import config from '../config/default-config.json'
import { Button } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import NotStartedOutlinedIcon from '@mui/icons-material/NotStartedOutlined';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';


export const FrontCompute: React.FC = () => {
    const [areaSize, setAreaSize] = useState<number>(config["game-area-size"]);
    const [gameTicInterval, setGameTicInterval] = useState<number>(config["game-tic-interval"]);
    const [tpmTic, setTmpTic] = useState<number>();
    const [startGame, setStartGame] = useState<boolean>(false);
    const [flPause, setFlPause] = useState<boolean>(false);

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
                    setAreaSize={setAreaSize} setTicInterval={setGameTicInterval} handleStartGame={handleStartGame} 
                    tmpTic={tpmTic} setTmpTic={setTmpTic} setFlPause={setFlPause}/>

                <Button variant="contained"
                    style={{ fontSize: '20px', backgroundColor: 'lightgreen', margin: "10px" }}
                    onClick={() => {
                        if (tpmTic) {
                            setGameTicInterval(tpmTic);
                        }
                        handleStartGame();
                    }}
                    endIcon={<RestartAltIcon />}>
                    Start new Game
                </Button>

                {startGame && !flPause && <Button variant="contained"
                    style={{ fontSize: '20px', backgroundColor: 'lightsalmon', margin: "10px" }}
                    onClick={() => {
                        setTmpTic(gameTicInterval);
                        setGameTicInterval(1_000_000_000);
                        setFlPause(true);
                    }}
                    endIcon={<PauseCircleOutlinedIcon />}>
                    Pause the Game
                </Button>
                }

                {flPause && <Button variant="contained"
                    style={{ fontSize: '20px', backgroundColor: 'olivedrab', margin: "10px" }}
                    onClick={() => {
                        setGameTicInterval(tpmTic!);
                        setFlPause(false);                        
                    }}
                    endIcon={<NotStartedOutlinedIcon />}>
                    Continue the Game
                </Button>
                }

                {startGame && <Button variant="contained"
                    style={{ fontSize: '20px', backgroundColor: 'lightpink', margin: "10px" }}
                    onClick={() => {
                        if (tpmTic) {
                            setGameTicInterval(tpmTic);
                        }
                        setFlPause(false);
                        setStartGame(false);
                        }
                    }
                    endIcon={<StopCircleOutlinedIcon />}>
                    Stop the Game
                </Button>
                }


            </div>
        </div>
    )

}