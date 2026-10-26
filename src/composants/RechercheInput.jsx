import { useState } from "react";

function RechercheInput(props) {
    const [nom, setNom] = useState('')
    function chercherparNom() {

        
        props.onSearchInput(nom)
    }
    return (
        <div>
            Recherche Input

                <input type="text" value={nom} onChange={e => setNom(e.target.value)} />
                <button onClick={chercherparNom}>Chercher</button>
        </div>
    )
}

export default RechercheInput;