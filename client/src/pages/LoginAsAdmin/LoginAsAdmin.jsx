import axios from 'axios';
import { useState } from 'react';

const LoginAsAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your authentication logic
      const response = await axios.post('/api/v1/admin/login', { email, password });
      // Store the token or session info if applicable
      console.log(response.data);
      // Redirect or update state as necessary
    } catch (error) {
      setMessage('Login failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login As Admin</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginAsAdmin;