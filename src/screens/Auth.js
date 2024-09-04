import React, { useState, useEffect} from 'react';
import { users } from '../data/users';
import Login from '../components/Auth/Login';
import Alert from '../components/Alert';

import { useNavigate } from 'react-router-dom';


function Auth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showAlert]);


  const handleLogin = (username, password) => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      setError('');
    } else {
      setError('Invalid username or password');
      setShowAlert(true);
    //   setTimeout(() => setShowAlert(false), 3000);
    }
  };

  if (user) {
    // return <div>Welcome, {user.username}!</div>;
    navigate('/home');
  }

  return (
    <div>
      <Login onLogin={handleLogin} />
      {showAlert && <Alert message={error} type="error" />}
    </div>
  );
}

export default Auth;