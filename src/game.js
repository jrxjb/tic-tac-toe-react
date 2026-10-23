const winnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export function checkWinner(newBoard){
    for (let i = 0; i < winnerCombos.length; i++) {
      const combos = winnerCombos[i]
      if (newBoard[combos[0]] &&
            newBoard[combos[0]] === newBoard[combos[1]] &&
            newBoard[combos[0]] === newBoard[combos[2]]) {
            const winner = newBoard[combos[0]]                        
        return winner
      }
    }
    return null
}

export function isDraw (board) {
  return (board.every(Boolean)) && (checkWinner(board) === null)
}

  


