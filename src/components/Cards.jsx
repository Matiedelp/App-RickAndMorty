import Card from './Card';
import styles from './Cards.module.css'


function Cards({characters, onClose}) {
   
  
   return(

       <div className={styles.CDcontainer}>
         <div className={styles.CardC}>

             {
               
               characters.map(({id, name, image, gender})=>{
                 return <Card
                 key={id}
                  id={id}
                  name={name}
                  image={image}
                  gender={gender}
                  onClose={() => onClose(id)}
                />
            })      
         }
         </div>

             </div>
   )
};
export default Cards;
