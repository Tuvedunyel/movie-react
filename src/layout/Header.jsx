import { Outlet, Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <div className='container'>
          <nav>
            <ul id='main-menu'>
              <li>
                <Link to='/'>Accueil</Link>
              </li>
              <li>
                <Link to='/Series' >Séries</Link>
              </li>
              <li>
                <Link to='/Films'>Films</Link>
              </li>
              <li>
                <Link to='/Liste'>Ma liste</Link>
              </li>
              <li>
                <Link to='/Rechercher'>Rechercher</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </header>
    </>
  );
}

export default Header;
