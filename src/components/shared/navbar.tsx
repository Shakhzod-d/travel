
import { NavbarItems } from "../../utils"
import { Link, useLocation } from "react-router-dom"
import { NavItems } from "../../types"
import { closeMenu } from "../../store/main-slice"
import { useDispatch } from "react-redux"
import { twMerge } from 'tailwind-merge'

interface Props{
  borderColor: string,
  className?: string
}

const Navbar = ({ borderColor, className }: Props) => {
  const { navItems } = NavbarItems()
  const dispatch = useDispatch()
  const closeHandler: React.MouseEventHandler<HTMLLIElement> = () => {
    dispatch(closeMenu())
  }
  let location = useLocation()
  let width = window.innerWidth

  return (
    <ul className={twMerge(`flex pr-5 lg:flex-col lg:pr-0 items-center lg:items-start ${width < 1024 ? '*:text-black' : '*:text-white'}`, className)}>
        {
          navItems.map((item:NavItems) => (
            <li className="navItem lg:mb-4 relative w-max" key={item.id} onClick={closeHandler}>
              <Link to={item.path} className={`capitalize mr-4 lg:text-2xl md:text-xl cursor-pointer ${location.pathname === item.path ? `border-b-[1px] border-${borderColor}` : 'border-transparent'}`}>{item.name}</Link>
            </li>
          ))
        }
    </ul>
  );
};

export default Navbar;
