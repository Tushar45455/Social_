import React, { useState } from 'react';

const Register: React.FC = () => {
  const [name, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCPassword] = useState('');
 
  const [submittedData, setSub] = useState("");


  const handleReset = () => {
    setUsername('');
    setemail('');
    setPassword('');
    setCPassword('');
  };


 const handleLogin = () => {
  const data={name, email,password,Cpassword}
  setSub(JSON.stringify(data))
    
  }

  return (
    <div>
      <pre>{submittedData}</pre>
      <h2>Register Page</h2>
      <p>{name}</p>
      <input
        type="text"
        placeholder="username"
        value={name}
        onChange={(e) => setUsername(e.target.value)}
      />

      
      <p>{email}</p>
      <input
        type="text"
         placeholder="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
  <p>{password}</p>
      <input
      type="password"
       placeholder="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
  <p>{Cpassword}</p>
      <input
      type="Cpassword"
      placeholder="confirm password"
      value={Cpassword}
      onChange={(e) => setCPassword(e.target.value)}
      />

      <br></br>
      <button onClick={handleReset}>Reset</button>       <button onClick={handleLogin}>login</button>
      <pre>{submittedData}</pre>
    </div>
    
  );
};

export default Register;
