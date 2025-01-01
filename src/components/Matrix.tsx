import Row from "./Row"

type Props = {
    lifeArray:  number[][];
}
const Matrix: React.FC<Props> = ({lifeArray}) => {

    function getMatrix() {
        return lifeArray.map((row, index) =>            
                <Row key={index} cells={row} />)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {getMatrix()}
        </div>
    )

}

export default Matrix;