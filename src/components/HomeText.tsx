import { Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';

export const HomeText: React.FC = (): JSX.Element => {
    return (
        <>
            <Typography><ComputerIcon />https://ui-life-game.onrender.com</Typography>
            <Typography><StorageIcon />https://server-life-game.onrender.com</Typography>
            <Typography><GitHubIcon />https://github.com/0586534332georgy/ui-life-game</Typography>
            <Typography><GitHubIcon />https://github.com/0586534332georgy/server-life-game</Typography>
        </>
    );
}