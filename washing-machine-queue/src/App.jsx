import React, { useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Login from './pages/Login';
import BlankPage from './pages/BlankPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
    setCurrentPage('blank'); // ล็อกอินเสร็จพาไปหน้าหลัก
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentPage('login');
  };

  return (
    <div className="app-container">
      <Header />

      <main className="app-main">
        {!isLoggedIn ? (
          <Login onLoginSuccess={handleLoginSuccess} />
        ) : (
          <div className="welcome-box">
            <h3>ยินดีต้อนรับ</h3>
            <p>คุณ {currentUser.name} (ห้อง {currentUser.room})</p>
            <button onClick={handleLogout} className="logout-btn">
              ออกจากระบบ
            </button>
          </div>
        )}

        {/* แสดงหน้า BlankPage หากสลับแท็บ */}
        {isLoggedIn && currentPage === 'blank' && (
          <div style={{ marginTop: '20px', width: '100%' }}>
            <BlankPage />
          </div>
        )}
      </main>

      <BottomNav setCurrentPage={setCurrentPage} activePage={currentPage} />
    </div>
  );
}

export default App;
