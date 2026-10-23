import { useState } from 'react'
import './App.css'
import GetWinner from './components/getWinner'
import ResetBoard from './components/resetBoard'
import confetti from 'canvas-confetti'
import {checkWinner, isDraw} from './game'
const TURNS = {
  X: 'X',
  O: 'O'
}


function App () {
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    if (turnFromStorage) return JSON.parse(turnFromStorage)
    else return ''
  })

  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board')
    if (boardFromLocalStorage) return JSON.parse(boardFromLocalStorage)
    else return Array(9).fill(null)
  })

  const [winner, setWinner] = useState(() => {
    const winnerFromStorage = window.localStorage.getItem('winner')
    if (winnerFromStorage) return JSON.parse(winnerFromStorage)
    else return null
  })

  function updateBoard (index) {
    if (board[index] !== null || (winner)) return
    const updateTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(updateTurn)
    const newBoard = [...board]
    newBoard[index] = updateTurn
    setBoard(newBoard)
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(updateTurn))

     const foundWinner = checkWinner(newBoard) 

      if (foundWinner) {                       
            setWinner(foundWinner)                                         
            localStorage.setItem('winner', JSON.stringify(foundWinner)) 
            confetti()
        return
      }
    
    const draw = isDraw(newBoard) 
    if (draw) {
      const noWinner="Draw"
      setWinner(noWinner)
      localStorage.setItem('winner', JSON.stringify(noWinner)) 
      return
    }
  }
  function cleanBoard () {
    setBoard(Array(9).fill(null))
    setWinner('')
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('winner')
    setTurn('')
  }
  return (
    <main className='body-structure'>
      <div className='box-up-board-middle'>
        <div className='board-middle'> {
          board.map((cell, index) => {
            return (<span key={index} className='square' translate="no"
               onClick={() => updateBoard(index)}>{cell}</span>)
          })
        }
        </div>
        <ResetBoard onReset={cleanBoard} />
      </div>
      <div className='left-part'>
        <div className='box-turns'>
          <div>
            Turn
          </div>
          <section className="turns" translate="no">
            <div>{TURNS.O}</div>
            <div>{TURNS.X}</div>
          </section>
        </div>
        <GetWinner   text={winner} turn={turn}/>
      </div>
    </main>
  )
}

export default App
