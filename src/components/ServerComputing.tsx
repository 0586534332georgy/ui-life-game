import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import { fetchServerInit, fetchServerNext } from "../utils/fetchServer";

type ResponseInitProps = {
    message: string;
    areaSize: number;
    alives: number;
}
type ResponseNextProps = {
    generation: number,
    alives: number;
}
type DataType = {
    dataKey: string,
    alive: number,
    dead: number,
}
type SetDatasType = {
    datas: DataType[];
    setDatas: (datas: DataType[]) => void;
}

export const ServerComputing: React.FC<SetDatasType> = ({ datas, setDatas }) => {
    const [tmpAreaSize, setTmpAreaSize] = useState<number>();
    const [serverAreaSize, setServerAreaSize] = useState<number>();
    const [errorServerConnection, setErrorServerConnection] = useState<string>('');
    const [matrixTotalSize, setMatrixTotalSize] = useState<number>();
    const [toggleCalculating, setToggleCalculating] = useState<boolean>(false);
    const [initialAlives, setInitialAlives] = useState<number>();


    async function handleServerConnection() {
        setDatas([]);
        setErrorServerConnection('');
        const serverInit: ResponseInitProps | null = await fetchServerInit({ areaSize: tmpAreaSize!, setErrorServerConnection });
        console.log("serverInit: ", serverInit);
        if (serverInit && typeof serverInit.areaSize === 'number' && serverInit.areaSize > 0) {
            const areaSize_2: number = serverInit.areaSize * serverInit.areaSize;
            setMatrixTotalSize(areaSize_2);
            setServerAreaSize(serverInit.areaSize);
            setTmpAreaSize(undefined);
            const data: DataType = {
                dataKey: "0",
                alive: serverInit.alives,
                dead: areaSize_2 - serverInit.alives
            };
            setDatas([data]);
            setInitialAlives(serverInit.alives);
        } else {
            console.error("confirmed matrix size is not a suitable number");
            setServerAreaSize(undefined);
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
            setDatas([...datas, (data)]);
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
        <TextField id="standard-basic" label="[10 - 1'000]"
            value={tmpAreaSize}
            variant="standard"
            onChange={e => {
                if (!isNaN(Number(e.target.value))) {
                    const value = e.target.value.replace('-', '').replace(/\./g, '');
                    setTmpAreaSize(Number(value))
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

        {serverAreaSize && <Typography>
            Life matrix initialized on server: {serverAreaSize}&times;{serverAreaSize}, <br/>
            initial alives: {initialAlives} of {matrixTotalSize} cells
        </Typography>}
        {errorServerConnection && <Typography style={{ color: 'red' }}>{errorServerConnection}</Typography>}

        {serverAreaSize
            && <Button onClick={() => {
                setToggleCalculating(true);
                handleServerComputing();
            }}
                variant="contained"
                sx={{ backgroundColor: 'green', margin: '10px' }}
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