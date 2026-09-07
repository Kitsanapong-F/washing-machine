import React from 'react';

export default function BottomNav({ setCurrentPage, activePage }) {
  return (
    <nav className="bottom-nav">
      <button
        onClick={() => setCurrentPage('login')}
        className={activePage === 'login' ? 'active' : ''}
      >
        🔐 Login
      </button>
      <button
        onClick={() => setCurrentPage('blank')}
        className={activePage === 'blank' ? 'active' : ''}
      >
        📱 หน้าหลัก (Layout)
      </button>
    </nav>
  );
}
