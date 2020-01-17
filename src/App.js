import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [chain, setChain] = useState()
  const [userID, setUserID] = useState(`kathryn\n`)
  let trans = []
  chain && chain.map(block => trans.push(block.transactions))
  // console.log('trans', trans)
  let count = 0
  if(trans.length>0){
    trans.map(obj =>{
      // console.log('map of trans', obj)
      if(obj.length > 0){
        obj.map(el => {
          // console.log("second map",el)
          if(userID == el.recipient){
            // console.log("third console log")
            count += el.amount
          }
      })
      return count
      }
    })
  }
  useEffect(()=> {
    axios.get('http://localhost:5000/chain')
    .then(res => {
      console.log('chain', res.data.chain)
      setChain(res.data.chain)
    })
    .catch(err => {
      console.log(err)
    })

  }, [])
  const handleSubmit = event => {
    event.preventDefault();
    
  }
    const handleChange = event => {
    console.log(event.target.value)
    console.log(event.target.name)
    setUserID(event.target.value)
    console.log('in handlechange', userID)
  }
  return (
    <div className="App">
      hello
         
      
        
      
    <p>you have {count}</p>
    <h2>change id</h2>
    <form onSubmit={event => handleSubmit(event)}>
    <input
      label="id"
      name="id"
      type="text"
      value={userID}
      onChange={event => handleChange(event)}
    />
    </form>

    </div>
  );
}

export default App;
