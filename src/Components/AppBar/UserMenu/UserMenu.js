import { useSelector,useDispatch } from "react-redux";
import authSelectors from "../../Auth/Auth-selectors";
import { logOut } from "../../Auth/Auth-operations";
import s from "./UserMenu.module.css"
export default function UserMenu (){
    const name = useSelector(authSelectors.getUserName)
    const dispatch = useDispatch()
return(
    <div className={s.wrapper}>
      <span className={s.greeting}>Welcome, {name}</span>
      <button className={s.button} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );}