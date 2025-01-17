import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

type Params = {
    areaSize: number;
    ticInterval: number;
    setAreaSize: (s: number) => void;
    setTicInterval: (t: number) => void;
    handleStartGame: () => void;
    tmpTic: number | undefined;
    setTmpTic: (n: number) => void;
    setFlPause: (b: boolean) => void;
}

export const InputParameters: React.FC<Params> = ({ areaSize, ticInterval, setAreaSize, setTicInterval, handleStartGame, tmpTic, setTmpTic, setFlPause }) => {
    const mYard: number = 1_000_000_000;
    const onPause: string = 'now on pause';
    const [tmpAreaSize, setTmpAreaSize] = useState<string>('');
    const [tmpTicInterval, setTmpTicInterval] = useState<string>('');

    function handleNewParams() {
        if (tmpAreaSize) {
            setAreaSize(Number(tmpAreaSize));
            handleStartGame();
        }
        if (tmpTicInterval) {
            const num: number = Number(tmpTicInterval);
            setTicInterval(num);
            setTmpTic(num);
            setFlPause(false);
        }
        setTmpAreaSize('');
        setTmpTicInterval('');
    }

    const buttonText = tmpAreaSize ? 'Set parameters and start new Game' : 'Set new tic for current Game';
    const areaLabel = `now is ${areaSize}`;
    const ticLabel = ticInterval == mYard ? onPause : `now is ${ticInterval}`;

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Game parameters:</h1>
            <Typography variant="button" gutterBottom sx={{ display: 'block', fontWeight: 'bold' }}>Live view</Typography>
            <Typography variant="subtitle1" gutterBottom>Input area size, cells</Typography>
            <TextField id="standard-basic" label={areaLabel} variant="standard"
                value={tmpAreaSize}
                placeholder={areaSize.toString()}
                onChange={e => {
                    if (!isNaN(Number(e.target.value))) {
                        const value = e.target.value.replace("-", "");
                        setTmpAreaSize(value);                        
                    }
                }} />

            <Typography variant="subtitle1" gutterBottom>Input tic interval, ms</Typography>
            <TextField id="standard-basic" label={ticLabel} variant="standard"
                placeholder={ticInterval == mYard ? tmpTic!.toString() : ticInterval.toString()}
                value={tmpTicInterval}
                onChange={e => {
                    if (!isNaN(Number(e.target.value))) {
                        const value = e.target.value.replace("-", "");
                        setTmpTicInterval(value);
                    }
                }} />

            {(tmpAreaSize || tmpTicInterval)
                &&
                <Button variant="outlined"
                    style={{ color: "green", margin: '10px' }}
                    onClick={() => handleNewParams()}>
                    {buttonText}
                </Button>
            }
        </div>
    )
}