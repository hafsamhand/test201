import { useState } from "react"

function BookTitle(props) {
    
    function newTitle(e) {
        let val = e.target.value 
        props.onupdateTitle(val , props.index)
        setToupdate(false)
    }

    function ddeleteTitle(event) {
        props.ondeleteTitle(props.id)
        
    }

    const [toUpdate, setToupdate] = useState(false)
    return (
        <div>
           { toUpdate ? <input type="text" value={props.title} onChange={e => newTitle(e)} /> : props.title }
           <button onClick={() => setToupdate(!toUpdate)}>unpdate</button>
            <button onClick={e => ddeleteTitle(e)}>Supprimer</button>
            <br></br>
        </div>
    )
}

export default BookTitle;