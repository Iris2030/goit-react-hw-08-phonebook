import { useSelector,useDispatch } from "react-redux";
import authSelectors from "../../Auth/Auth-selectors";
import { logOut } from "../../Auth/Auth-operations";

export default function UserMenu (){
    const name = useSelector(authSelectors.getUserName)
    const dispatch = useDispatch()
return(
    <div >
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );}