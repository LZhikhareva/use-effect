import { useState, useEffect } from 'react';
import './App.css';
import Details from './components/Details';
import List from './components/List';

function App() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState('');
  const fetchData = async () => {
    {
      try {
        const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
        const data = await response.json();
        setUsers(data);
      } catch (e) {
        console.log(e)
      }
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  function getId(id) {
    console.log(id)
    setId(id);
  }
  return (
    <>
      <div className='app'>
        <List users={users} getId={getId} />
        <Details id={id} />
      </div>
    </>
  )
}
export default App;
