import getRandom from "../utils/generate-random";
import Matrix from "./Matrix"
import config from './../config/default-config.json'

export const Life: React.FC = () => {

    const areaSize = config["game-area-size"];
    const lifeArray: number[][] = getRandom(areaSize);

    return (
        <div>
            <Matrix lifeArray={lifeArray}/>
        </div>
    )

}