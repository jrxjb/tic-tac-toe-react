import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetWinner from './components/ganador'
import ResetBoard from './components/resetBoard'
import confetti from "canvas-confetti"




const TURNS ={
  X:'X',
  O:'O'
}

const winner_combos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
//const board = Array(9).fill(null)
//Resultado: [null, null, null, null, null, null, null, null, null]
//const board = Array(9).fill(null)


function App() {
  const [turn,setTurn]=useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    if(turnFromStorage)return JSON.parse(turnFromStorage)
      else return ''
  })

  const [board,setBoard]=useState( ()=>{
    const boardFromLocalStorage= window.localStorage.getItem('board')
    if(boardFromLocalStorage)return JSON.parse(boardFromLocalStorage)
      else return Array(9).fill(null) })   

  const [winner,setWinner] = useState(()=>{
    const winnerFromStorage= window.localStorage.getItem('winner')
    if(winnerFromStorage) return JSON.parse(winnerFromStorage)
    else return null
})

  function updateBoard(index){
      console.log(`hizo click en span ${index}`);
      window.localStorage.setItem('winner',JSON.stringify(winner));
      if(board[index] !==null||(winner)) return
      const updateTurn = turn === TURNS.X? TURNS.O : TURNS.X;
      setTurn(updateTurn)
      const newBoard = [...board]
      newBoard[index] = updateTurn
      setBoard(newBoard)
      window.localStorage.setItem('board',JSON.stringify(newBoard))
      window.localStorage.setItem('turn',JSON.stringify(updateTurn))
      // revision de ganadores
      /*for(const combo of winner_combos){
        const[a,b,c]=combo
        if(newBoard[a]&&
          newBoard[a]===newBoard[b]&&
          newBoard[a]===newBoard[c]){
          return console.log("tenemos un ganador")
        } 
      }*/

        for(let i=0;i<winner_combos.length;i++){
          const combos=winner_combos[i];
          if(newBoard[combos[0]]&&
            newBoard[combos[0]][0]===newBoard[combos[1]]&&
            newBoard[combos[0]]===newBoard[combos[2]]){
              setWinner(newBoard[combos[0]])
              confetti()
            }

        }

    }
    function cleanBoard(){
      setBoard(Array(9).fill(null));
      setWinner("");
      window.localStorage.removeItem('board')
      window.localStorage.removeItem('turn')
    }
    return (
    <main className='body-structure'>
    <div className='box-up-board-medio'>
      <div className="board-medio">
        {
          board.map((contenidoB,index)=>{
            return (<span key={index}  className="square" onClick={() => updateBoard(index)}>{contenidoB}</span>)
          })
        }
        </div>
          <ResetBoard resetBoardF={cleanBoard}/>
      </div>
      <div className='left-part'>
        <div className='box-turns'>
        <div>
         Turnos
         </div>
        <section className="turns">
          <div >{TURNS.O}</div>
          <div >{TURNS.X}</div>
        </section>
        </div>
        <GetWinner texto={winner}/>
      </div>
    </main>
  )
}

export default App






