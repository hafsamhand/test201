function RechercheSelect(props) {
    function recherche(params) {
        props.onSearchSelect(params)        
    }
    return (
        <div>
            Recherche Select
            <select onChange={e => recherche(e.target.value)} >
                {
                    props.types.map((type, index) => 
                    
                        <option value={type} key={index}>{type}</option>
                    )
                }
            </select>
        </div>
    )
}

export default RechercheSelect;