import "./Board.css"
import Tile from '../TIle/Tile'
import Strike from "../Strike/Strike"
import GameOver from "../GameInfo/GameInfo"

type Props = {
    tiles: Array<any>
    onTileClick: Function
    strikeClass: string
}

const Board = (props: Props) => {

    const getTileClassName = (index: number, rowSize: number): string => {
        let className = '';

        let actualIndex = index + 1;
        if (actualIndex % rowSize != 0) {
            className += 'r-border ';
        }
        if (actualIndex <= (rowSize * (rowSize - 1))) {
            className += 'b-border ';
        }
        return className.trim();
    }

    return (
        <div className='board'>
            {props.tiles.map((tile, index) => (
                <Tile key={index}
                    value={tile}
                    onClick={() => { props.onTileClick(index) }}
                    className={getTileClassName(index, Math.sqrt(props.tiles.length))}
                />
            ))}
            <Strike strikeClass={props.strikeClass} />
        </div>
    )
}

export default Board