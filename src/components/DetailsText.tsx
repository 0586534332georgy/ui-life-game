import { List, ListItem, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';

export const DetailsText: React.FC = (): JSX.Element => {
    return (
        <>
            <Typography className="bg-orange-200 shadow-md p-4">
                <span className="font-bold">Sources and resources:</span>
                <List>
                    <ListItem>
                        <ComputerIcon className="p-1" />
                        https://ui-life-game.onrender.com
                    </ListItem>
                    <ListItem>
                        <StorageIcon className="p-1" />
                        https://server-life-game.onrender.com
                    </ListItem>
                    <ListItem>
                        <GitHubIcon className="p-1" />
                        https://github.com/0586534332georgy/ui-life-game
                    </ListItem>
                    <ListItem>
                        <GitHubIcon className="p-1" />
                        https://github.com/0586534332georgy/server-life-game
                    </ListItem>
                </List>
            </Typography>
        </>
    );
}