import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://creditor-backend-gvtd.onrender.com';

const initialUserState = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  phone: '',
  gender: '',
  dob: '',
};

export default function SignUpWithOTP() {
  const [user, setUser] = useState(initialUserState);
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1: form, 2: otp
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Register user (send email, phone)
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await axios.post(`${BASE_URL}/api/auth/registerUser`, {
        email: user.email,
        phone: user.phone,
      });
      setStep(2);
      setSuccess('OTP sent to your email.');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP (send all details + otp)
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const payload = { ...user, otp };
      const res = await axios.post(`${BASE_URL}/api/auth/verify-otp`, payload);
      // Assume token is in res.data.token
      if (res.data.token) {
        localStorage.setItem('session_token', res.data.token);
        setSuccess('Account created! Redirecting to dashboard...');
        // Redirect to dashboard after short delay
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1500);
      } else {
        setError('No session token received.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'OTP verification failed.');
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await axios.post(`${BASE_URL}/api/auth/resend-otp`, { email: user.email });
      setSuccess('OTP resent to your email.');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to resend OTP.');
    } finally {
      setLoading(false);
    }
  };

  // Logout (delete session token)
  const handleLogout = () => {
    localStorage.removeItem('session_token');
    window.location.href = '/';
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
      {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
      {success && <div style={{ color: 'green', marginBottom: 12 }}>{success}</div>}
      {step === 1 && (
        <form onSubmit={handleRegister}>
          <input name="first_name" placeholder="First Name" value={user.first_name} onChange={handleChange} required style={{ width: '100%', marginBottom: 8 }} />
          <input name="last_name" placeholder="Last Name" value={user.last_name} onChange={handleChange} required style={{ width: '100%', marginBottom: 8 }} />
          <input name="email" type="email" placeholder="Email" value={user.email} onChange={handleChange} required style={{ width: '100%', marginBottom: 8 }} />
          <input name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} required style={{ width: '100%', marginBottom: 8 }} />
          <input name="password" type="password" placeholder="Password" value={user.password} onChange={handleChange} required style={{ width: '100%', marginBottom: 8 }} />
          <input name="gender" placeholder="Gender" value={user.gender} onChange={handleChange} required style={{ width: '100%', marginBottom: 8 }} />
          <input name="dob" type="date" placeholder="Date of Birth" value={user.dob} onChange={handleChange} required style={{ width: '100%', marginBottom: 8 }} />
          <button type="submit" disabled={loading} style={{ width: '100%', padding: 8 }}>
            {loading ? 'Sending OTP...' : 'Create Account'}
          </button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleVerifyOtp}>
          <input
            name="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            style={{ width: '100%', marginBottom: 8 }}
          />
          <button type="submit" disabled={loading} style={{ width: '100%', padding: 8 }}>
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
          <button type="button" onClick={handleResendOtp} disabled={loading} style={{ width: '100%', marginTop: 8, padding: 8 }}>
            Resend OTP
          </button>
        </form>
      )}
      {/* Logout button for demonstration, can be moved to dashboard */}
      {localStorage.getItem('session_token') && (
        <button onClick={handleLogout} style={{ width: '100%', marginTop: 16, padding: 8, background: '#eee' }}>
          Logout
        </button>
      )}
    </div>
  );
} 