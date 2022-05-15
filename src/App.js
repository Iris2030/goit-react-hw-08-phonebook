import {Suspense, useEffect, lazy} from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';
import { useDispatch } from 'react-redux';
import useLocalStorage from 'use-local-storage';
import {BsToggleOn} from 'react-icons/bs'
import { fetchCurrentUser } from './Components/Auth/Auth-operations';
import ReactSwitch from 'react-switch';
import  s from './App.module.css'
import PrivateRoute from './Components/PrivatRoute/PrivateRoute';
import PublicRoute from './Components/PublicRoute/PublicRoute';
const HomePage = lazy(() => import('./Components/HomePage/HomePage'))
const LoginPage = lazy(() => import('./Components/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('./Components/RegisterPage/RegisterPage'))
const ContactsPage = lazy(() => import('./Components/ContactsPage'))

export default function App() {
const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light ')
const dispatch = useDispatch()

const switchTheme = () =>{
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme)
}

useEffect(()=>{
  dispatch(fetchCurrentUser())
},[dispatch])

  return (
    <div className={s.wrapper} data-theme ={theme} style={{}}>
    <AppBar/>
    <div className={s.relativeContainer}>
      <div style={{position:'absolute', top:0, right:0}}>
      <ReactSwitch onChange={switchTheme} checked={theme === 'dark'} uncheckedIcon checkedIcon/>
      </div>
    {/* <BsToggleOn onClick={switchTheme} style={{width:40, height: 40, color:'fff',position:'absolute', top:0, right:0, cursor:'pointer'}}/> */}
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
     <Route path='/' element={<PublicRoute><HomePage/></PublicRoute>}/>
     <Route path='/contacts'  element={<PrivateRoute navigateTo='/login'><ContactsPage/></PrivateRoute>} />
     <Route path='/register' element={<PublicRoute restricted><RegisterPage/></PublicRoute>}/>
     <Route path='/login' element={<PublicRoute restricted><LoginPage/></PublicRoute>}/>


      </Routes>
      </Suspense>
      </div>
    </div>
  );
}


