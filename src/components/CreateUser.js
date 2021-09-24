import axios from "axios";
import React, {useState} from "react";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = () => {
    const user = {
      name,
      password,
    };
    axios.post('http://localhost:5000/users/add', user).then((res)=>{if(res.status === 200){
        setName('')
        setPassword('')
        window.location = "/";
    }else{
        alert(res.data)
    }})
    
  };
  return (
    <div>
      <h1>Створення користувача</h1>
      <input
        value={name}
        onChange={nameHandler}
        type="text"
        placeholder={"Ім`я"}
      />
      <br />
      <input
        value={password}
        onChange={passwordHandler}
        type="text"
        placeholder={"Пароль"}
      />
      <br />
      <button onClick={submitHandler}>Додати користувача</button>
    </div>
  );
}
