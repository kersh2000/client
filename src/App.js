import './App.css';
import { useEffect, useState } from 'react';

import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users')
      .then(res => {
        setUsers(res.data)
      }).catch( error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>User App</h1>

      {
        users.map(user => {
          <div key={user.id}>
            <h2>{user.username}</h2>
            <h3>{user.password}</h3>
          </div>
        })
      }
    </div>
  );
}

export default App;
