import { NavLink } from "react-router-dom"
import s from '../AppBar.module.css'
import { useSelector } from "react-redux"
import authSelectors from "../../Auth/Auth-selectors"

export default function Navigation(){
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return(
        <nav>
        <NavLink className={({isActive}) => (isActive? `${s.active}` : `${s.link}`)} to="/" >
          Главная
        </NavLink>
    {isLoggedIn &&  <NavLink className={({isActive}) => (isActive? `${s.active}` : `${s.link}`)} to="/contacts" >
          Контакты
        </NavLink>}
      
      </nav>
    )
}