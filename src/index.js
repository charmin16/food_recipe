import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { TrialContextProvider } from './context/TrialContext';
// import {ContextTwoProvider} from './context2/ContextTwo'
import { RecipeContextProvider } from './contextrecipe/RecipeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <TrialContextProvider> */}
    {/* <ContextTwoProvider> */}
    <RecipeContextProvider>
      <App />
    </RecipeContextProvider>
      
    {/* </ContextTwoProvider> */}
      
    {/* </TrialContextProvider>    */}
  </React.StrictMode>
);


