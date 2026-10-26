function Resultat(props) {
    return (
        <div>
            Resultats:
            {
                props.result.map((rs, index) => (
                    <div key={index}>{rs.nom} -- {rs.type} </div>
                    
                ))
            }
        </div>
    )
}

export default Resultat;