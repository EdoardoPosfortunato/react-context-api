import { useState, useEffect, createContext } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import PostPages from './pages/PostPages.jsx';
import { postContext, alertContext } from './context/Context';
import axios from 'axios';



function App() {

  const [cardList, setCardList] = useState([])
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((resp) => {
        setCardList(resp.data.results)
      })
  }, [])


  const postCard = {
    cardList,
    setCardList
  }

  const Alert = {
    showAlert,
    setShowAlert
  }


  return (

    <>
      <alertContext.Provider value={Alert}>
        <postContext.Provider value={postCard}>
          <PostPages />
        </postContext.Provider>
      </alertContext.Provider>

    </>

  )
}

export default App
