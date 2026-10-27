import Module from './Module'
import Stagiaire from './Stagiaire';
// import Logo from './logo192.png'

function Filiere(){
//  let Logor = require('./logo192.png');
  let ageStg = 19;
  // let styleList = { color: "red", backgroundColor: "yellow"}

  let stg = {
    nom: "Raiess",
    prenom: "Taha",
    age: ageStg
  }

  let stagiaires = [
    stg,
    {
    nom: "azami",
    prenom: "inas",
    age: ageStg
  },
  {
    nom: "bakkali",
    prenom: "mohamed",
    age: ageStg
  }
  ]

  // let status = "Mineur"
  // if(stg.age > 18) {
  //   status =  "adulte"
  // }

  // function isAdult(){
  //   return stg.age > 20 ? "Adult" : "Mineur"
  // }
    return (
    <div>
       {/* <p style={styleList}> Nom: {stg.nom}</p>
      <p> Prenom: {stg.prenom}</p>
      <p> Age : {stg.age} ---- {ageStg} </p>
      is Adult: {status} <br></br>
      is Adult: {isAdult()} <br></br>
      is Adult: {stg.age > 20 ? "Adult" : "Mineur"}
      <Module /> */}

    <ul>

      {
        stagiaires.map((stg, index) => (
          <Stagiaire nom={stg.nom} index={index} prenom={stg.prenom} />
        ))
      } 
    </ul>
      

    </div>
    )
}

export default Filiere;