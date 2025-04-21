import { NavLink } from "react-router-dom"

export const ItemNavLink = ({route,content,stylesNavLink}) => {
  return (
    <ul>
      <li>
       <NavLink to={route}>{content}</NavLink> 
      </li>
    </ul>
  )
}


