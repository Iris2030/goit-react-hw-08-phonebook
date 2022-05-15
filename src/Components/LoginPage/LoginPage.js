import { useState } from "react"
import { useDispatch } from "react-redux"
import { logIn } from "../Auth/Auth-operations"
import { useSelector } from "react-redux"
import s from './LoginPage.module.css'



export default function LoginPage(){
// const userEmail = useSelector(state => state.auth.user.email)

// console.log(userEmail);

    const dispatch = useDispatch()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const handleInput = (event) => {
        const { name, value } = event.target;
    
        switch (name) {
          case "email":
            setEmail(value);
            break;
    
          case "password":
            setPassword(value);
            break;
    
          default:
            return;
        }
      };

function handleSubmit(event){
    event.preventDefault();
    console.log(event.target.email.value);

    dispatch(logIn({email, password}))
    resetForm()

}

function resetForm(){
    setEmail('')
    setPassword('')
}



return(
<>
    <h1 className={s.title}>Login page</h1>
    <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>mail</label>
        <input className={s.input}
        value={email}
        onChange={handleInput}
        type="mail"
        name="email"
        required/>

        <label className={s.label}>password</label>
        <input className={s.input}
        value={password}
        onChange={handleInput}
        type="text"
        name="password"
        required/>
        
        <button className={s.button} type="submit" >login</button>
    </form>
    </>
)
}