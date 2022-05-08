import { NavLink } from "react-router-dom";
import s from '../AppBar.module.css'

export default function AuthNav (){
    return(
        <nav>
        <NavLink  className={({isActive}) => (isActive? `${s.active}` : `${s.link}`)} to="/register" >Регистрация</NavLink>
        <NavLink  className={({isActive}) => (isActive? `${s.active}` : `${s.link}`)} to="/login" >Логин</NavLink>
         
        </nav>
    )
}