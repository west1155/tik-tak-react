import React from "react";
import style from './Board.module.css';
import Square from "../Square/Square";


const Board = () => {

    const [board, setBoard] = React.useState(Array(9).fill(''));
    const [turn, setTurn] = React.useState('X');

    const [winner, setWinner] = React.useState('');

    React.useEffect(() => {
        const winningPossitions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        let winningPositionIndex = 0;
        let newWinner = '';


        while (winningPositionIndex < winningPossitions.length && !newWinner) {
            const boardPositionToCheck = winningPossitions[winningPositionIndex]
            const boardValuesToCheck = boardPositionToCheck.map(index => board[index])
            const checkingValue = boardValuesToCheck[0];
            const isFinished = boardValuesToCheck.every((value) => value === checkingValue && checkingValue);
            newWinner = isFinished ? checkingValue : null;
            winningPositionIndex++
        }

        if (newWinner) {
            setWinner(newWinner === 'X' ? 'PLAYER ONE' : 'PLAYER TWO');
        }
    })

    const handleChanger = () => {
        setBoard(Array(9).fill(''));
        setWinner('');
    }
    const handleClick = (index) => {
        console.log(index);
        if (index < 0 || index > 9 || board[index] || winner) return
        const newBoard = [...board];
        newBoard.splice(index, 1, turn);
        setBoard(newBoard);
        const newTurn = turn === 'X' ? 'O' : 'X';
        setTurn(newTurn);
    }

    return (
        <div className={style.container}>
            <h1>Tik-Tak-Toe</h1>
            {winner && <h2>Has won: {winner} ({turn === 'X' ? 'O' : 'X'})</h2>}
            <div className={style.board}>
                {board.map((elem, index) => (
                    <Square key={index} value={elem} index={index} handleClick={handleClick}/>
                ))}
            </div>

            <div>
                <button className={style.startAgainButton} onClick={handleChanger}>
                    Start again
                </button>
            </div>
        </div>


    )


}


export default Board;