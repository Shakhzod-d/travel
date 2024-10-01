import { navItems } from "../../utils";
import { Link } from "react-router-dom";
import { NavItems } from "../../types";

const Navbar = () => {
  return (
    <ul className="flex max-[740px]:hidden">
      {navItems.map((item: NavItems) => (
        <li className="navItem" key={item.id}>
          <Link to={item.path} className="capitalize mr-4">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
