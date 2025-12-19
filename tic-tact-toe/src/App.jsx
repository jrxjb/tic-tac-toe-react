import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const TURNS ={
  X:'X',
  O:'O'
}

//const board = Array(9).fill(null)
//Resultado: [null, null, null, null, null, null, null, null, null]
//const board = Array(9).fill(null)


function App() {
  const [turn,setTurn]=useState("");
  const [board,setBoard]=useState(Array(9).fill(null))

  function updateBoard(index){
  console.log(`hizo click en span ${index}`);

  const updateTurn = turn === TURNS.X? TURNS.O : TURNS.X;
  setTurn(updateTurn)
  const newBoard = [...board]
  newBoard[index] = updateTurn
  setBoard(newBoard)
  

}
  return (
    <>
      <div className="board-medio">
        {
          board.map((contenidoB,index)=>{
            return (<span key={index}  className="square" onClick={() => updateBoard(index)}>{contenidoB}</span>)
          })
        }
        </div>
        <div className="box-turns">
         <h4>Turnos</h4>
        <section className="turns">
          <div onClick="isSelected">{TURNS.O}</div>
          <div>{TURNS.X}</div>
        </section>
        </div>
      
    </>
  )
}

export default App
