import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Userdetails = () => {
    const {userId} = useParams();
    const [usersId, setUsersID] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUsersID(data))
    },[])
    return (
        <div>
            <h3>User name is: {usersId.name}</h3>
            <h4>User id is: {usersId.id}</h4>
            <p>User email is: {usersId.email}</p>
        </div>
    );
};

export default Userdetails;