import React, {useState} from 'react'; 
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [username,setusername] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  
  const handleLogin = () => {
    console.log({username},{password})
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
     username: username,
     password:password,
    //username: 'kminchelle',
    //password: '0lelplR',
    // expiresInMins: 60, // optional
  })
})
.then(res => res.json())
.then((data) => {
  if(data.token){
    localStorage.setItem("token", data.token);
    navigate("/home");
  }
})
.catch((error) => console.log("errmessage", error.message));
  };



  const handleOnChange = (event) => {
     if (event.target.name === "username"){
      setusername(event.target.value)
     } else if (event.target.name ==="password"){
      setpassword(event.target.value)     }
  }

  return(
    <div>
        <h1>Login Page</h1>
        <div>
          <label htmlFor="username">UserName: </label>
          <input type="text" name="username" onChange={handleOnChange} placeholder="Type your name as kminchelle" value={username} />
        </div>
        <div>   
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" onChange={handleOnChange} placeholder="Type User password as 0lelplR" value={password} />
        </div>
        <button onClick={handleLogin}>Login</button>
    </div>
   
  )
}

export default Login;
