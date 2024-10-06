import logo from '../image/logo.svg'
import {pageLinks} from '../data'
import {icons} from '../data'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((item) =>{
            return (
              <li key={item.id}>
                <a href={item.href} className="nav-link">
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {icons.map((obj) => {
            const {link, icon, id} = obj;
            return (
              <li key={id}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
