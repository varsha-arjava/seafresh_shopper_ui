import { NavLink } from "react-router-dom";

interface HeaderMenuProps {
    menuItem: {
        title: string;
        path?: string;
      };
}

function HeaderMenu({ menuItem }: HeaderMenuProps){
    return(
        <>
            <NavLink to={menuItem.path} className="nav-item nav-link active" > {menuItem.title} </NavLink>
        </>
    );
}

export default HeaderMenu;