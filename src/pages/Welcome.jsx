import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const token = Cookies.get('session_token');
    if (!token) {
      navigate('/'); // Redirect if not authenticated
    } else {
      setIsAuth(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    Cookies.remove('session_token');
    navigate('/');
  };

  if (isAuth === null) {
    // Optionally show a loading spinner here
    return null;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fbfc' }}>
      <div style={{ background: 'white', padding: '48px 32px', borderRadius: '16px', boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1a237e', textAlign: 'center', marginBottom: '0.5em' }}>Welcome to the Creditor Academy</h1>
        <p style={{ fontSize: '1.25rem', color: '#333', textAlign: 'center' }}>
          We’re glad to have you on board!<br/>
          
        </p>
        <button onClick={handleLogout} style={{ marginTop: 32, padding: '12px 32px', fontSize: '1rem', background: '#1a237e', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
          Logout
        </button>
      </div>
    </div>
  );
} 