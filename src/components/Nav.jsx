import SearchBar from "./SearchBar";
import styles from './Nav.module.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Nav = ({onSearch})=>{

     const login = useNavigate();
    return(
   
        <div className={styles.container}>
            <button onClick={()=>{login("/Form")}}>login</button>
            <Link to='/favorites'>Favorites</Link>
            <SearchBar onSearch={onSearch}/>
        


        </div>
       
    )
}

export default Nav;