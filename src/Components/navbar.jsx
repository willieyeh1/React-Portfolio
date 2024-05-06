// Imports Link and useLocation hooks
import { Link, useLocation } from 'react-router-dom';


function Navbar() {
  // const currentPage = useLocation().pathname;
  // HTML
  return (
    <>
      <ul >
        {/* Sets the route in the adress bar appropriatly, which is then used to render the corresponding page in main.jsx */}
        <li >
          <Link to="/AboutMe">AboutMe</Link>
        </li>
        <li >
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li >
          <Link to="/ContactMe">ContactMe</Link>
        </li>
        <li >
          <Link to="/Resume">Resume</Link>
        </li>

      </ul>
    </>
    // Note, I removed 'className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}' I believe it changes the page name, but needs bootstrap
  );
}

// Exports the Navbar page
export default Navbar;