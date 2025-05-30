import React from 'react';

function Header() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '60px',
      backgroundColor: '#0f0f0f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      zIndex: 1000,
      boxSizing: 'border-box'
    }}>
      {/* Left - Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube"
          style={{ height: '24px' }}
        />
      </div>

      {/* Center - Search */}
      <div style={{
        flex: 1,
        maxWidth: '500px',
        margin: '0 40px',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #555',
        borderRadius: '24px',
        backgroundColor: '#222'
      }}>
        <input
          type="text"
          placeholder="Search"
          style={{
            flex: 1,
            padding: '8px 16px',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            color: '#fff',
            fontSize: '14px'
          }}
        />
        <button style={{
          padding: '8px 16px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: '#fff',
          fontSize: '18px'
        }}>
          🔍
        </button>
      </div>

      {/* Right - Buttons */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#272727',
          border: 'none',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          <span style={{ fontSize: '18px', marginRight: '8px' }}>+</span> Create
        </button>

        <button style={{
          background: 'none',
          border: 'none',
          color: 'orange',
          fontSize: '20px',
          cursor: 'pointer'
        }}>
          🔔
        </button>

        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#947b6c',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '14px',
          cursor: 'pointer'
        }}>
          R
        </div>
      </div>
    </header>
  );
}

export default Header;
