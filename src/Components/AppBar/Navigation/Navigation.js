import { NavLink } from "react-router-dom"
import s from '../AppBar.module.css'


export default function Navigation(){
    return(
        <nav>
        <NavLink className={({isActive}) => (isActive? `${s.active}` : `${s.link}`)} to="/" >
          Главная
        </NavLink>
    
        <NavLink className={({isActive}) => (isActive? `${s.active}` : `${s.link}`)} to="/contacts" >
          Контакты
        </NavLink>
      </nav>
    )
}