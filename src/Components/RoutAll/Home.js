import { useEffect, useState } from 'react';
import Data from '../Data/Data';
import Menu from '../Menu/Menu';


const Home = () => {
    const [users, setUsers]=useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data=>setUsers(data))
    },[]);
    return (
        <div>
            {/* <Menu></Menu> */}
            {
            users.map(user=><Data user={user} key={user.id}></Data>)
            }
   
    
       

        </div>)}


export default Home;