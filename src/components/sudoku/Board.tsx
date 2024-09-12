// import React from 'react';
import './Board.css';
import Cell from './Cell';
import React from 'react';

interface Props {
    boardSize?: number;
}

const Board: React.FC<Props> = ({boardSize = 9}) => {


    const cells = Array.from({ length: boardSize * boardSize });
    cells.fill(<Cell />);

    return (
        <div className="board">
            {cells}
        </div>
    )
}

export default Board;