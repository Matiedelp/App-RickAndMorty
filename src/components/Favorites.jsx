import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Favorites.module.css"
import {filterCards, orderCards} from '../redux/actions'

const Favorites = () =>{
    const {myFavorites} = useSelector(state => state)
    const dispatch = useDispatch();

    const handlerOrder = (event) =>{
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    } 
    return(
        <div>
                <Link to='/home'>volver a home</Link>
            <div>
                <select onChange={handlerOrder}>
                    <option value="order" disabled='disabled'>Order</option>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter}>
                    <option value="filter" disabled='disabled'>Filter</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="Unknown">Unknown</option>
                </select>
            </div>



            {
                 myFavorites.map((character) => {
                    return(
                        <div className="Container">
                            
                            
                            <div className={style.Card}>
                                 <img src={character.image} alt="img" /> 
                                <Link to={`/detail/${character.id}`}>
                                 <h1>Name: {character.name}</h1>
                                 </Link>
                             </div>
                        </div>
                    )
                 })
            }
        </div>
    )
}

export default Favorites; 