import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link ,useNavigate} from 'react-router-dom';
export default function After()
{
    const [loggedIn, setLoggedIn] = useState(false);
    let navigate = useNavigate();
  const handleLogout = () => {
      localStorage.setItem("log",'0');
      navigate("/")
    };
    return <div className="ml-auto">
    
      <div style={styles.container}>
        <div><Link to="http://localhost:3000">Go to DocumentEditing</Link></div>
<br/><br/>
<button style={styles.button}onClick={handleLogout}>Logout</button>
      </div>
    
       </div>
};
const styles = {
    container: {
      width: '350px',
      margin: 'auto',
      padding: '20px',
      position:'absolute',
      marginLeft:'40%',
      border: '1px solid black',
      borderRadius: '5px',
      marginTop: '50px',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      color:'white',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '8px',
      color:'white',
    },
    input: {
      padding: '8px',
      marginBottom: '16px',
      border: '1px solid #ccc',
      borderRadius: '3px',
      width:'300px',
    },
    button: {
      backgroundColor: '#4caf50',
      color: 'white',
      paddingtop:'800px',
      padding: '10px',
      cursor: 'pointer',
      borderRadius: '3px',
      border: 'none',
      width:'280px'
    },
    button1:
    {
      margin:'20px',
    }
  };