import { useState } from "react";
import RechercheInput from "./RechercheInput";
import RechercheSelect from "./RechercheSelect";
import Resultat from "./Resultat";

function Recherche(params) {
    const list=[ {nom:"banane",type:"fruit"}, {nom:"orange",type:"fruit"}, {nom:"pomme",type:"fruit"}, {nom:"raisins",type:"fruit"}, {nom:"kiwi",type:"fruit"}, {nom:"tomate",type:"legume"}, {nom:"carotte",type:"legume"}, {nom:"pomme de terre",type:"legume"}, {nom:"navet",type:"legume"}, {nom:"poivron",type:"legume"} ]

    const [result, setResult] = useState([])

    let types = [... new Set(list.map(l =>  l.type))]
   

    function searchInput(params) {
        let newList = list.filter(el => el.nom.includes(params))
        setResult(newList)
    }
    function searchSelect(params) {
        let newList = list.filter(el => el.type === params)
        setResult(newList)
    }
    return (
        <div>
            Recherche

            <RechercheInput onSearchInput={searchInput} />
            <RechercheSelect types={types} onSearchSelect={searchSelect}/>

            <Resultat result={result} />
        </div>
    )
}

export default Recherche;