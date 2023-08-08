//           📗        📕              📚
import { useState, useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  
  const [pokeObjToRender, setPokeObjToRender] = useState( null )
    console.log("STATE OF  pokeObjToRender: " , pokeObjToRender)



  // useEffect()
  // useEffect( ()=>{} )
  // useEffect( ()=>{} , [ ] )  ////  The Dependancy Array


  // 🪝 HOOKING into MOUNTING Phase / Lifecycle
  useEffect(  
  
    ()=>{

      // fetch("validWebAddress").then( ()=>{} ).then( ()=>{} )
      // fetch("validWebAddress").then( response => response.json() ).then(  console.log )
      
      fetch("https://pokeapi.co/api/v2/pokemon/mudkip/")
      .then( response => response.json() )
      .then( (fetchedPokemonObj) => setPokeObjToRender(fetchedPokemonObj) )
      .catch( err => console.log(err) )
      // .then( (fetchedPokemonObj) => console.log(fetchedPokemonObj) )

    } , 
    
    [  ]  ////  The Dependancy Array
    
  )



    // console.log("BEFORE WE USED OUR STATE SETTER: ", pokeObjToRender.name)



  return (
    <>
      <div id="logoz">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Fetching in React</h1>

      {/* question/condition ?  TRUE-case : FALSE-case  */}
      {
        // does it exsist OR Nah? (Truthy/Falsey Logic)
        pokeObjToRender ?
        (<div>
          <h3>Pokemon Name: {pokeObjToRender.name}</h3>
          <img src={pokeObjToRender.sprites.front_shiny} alt='Best Starter Ever..Change My Mind' />
        </div>)
        :
        <>Loading....</>
      }

      
    </>
  )
}

export default App
