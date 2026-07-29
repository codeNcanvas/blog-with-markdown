
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link to="/" className="navbar-brand">
        <span className="brand-mark" aria-hidden="true">M</span>
        <span className="brand-label">The Markdown</span>
      </Link>
      <div className="navbar-actions">
        <ul className="navbar-links">
          <li>
            <NavLink to="/" end>Stories</NavLink>
          </li>
          <li>
            <NavLink to="/admin/login">Admin</NavLink>
          </li>
        </ul>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme(current => current === 'light' ? 'dark' : 'light')}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
