import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import {translation} from "./I18n/i18n";
function App() {
  const lang = useSelector(state=> state.languageReducer.language);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <button  onClick={(()=>dispatch({type:'fr'}))}>français</button>
        <button  onClick={(()=>dispatch({type:'en'}))}>anglais</button>
      </div>    
      <div className='titre'>
          <h1>{translation(lang,"see")}</h1>
      </div>  
    </div>
  );
}

export default App;
