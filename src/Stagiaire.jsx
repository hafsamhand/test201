function Stagiaire(props) {
  return (
    <div>
      <li key={props.index}>
        {props.nom} -- {props.prenom}
      </li>
    </div>
  );
}

export default Stagiaire;
