import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/insurance">Insurance</Link></li>
        <li><Link to="/eyelib">Eye Library</Link></li>
        <li><Link to="/loc-hr">Locations & Hours</Link></li>
        <li><Link to="/hipaa">HIPAA</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
