import '../App.css'

function ResetBoard ({ onReset }) {
  return (
    <button className='button-reset-board' onClick={onReset}>
      Reset
    </button>
  )
}

export default ResetBoard
