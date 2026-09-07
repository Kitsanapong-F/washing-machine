import React, { useState } from 'react';
import { mockLogin } from '../services/authService';

export default function Login({ onLoginSuccess }) {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      const response = await mockLogin(studentId, password);
      setIsLoading(false);
      onLoginSuccess(response.user);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-card">
      <h2>เข้าสู่ระบบหอพัก</h2>

      {errorMessage && (
        <div className="error-box">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label>รหัสนักศึกษา</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="เช่น 65001"
            required
          />
        </div>

        <div className="input-group">
          <label>รหัสผ่าน</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••"
            required
          />
        </div>

        <button type="submit" disabled={isLoading} className="submit-btn">
          {isLoading ? 'กำลังตรวจสอบ...' : 'เข้าสู่ระบบ'}
        </button>
      </form>
    </div>
  );
}
