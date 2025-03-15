import '../../css/bootstrap.min.css';
import '../../css/cart.css';
import '../../css/style.css';
import HeaderMenu from './HeaderMenu';
import { Menu } from "../../utilities/MenuData"; 



function Header() {
    return (
        <>
            <div className="container-fluid fixed-top">
                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <a href="index.html" className="navbar-brand p-0">
                            <img src="img/logo_final.png" alt="Logo" className="head_logo" />
                        </a>
                        <button
                            className="navbar-toggler py-2 px-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                        >
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                {Menu.map((menuItem, Index) => (
                                    <HeaderMenu key={Index} menuItem={menuItem} />
                                ))}
                            </div>
                            <div className="d-flex m-3 me-0">
                                <div className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        id="servicesDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Varsha
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                        <li><a href="#" className="dropdown-item">Profile</a></li>
                                        <li><a href="#" className="dropdown-item">Orders</a></li>
                                        <li><a href="#" className="dropdown-item">Wishlist</a></li>
                                    </ul>
                                </div>
                                <a
                                    href="#"
                                    className="position-relative me-4 my-auto"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#cartOffcanvas"
                                    style={{color: "#2a3d8f"}}
                                >
                                    <img src="img/cart.png" alt="cart" width="25%" />
                                    <span
                                        className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                                        style={{
                                            top: "-5px",
                                            left: "23px",
                                            height: "18px",
                                            minWidth: "18px",
                                            fontSize: "13px",
                                          }}>3</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header;