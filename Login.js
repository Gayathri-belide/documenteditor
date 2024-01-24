import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route,Link,useNavigate} from "react-router-dom";
 const Login = () => {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const handleLogin = async(e) => {
    e.preventDefault();
    const respons = await fetch("http://localhost:5000/login", {
      method: 'POST',
      headers:
      {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:name,
        password: password,
        
      })
    });

    const j = await respons.json();
    console.log("response2", j);
    
    if (!j.success) alert('enter correct credentials')
    else {
      localStorage.setItem("log",'1');
      console.log(localStorage.getItem('log'))
  
      navigate("./after")
    }

  };


  return (<>
    <h1>Welcome to CollabarativeDocumentEditing..Please login to continue</h1>
    <div style={styles.container}>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" id="un" value={name} style={styles.input} onChange={(e) => setname(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} style={styles.input} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div></>
  );
};
export default Login;
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


