import { List, ListItem, Typography } from "@mui/material"
import { DetailsText } from "../components/DetailsText"
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Life } from "../components/Life";
import default_config from '../config/default-config.json'
import pattern_config from '../config/pattern-config.json'

export const Home: React.FC = () => {
    const gameTicInterval: number = default_config["game-tic-interval"];
    const defaultCellWith: number = pattern_config.octagon.defaultCellWith;

    return (
        <>
            <div className="flex flex-col m-4 ">
                <Life areaSize={"octagon"} gameTicInterval={gameTicInterval} defaultCellWith={defaultCellWith} />
                <Typography className="shadow-md p-4">
                    This website is dedicated to the study of certain aspects of the "Game of Life" cellular automaton. In addition to cyclic patterns, as presented on other similar platforms (e.g., https://conwaylife.com/), I am particularly interested in addressing the following questions:
                    <List>
                        <ListItem>
                            <CircleOutlinedIcon className="p-2" />
                            Does the percentage of decreasing living cells depend on the size of the grid?
                        </ListItem>
                        <ListItem>
                            <CircleOutlinedIcon className="p-2" />
                            How does the initial number of living cells (e.g., 1/2, 1/3) affect the rate of decrease in the population over time?
                        </ListItem>
                        <ListItem>
                            <CircleOutlinedIcon className="p-2" />
                            What impact do additional processes, such as self-generation or self-destruction of a fixed percentage of living cells, have on the overall behavior of the simulation?
                        </ListItem>
                    </List>
                </Typography>
                <Typography className="bg-slate-200 shadow-md" sx={{ margin: '1rem'}} p-4>
                    The website features two interactive sections:
                    <List>
                        <ListItem>
                            <CircleIcon className="p-2" /> 
                            <span className="font-bold">Front-end Calculation</span> - This section displays the game grid, which can vary in size from 10x10 to 100x100 cells.
                            Users can observe the progression of the game on the grid, with initial conditions set by the user.
                        </ListItem>
                        <ListItem>
                            <CircleIcon className="p-2" /> 
                            <span className="font-bold">Back-end Calculation</span> - This section shows a graph plotting the number of living cells over the course of several generations.
                            The initial grid can be set anywhere from 10x10 to 100x100 cells, corresponding to anywhere between 100 and 1,000,000 cells. The calculations for each generation are carried out on the server.
                        </ListItem>
                    </List>
                    In both sections, the maximum number of cells is limited due to performance constraints.
                </Typography>
                <Typography className="shadow-md p-4">
                    If you're new to the Game or need a refresher on the rules, here's a quick overview.
                    Conway's Game of Life is a cellular automaton that is played on a 2D square grid.
                    Each square (or "cell") on the grid can be either alive or dead, and they evolve according to the following rules:
                    <List>
                        <ListItem>
                            <CircleOutlinedIcon className="p-2" />
                            Any live cell with fewer than two live neighbours dies (referred to as underpopulation).
                        </ListItem>
                        <ListItem>
                            <CircleOutlinedIcon className="p-2" />
                            Any live cell with more than three live neighbours dies (referred to as overpopulation).
                        </ListItem>
                        <ListItem>
                            <CircleOutlinedIcon className="p-2" />
                            Any live cell with two or three live neighbours lives, unchanged, to the next generation.
                        </ListItem>
                        <ListItem>
                            <CircleOutlinedIcon className="p-2" />
                            Any dead cell with exactly three live neighbours comes to life.
                        </ListItem>
                    </List>
                </Typography>
            </div>
            <div>
                <DetailsText />
            </div>
        </>
    )
}