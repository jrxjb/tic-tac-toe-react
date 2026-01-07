import '../App.css'

function ResetBoard ({ resetBoardF }) {
  return (
    <button className='button-reset-board' onClick={resetBoardF}>
      reset
    </button>
  )
}

export default ResetBoard
