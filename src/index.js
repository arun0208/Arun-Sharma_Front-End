import React from 'react';
import ReactDOM from 'react-dom/client';
import List from './App';


const name = [{text:"Arun Sharma"},{text:"SteelEye"},{text:"Frontend Assignment"}];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <List items={name}/>
  </React.StrictMode>
);

