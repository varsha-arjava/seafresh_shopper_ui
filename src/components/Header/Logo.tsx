import { NavLink } from "react-router-dom";

function Logo(){
    return(
        <>
        <NavLink to={"/home"} className="navbar-brand p-0" >
            <img src="img/logo_final.png" alt="Logo" className="head_logo" />
        </NavLink>
        </>
    );
}

export default Logo;