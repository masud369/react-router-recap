import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Data = (props) => {
    const {name,email,id}= props.user;
    const style ={
        border:'1px solid red',
        padding:'20px',
        margin:'10px',
        borderRadius:'10px',

        } 
    const navigate = useNavigate();
    const clickHandeler = (userid)=>{
        navigate(`/user/${userid}`);
    }
    return (
        <div style={style}>
              <h2>{name}</h2>  
              <p>{email}</p>  
              <p>ID: Show details of<Link to={`/user/${id}`}> {id}</Link></p>
              <button onClick={()=>clickHandeler(id)}>Details</button>
        </div>
    );
};

export default Data;