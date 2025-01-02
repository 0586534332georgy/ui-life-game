import getRandomMatrix from "../utils/generateRandom";
import Matrix from "./Matrix"
import config from './../config/default-config.json'
import { useEffect, useRef, useState } from "react";
import { LifeMatrix } from "../services/LifeMatrix";

export const Life: React.FC = () => {

    const areaSize = config["game-area-size"];
    const gameTicInterval = config["game-tic-interval"]
    const [lifeArray, setLifeArray] = useState<number[][]>([]);    
    const lifeMatrix = useRef<LifeMatrix>();

    function tic() {
        if(lifeMatrix.current == null) {
            lifeMatrix.current = new LifeMatrix(getRandomMatrix(areaSize));
        };
        setLifeArray(lifeMatrix.current.nextGeneration());
    }

    useEffect(() => {
        const interval = setInterval(tic, gameTicInterval);
        return () => clearInterval(interval);
    }, [gameTicInterval])

    return (
        <div>
            <Matrix lifeArray={lifeArray}/>
        </div>
    )

}