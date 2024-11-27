import { Link } from "react-router-dom";

function NavMenu () {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top" aria-label="Menú de navegación principal">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Recetas de cocina</Link>
              
              
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" 
                      aria-controls="offcanvasDarkNavbar" aria-label="Abrir menú de navegación" role="button">
                <span className="navbar-toggler-icon"></span>
              </button>
              
              
              <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" 
                   aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Recetas de cocina</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" 
                          aria-label="Cerrar menú"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                    </li>
                    
                    
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" 
                         aria-haspopup="true" aria-expanded="false" aria-label="Menú desplegable de recetas">
                        Recetas
                      </a>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li><Link className="dropdown-item" to="/text-recipe">En texto</Link></li>
                        <li><Link className="dropdown-item" to="/video-recipe">En video</Link></li>
                      </ul>
                    </li>
                    

                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </>
    );
}

export default NavMenu;