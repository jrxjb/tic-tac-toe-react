import '../App.css'

function GetWinner({texto,turn}){

    return(<div className='turns-actives'>
    {texto?<p>gano {texto}</p>:<p>turno de {turn==="X"? "O":"X"}</p>}
    </div>)
}

export default GetWinner;