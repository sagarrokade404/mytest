import logo from './logo.svg';
import './App.css';
import XMLParser from 'react-xml-parser';
import convert from 'xml-js';

import axios from 'axios';
function App() {
  axios.get('http://localhost:3001/api/getxmlUsers', {
    "Content-Type": "application/xml; charset=utf-8"
  })
  .then(function (response) {
    // handle success
    // var xml = new XMLParser().parseFromString(response.data); 
    
    console.log('response xml',  convert.xml2js(response.data));
  })
  .catch(function (error) {
    // handle error
    console.log('error', error);
  });

  return (
    <div className="App">
     hello from axios
    </div>
  );
}

export default App;
