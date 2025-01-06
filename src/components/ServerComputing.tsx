import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import { fetchServerInit, fetchServerNext } from "../utils/fetchServer";

type ResponseNextProps = {
    generation: number,
    alives: number;
}

type DataType = {
    dataKey: string,
    alive: number,
    dead: number,
}


export const ServerComputing = () => {
    const [tmpAreaSize, setTmpAreaSize] = useState<string>('');
    const [serverAreaSize, setServerAreaSize] = useState<string>('');
    const [errorServerConnection, setErrorServerConnection] = useState<string>('');
    const [matrixTotalSize, setMatrixTotalSize] = useState<number>();
    const [datas, setDatas] = useState<DataType[]>([]);
    const [toggleCalculating, setToggleCalculating] = useState<boolean>(false);

    async function handleServerConnection() {
        setDatas([]);
        setErrorServerConnection('');
        const areaSize = parseInt(tmpAreaSize, 10);
        const serverInit = await fetchServerInit({ areaSize, setErrorServerConnection });
        console.log("serverInit: ", serverInit);
        if (typeof serverInit === 'number' && serverInit > 0) {
            setMatrixTotalSize(serverInit * serverInit);
            setServerAreaSize(serverInit.toString());
            setTmpAreaSize('');
        } else {
            console.error("serverInit is not a number");
            setServerAreaSize('');
        }
    }

    async function handleServerComputing() {
        if (toggleCalculating) {

            const resp: ResponseNextProps = await fetchServerNext();
            const data: DataType = {
                dataKey: resp.generation.toString(),
                alive: resp.alives,
                dead: matrixTotalSize! - resp.alives
            };
            setDatas(prevDatas => [...prevDatas, (data)]);
        }
    }

    useEffect(() => {
        const pushData = async () => {
            await handleServerComputing();
        }

        pushData();
    }, [datas, toggleCalculating]);

    return (<div style={{ display: 'flex', flexDirection: 'column' }}>

        <Typography variant="button" gutterBottom sx={{ display: 'block', fontWeight: 'bold' }}>Server computing</Typography>
        <Typography variant="subtitle1" gutterBottom>Input game area for server computig, cells</Typography>
        <TextField id="standard-basic" label="recomended: x 1'000"
            value={tmpAreaSize}
            variant="standard"
            onChange={e => {
                if (!isNaN(Number(e.target.value))) {
                    const value = e.target.value.replace("-", "");
                    setTmpAreaSize(value)
                }
            }} />

        {tmpAreaSize
            && <Button onClick={() => handleServerConnection()}
                variant="contained"
                sx={{ backgroundColor: 'green', margin: '10px' }}
                endIcon={<SendIcon />}>
                Test server connection
            </Button>
        }

        {serverAreaSize && <Typography>Life matrix initialized on server: {serverAreaSize}&times;{serverAreaSize}</Typography>}
        {errorServerConnection && <Typography style={{ color: 'red' }}>{errorServerConnection}</Typography>}

        {serverAreaSize
            && <Button onClick={() => {
                setToggleCalculating(true);
                handleServerComputing();
            }}
                variant="contained"
                sx={{ backgroundColor: 'orange', margin: '10px' }}
                endIcon={<PlayCircleOutlineIcon />}>
                Execute computing on server
            </Button>
        }
        {toggleCalculating &&
            <Button onClick={() => setToggleCalculating(false)}
                variant="contained"
                sx={{ backgroundColor: 'violet', margin: '10px' }}
                endIcon={<StopCircleOutlinedIcon />}>
                Stop server calculating
            </Button>}
    </div>)
}