import AuthNav from "./AuthNav/AuthNav"
import Navigation from "./Navigation/Navigation"
import UserMenu from "./UserMenu/UserMenu"
import { useSelector } from "react-redux"
import authSelectors from "../Auth/Auth-selectors"
import s from './AppBar.module.css'

export default function AppBar(){
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return(
        <nav  className={s.navigation}>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}


        </nav>
    )
}