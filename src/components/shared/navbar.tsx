// import React, { useState } from "react"
import { navItems } from "../../utils"
import { Link, useLocation } from "react-router-dom"
import { NavItems } from "../../types"
import { closeMenu } from "../../store/main-slice"
import { useDispatch } from "react-redux"

const Navbar = () => {

  const dispatch = useDispatch()
  const closeHandler: React.MouseEventHandler<HTMLLIElement> = () => {
    dispatch(closeMenu())
  }
  let location = useLocation()
  

  return (
    <ul className="flex mr-5 lg:flex-col lg:mr-0 items-center lg:items-start">
        {
          navItems.map((item:NavItems) => (
            <li className="navItem lg:mb-4 lg:w-max relative" key={item.id} onClick={closeHandler}>
              <Link to={item.path} className={`capitalize mr-4 lg:text-2xl md:text-xl cursor-pointer  ${location.pathname === item.path ? 'border-black border-b-[1px]' : 'border-transparent animation'}`}>{item.name}</Link>
            </li>
          ))
        }
    </ul>
  )
}

export default Navbar