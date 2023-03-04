import styles from './SearchBar.module.css'
import { useState } from 'react';

function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
   <div className={styles.containerSearch}>

      <div className={styles.inputrSearch}>
         <input type="input" value={character} onChange={handleChange} className={styles.formfield} placeholder="Buscar por id" name="name" id='name' required />

      <button className= {styles.button64} onClick={() => onSearch(character)}><span className='text'>Search</span></button> 
      </div>

   </div>
      
   );
}

export default SearchBar;