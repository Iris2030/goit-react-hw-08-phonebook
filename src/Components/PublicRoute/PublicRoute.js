import { useSelector } from "react-redux";
import authSelectors from "../Auth/Auth-selectors";
import { Navigate } from "react-router-dom";

export default function PublicRoute({children, restricted = false}){
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    const shouldRedirect = isLoggedIn && restricted
    return(
        shouldRedirect ?  <Navigate to='/contacts'/> : children

    )
}