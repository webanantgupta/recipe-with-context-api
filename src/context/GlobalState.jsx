import React, { useEffect, useState } from 'react'
import GlobalContext from './GlobalContext'

const GlobalState = (props) => {

  const [Param, setParam] = useState('icecream');
  const [recipes, setrecipes] = useState([]);
  // console.log(Param)

  async function fetchApi() {
    let res = await fetch(`https://api.edamam.com/search?q=${Param}&app_id=e9098c0e&app_key=2e08c4b4f3976bb085cd3b73a6c9720e`);
    let data = await res.json();
    console.log(data.hits);
    setrecipes(data.hits);

  }
  useEffect(() => {
    fetchApi()
  }, [Param])

  return (
    <GlobalContext.Provider value={{ Param, setParam, recipes }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
