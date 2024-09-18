import './App.css'
import Board from './components/sudoku/Board'
import CheckButton from './components/general/CheckButton'
import Notifications from './components/general/Notifications'
import {fetchSudoku, parseSudokuBoardFromList} from './controller/sudokuSolve.Controller'
import {useState} from 'react'

type notificationType = {
  type: "error" | "success" | "info";
  message: string;
}

function App() {

  const [triggerNotification, setTriggerNotification] = useState<number>(0);

  const [notification, setNotification] = useState<notificationType>({type: "info", message: ""});
  
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addNotification = (notification:notificationType) => {
    setNotification(notification);
    setTriggerNotification(triggerNotification+1);
  }

  const clickHandler = () => {
    // get Cells
    // get values from cells
    // convert to 2d array
    // fetchSudoku
    // update cells

    // addNotification({type: "info", message: "Solving Sudoku..."});

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    const cells = document.getElementsByClassName('cellEntry');
    const cellValues = [];
    for (let i = 0; i < cells.length; i++) {
      cellValues.push(parseInt((cells[i] as HTMLInputElement).value));
    }
    try {

      const sudokuBoard = parseSudokuBoardFromList(cellValues);

      fetchSudoku(sudokuBoard).catch((err)=>{
        addNotification({type: "error", message: "Error in solving Sudoku: " + err});
      }).then((response) => {
        for (let i = 0; i < 9; i++) {
          for (let j = 0; j < 9; j++) {
            (cells[i*9+j] as HTMLInputElement).value = response[i][j].toString();
          }
        }
        addNotification({type: "success", message: "Sudoku Solved"});
    }).finally(() => {
      setIsLoading(false);
    });
  } catch (error) {
    console.error(error);
    setIsLoading(false);
    addNotification({type: "error", message: "Error in solving Sudoku"});
  }
}

  return(
    <>
    <div className="App">
      <div>
        <h1>Sudoku Solver</h1>
      </div>
      <div className="gameFrame">
        <Board isLoading={isLoading}></Board>
      </div>
      <div className="checkButton">
        <CheckButton onClick={clickHandler} isLoading={isLoading}>
        </CheckButton>
      </div>
    </div>
    <Notifications triggerNotification={triggerNotification} notification={notification}></Notifications>
    </>
  )
}

export default App;
