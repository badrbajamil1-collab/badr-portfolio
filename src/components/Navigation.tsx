import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const links: Array<[string, string]> = [
  ['Home', 'home'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Leadership', 'leadership'],
  ['Skills', 'skills'],
  ['Contact', 'contact'],
];

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      navigate('/');
      return;
    }
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a className="nav-brand" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          BF
        </a>
        <div className="nav-divider" />
        {links.map(([label, id]) => (
          <a key={id} className="nav-link" href={`/#${id}`} onClick={(e) => goTo(e, id)}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
