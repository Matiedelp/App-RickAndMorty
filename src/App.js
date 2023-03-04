import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx';
import Detail from './components/Detail.jsx';
import About from './components/About.jsx'
import Form from './components/Form.jsx'
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites';

function App () {
  const [characters, setCharacters] = useState([])
  const location = useLocation();
  const navigate = useNavigate();

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  const onSearch = (character)=>{
    fetch(`http://localhost:3001/rickandmorty/detail/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('No hay personajes con ese ID');
         }
      });
  }

const [access, setAccess] = useState(false);

  const username = 'matypincharrata77@gmail.com';
  const password = 'pinchaloMas11';

 const login = (userData) => {
  if (userData.username === username && userData.password === password) {
     setAccess(true);
     navigate('/home');
  }
}
useEffect(() => {
  !access && navigate('/');
}, [access]);


// esta linea sacamos el nav para que no aparezca en la ruta form location.pathname
  return (
    <div className='App' style={{ padding: '25px' }}>   
    {location.pathname!=="/form"&& <Nav onSearch={onSearch}/> }  

    <Routes>
      <Route path="/form" element={<Form/>}></Route>

      <Route path="/" element={<Cards onClose={onClose} characters={characters}/>}></Route>

      <Route exact path="/detail/:id" element={ <Detail/>}></Route> 

      <Route  path="/home" element={<Cards onClose={onClose} characters={characters} />}></Route>

      <Route path="/about" element={<About />}></Route>

      <Route path='/favorites' element={<Favorites/>}></Route>

    </Routes>
  
      
    </div>
  )
}

export default App
