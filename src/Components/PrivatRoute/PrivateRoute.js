import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import authSelectors from "../Auth/Auth-selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children, navigateTo ='/'}){
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return(
isLoggedIn ? children : <Navigate to={navigateTo}/>

    )
}