import { fetchSolution } from "../hooks/aws-lambda-solver";

type sudokuBoard = number[][];

export const fetchSudoku = async (sudokuBoard: sudokuBoard) => {
    return await fetchSolution(sudokuBoard);
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