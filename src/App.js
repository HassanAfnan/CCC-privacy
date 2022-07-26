import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React,{useEffect,useState} from 'react';

function App() {

  const [results, setResults] = useState([])
  
  useEffect(async()=>{

    let config = {
      method:'GET',
      url:'https://shy-thunder-32704.botics.co/modules/privacy-policy/',
      headers: {
        "content-type":"application/json",
      }
    }


    try {
      let response = await axios(config)
      setResults(response.data.results)
      
    } catch (error) {
      console.log(error)
      alert("An Error Occured Fetching Privacy Policy, Please check your internet connection")
    }

  },[])


  return (
    <div className="App">
      <p style={{fontSize:'30px',fontWeight:'600',textAlign:'center'}}>Come Clean Calculator Privacy Policy</p>
      {
        results.map((result,index)=>{
          return(
            <p style={{textAlign:'center'}}>{result.body}</p>
          )
        })
      }
    </div>
  );
}

export default App;
