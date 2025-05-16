import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSub] = useState("");



  const handleReset = () => {
    setUsername('');
    setPassword('');
    setSub('');
  };


 const handleLogin = () => {
  const data={name, password}
  setSub(JSON.stringify(data))
    
  }

  return (
    <div>
      <pre>{submittedData}</pre>
      <h2>Login Page</h2>
      <p>{name}</p>
      <input
        type="text"
        placeholder="username"
        value={name}
        onChange={(e) => setUsername(e.target.value)}
      />

      <p>{password}</p>

      <input
        type="password"
         placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br></br>
      <button onClick={handleReset}>Reset</button>       <button onClick={handleLogin}>login</button>
      <pre>{submittedData}</pre>

      
    </div>
    
  );
};

export default LoginPage;
