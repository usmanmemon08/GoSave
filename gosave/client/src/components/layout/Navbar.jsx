import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md transition-colors ${isActive ? 'text-primary' : 'text-text/80 hover:text-primary'}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-base/80 shadow-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="font-display text-xl font-semibold text-text">
            <span className="gradient-text font-bold">GoSave</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navClasses}>Home</NavLink>
            <NavLink to="/about" className={navClasses}>About</NavLink>
            <NavLink to="/partners" className={navClasses}>Partners</NavLink>
            <NavLink to="#contact" className={navClasses}>Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="px-4 py-2 rounded-md text-text/90 hover:text-primary transition">Login</Link>
            <Link to="/register" className="px-4 py-2 rounded-md bg-primary text-white shadow-card hover:scale-[1.02] transition-transform">Get Your Card</Link>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/" onClick={() => setOpen(false)} className={navClasses}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className={navClasses}>About</NavLink>
          <NavLink to="/partners" onClick={() => setOpen(false)} className={navClasses}>Partners</NavLink>
          <div className="pt-2 flex gap-3">
            <Link to="/login" onClick={() => setOpen(false)} className="px-4 py-2 rounded-md text-text/90 hover:text-primary transition">Login</Link>
            <Link to="/register" onClick={() => setOpen(false)} className="px-4 py-2 rounded-md bg-primary text-white shadow-card">Get Your Card</Link>
          </div>
        </div>
      )}
    </header>
  );
}