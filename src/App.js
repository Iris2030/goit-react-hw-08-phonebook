import {Suspense, useEffect, lazy} from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from './Components/Auth/Auth-operations';
import PrivateRoute from './Components/PrivatRoute/PrivateRoute';

const HomePage = lazy(() => import('./Components/HomePage/HomePage'))
const LoginPage = lazy(() => import('./Components/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('./Components/RegisterPage/RegisterPage'))
const ContactsPage = lazy(() => import('./Components/ContactsPage'))

export default function App() {

const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchCurrentUser())
},[dispatch])

  return (
    <>
    <AppBar/>
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/contacts' element={<PrivateRoute navigateTo='/login'><ContactsPage/></PrivateRoute>} />
     <Route path='/register' element={<RegisterPage/>}/>
     <Route path='/login' element={<LoginPage/>}/>


      </Routes>
      </Suspense>
    </>
  );
}


