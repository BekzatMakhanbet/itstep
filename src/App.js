import { useState } from 'react';
import './App.css';

function App() {
  const [login, setLogin] = useState("Мой use state логин !");

  const onSubmit = (e) => {
    e.preventDefault();

  }

  const onChangeLogin = (e) => {
    if(проверка на правильность){
      setLogin(e.target.value)

    } else {
      вызываю ошибку
    }
    console.log(e.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='login'>Логин: </label>
          <input value={login} onChange={onChangeLogin} name="login" />
        </div>
        <div>
          <label htmlFor='password'>Пароль: </label>
          <input name="password"  type='password' />
        </div>
        
        <button type='submit'>Submit form</button>
      </form>
    </div>
  );
}

export default App;
