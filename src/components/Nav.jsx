import SearchBar from "./SearchBar";
import styles from './Nav.module.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Nav = ({onSearch})=>{

     const login = useNavigate();
    return(
    <div className={styles.container}>
        
        <SearchBar onSearch={onSearch}/>
        

        <button className={styles.logi} onClick={()=>{login("/Form")}}>login</button>
        <button className={styles.favo}><Link to='/favorites'>Favorites</Link></button>
        
        
    </div>
       
    )
}

export default Nav;