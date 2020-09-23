import React from 'react';
import './App.css';
import Profile from './Profile'
import Hello from './Hello';

function App() {
  const user = {
    name: "Brian",
    interests: "Reading, Swimming, Technology",
    age: 9,
    image: "https://images.unsplash.com/photo-1470071131384-001b85755536?auto=format&fit=crop&w=200&q=80",
    color: "Red",
    movie: "Star Wars"
  };


    return (    
    <div>
      <div className = "header">
        <Hello/>
      </div>
      <div className="App">      
        <Profile user={user} />    
      </div>  
    </div>
      );
}

export default App;
