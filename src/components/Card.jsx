import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {addFavorite, removeFavorite} from "../redux/actions"
import { useEffect } from 'react';

function Card({name, onClose,image, id, gender}) {

   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         dispatch(removeFavorite(id))
      }else{
         setIsFav(true);
         dispatch(addFavorite({name, onClose,image, id, gender}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
   <div className= {style.Container} key={id}>


      
      <div className={style.Card}>
         
     <div className={style.ContBtn}>
      {
         isFav ? (
            <button className={style.btnRed} onClick={handleFavorite}>❤️</button>
         ) : (
            <button className={style.btnRedR} onClick={handleFavorite}>🤍</button>
         )
      }      
      </div> 
         <img src={image} alt="img" /> 
         <Link to={`/detail/${id}`}>
           <h1>name: {name}</h1>
         </Link>
           <hr />
          <button className={style.button89} onClick={onClose}>DELETE</button>
      </div>
   </div>
   );
}

export default Card;
