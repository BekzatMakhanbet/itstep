import { useState } from 'react';
import './App.css';
import Input from './Input';

function App() {

  const [formValues, setFormValues] = useState({});

  const [login, setLogin] = useState("");
  const [isLoginCorrect, setIsLoginCorrect] = useState(true);
    
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();

    console.log({login, password});

  }

  const onChangeInput = (e, name, pattern) => {
    const isMatch = e.target.value.match(pattern)


    setFormValues({...formValues, [name]: e.target.value })
  }

  const onChangeLogin = (e) => {
    const isMatch = e.target.value.match()

    if(isMatch){
      setIsLoginCorrect(true)
      console.log("URAAA")
    } else {
      setIsLoginCorrect(false)
      console.log("Not matches")
    }

    setLogin(e.target.value)

  }

  const onChangePassword = (e) => {
    const isMatch = e.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/)

    if(!!isMatch){
      setIsPasswordCorrect(true)
      console.log("URAAA")
    } else {
      setIsPasswordCorrect(false)
      console.log("Not matches")
    }

    setPassword(e.target.value)
  }

  console.log(formValues)

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <Input name='login' title='Логин' onChange={(e)=>onChangeInput(e, "login", /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)} placeholder="Please fill your login" isCorrect={isLoginCorrect}  />      
        <Input name='password' title='Пароль' onChange={onChangePassword} placeholder="Fill your password" isCorrect={isPasswordCorrect}  />

        <button type='submit'>Submit form</button>
      </form>
    </div>
  );
}

export default App;
