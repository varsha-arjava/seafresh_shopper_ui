import { NavLink } from "react-router-dom";

interface HeaderSubMenuProps {
    subItem: {
        submenu?: {title: string; path: string }[];
    };
}

function HeaderSubMenu({ subItem }: HeaderSubMenuProps) {
    return (
        <>
            {subItem.submenu.map((item, index) => (
                <li key={index}>
                    <NavLink className="dropdown-item" to={item.path}>{item.title}</NavLink>
                </li>
            ))}
        </>
    );
}

export default HeaderSubMenu;