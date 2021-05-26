import "./App.css";
import {useState} from "react"; 8k (gzipped: 3.3K)

function App(){
const [pokemonName, setPokemonName]=useState("");

    return(
        <div className="App"> 
        <div className ="TitleSection">
            <h1>Pokemon Stats</h1>
        <input type="text" onChange={(event)=>{setPokemonName(event.target.value)}}></input>
        <button>Search Pokemon</button>
            </div>
        </div>
    );
}

export default App;