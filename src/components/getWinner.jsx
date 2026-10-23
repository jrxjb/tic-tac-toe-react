import '../App.css'

function GetWinner({text,turn}){

    return(<div className='turns-actives' translate="no">
    {text
   ? <p>{['X', 'O'].includes(text) ? <><span> {text}</span> wins</> : 'Draw'}</p>
  : <p><span translate="no"> {turn === 'X' ? 'O' : 'X'}</span>'s turn </p>}
    </div>)
}

export default GetWinner;