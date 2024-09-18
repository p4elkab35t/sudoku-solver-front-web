// import { fetchSolution } from "../hooks/aws-lambda-solver";

type sudokuBoard = number[][];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchSudoku = async (puzzle: sudokuBoard): Promise<any> => {

    const apiUrl = 'https://ymymolr4tt5j6p62j7zq3ycqsy0lhhnf.lambda-url.us-east-2.on.aws/';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sudokuBoard: puzzle }),
      });

      if (!response.ok) {
        // console.error('Fetch Error:', response); 
      }

      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        // console.error('Fetch Error:', error); 
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
    // return await fetchSolution(sudokuBoard);
};

export const parseSudokuBoardFromList = (sudokuBoard: number[]) => {
    const parsedBoard: number[][] = [];
    for (let i = 0; i < 9; i++) {
        parsedBoard.push(sudokuBoard.slice(i * 9, i * 9 + 9));
    }
    return parsedBoard;
};

export const parseSudokuBoardFromJson = (sudokuBoard: string) => {
    const parsedBoard: number[][] = [];
    const board = JSON.parse(sudokuBoard);
    for (let i = 0; i < 9; i++) {
        parsedBoard.push(board[i]);
    }
    return parsedBoard;
};