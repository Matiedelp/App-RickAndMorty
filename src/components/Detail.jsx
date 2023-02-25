import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from './Detail.module.css'


const Detail = ()=>{

   
   const {id} = useParams();
   const navigate = useNavigate();
    
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [id]);

     return(
        <div className={styles.container}>
         
         <button onClick={() => navigate("/home")}>Go back</button>


        <div className={styles.textCont}>
         <hr/>
         <h2 className={styles.nameM}>Name: {character.name}</h2>
         <hr/>
         <h3>Gender: {character.gender}</h3>
         <hr/>
         <h3>Species: {character.species}</h3>
         <hr/>
        </div>
        <div className={styles.imagen}>
            <img className={styles.imgCharac} src={character.image} alt="" />
        </div>
        </div>
     )

}
 export default Detail;