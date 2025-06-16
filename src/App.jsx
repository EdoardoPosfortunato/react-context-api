import { useState, useEffect, createContext } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import PostPages from './pages/PostPages.jsx';
import postContext from './context/Context';
import axios from 'axios';



function App() {

  const [cardList, setCardList] = useState([])

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((resp) => {
        setCardList(resp.data.results)
      })
  }, [])


  const postCard= {
    cardList,
    setCardList

  }


  return (

    <>
      <postContext.Provider value={ postCard }>
        <PostPages />
      </postContext.Provider>

    </>

  )
}

export default App
