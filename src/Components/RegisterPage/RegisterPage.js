import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "../Auth/Auth-operations"
import s from './RegisterPage.module.css'

export default function RegisterPage(){
    const dispatch = useDispatch()
    const [name,setName] = useState('')
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

            case "name":
                setName(value);
                break;
    
          default:
            return;
        }
      };

function handleSubmit(event){
    event.preventDefault();
    dispatch(register({name,email,password}))
    resetForm()

}

function resetForm(){
    setEmail('')
    setPassword('')
    setName('')
}



return(
<>
    <h1 className={s.title}>Register page</h1>
    <form className={s.form} onSubmit={handleSubmit}>

        <label className={s.label}>name</label>
        <input 
        className={s.input}
        value={name}
        onChange={handleInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required/>

        <label className={s.label}>mail</label>
        <input 
        className={s.input}
        value={email}
        onChange={handleInput}
        type="mail"
        name="email"
        required/>

        <label className={s.label}>password</label>
        <input
        className={s.input}
        value={password}
        onChange={handleInput}
        type="text"
        name="password"
        required/>
        
        <button className={s.button} type="submit" >register</button>
    </form>
    </>
)
}