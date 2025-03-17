import '../../css/bootstrap.min.css';
import '../../css/cart.css';
import '../../css/style.css';
import HeaderMenu from './HeaderMenu';
import { Menu } from "../../utilities/MenuData";
import HeaderSubMenu from './HeaderSubMenu';
import Logo from './Logo';
import HeaderCart from './HeaderCart';



function Header() {
    return (
        <>
            <div className="container-fluid fixed-top">
                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                       <Logo />
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                        >
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                {Menu.map((menuItem, Index) => (
                                   menuItem.title !== "Profile" ? <HeaderMenu key={Index} menuItem={menuItem} /> : null
                                ))}
                            </div>
                            <div className="d-flex m-3 me-0">
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" id="servicesDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Varsha
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                        {Menu.map((subItem, index) => (
                                            subItem.submenu ? (
                                                <HeaderSubMenu key={index} subItem={{ submenu: subItem.submenu }} />
                                            ) : null
                                        ))}
                                    </ul>
                                </div>
                                <HeaderCart />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header;