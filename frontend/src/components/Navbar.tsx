import { NavLink } from 'react-router-dom';

function Navbar() {
  const activeStyles = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? 'red' : 'black',
    };
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={activeStyles}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz"
            style={activeStyles}
          >
            Quiz
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
