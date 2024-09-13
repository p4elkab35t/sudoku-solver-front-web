import './App.css'
import Board from './components/sudoku/Board'
import CheckButton from './components/general/CheckButton'
import {fetchSudoku, parseSudokuBoardFromList, parseSudokuBoardFromJson} from './controller/sudokuSolve.Controller'

function App() {

  const clickHandler = () => {
    // get Cells
    // get values from cells
    // convert to 2d array
    // fetchSudoku
    // update cells
    const cells = document.getElementsByClassName('cellEntry');
    const cellValues = [];
    for (let i = 0; i < cells.length; i++) {
      cellValues.push(parseInt((cells[i] as HTMLInputElement).value));
    }

    const sudokuBoard = parseSudokuBoardFromList(cellValues);

    fetchSudoku(sudokuBoard).then((response) => {
        // const stringResponse = Buffer.from(response.Payload as Uint8Array).toString();
        // console.log(stringResponse);
        
        console.log(response);
        for (let i = 0; i < 9; i++) {
          for (let j = 0; j < 9; j++) {
            (cells[i*9+j] as HTMLInputElement).value = response[i][j].toString();
          }
          
        }
    });

    

  }


  return(
    <div className="App">
      <div className="gameFrame">
        <Board>
        
        </Board>
      </div>
      <div className="checkButton">
        <CheckButton onClick={clickHandler}>
        </CheckButton>
      </div>
    </div>
  )
}

export default App
