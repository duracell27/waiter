import axios from "axios";
import React, { useState, useEffect } from "react";

export default function CreateWaiter() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [restorantList, setRestorantList] = useState([]);
  const [restorant, setRestorant] = useState("");
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    setRestorantList(["Десятка", "Старий пес", "Профітроль"]);
    setCityList(["Івано-Франківськ", "Львів", "Тернопіль"]);
  }, []);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const lastnameHandler = (e) => {
    setLastname(e.target.value);
  };

  const restorantHandler = (e) => {
    setRestorant(e.target.value);
  };

  const cityHandler = (e) => {
    setCity(e.target.value);
  };

  const imgUrlHandler = (e) => {
    setImgUrl(e.target.files[0].name);
  };

  const submitHandler = () => {
    const waiter = {
      name,
      lastname,
      restorant,
      city,
      imgUrl,
    };

    axios.post("http://localhost:5000/waiters/add", waiter).then((res) => {
      if (res.status === 200) {
        setName("");
        setLastname("");
        setCity("");
        setRestorant("");
        setImgUrl("");
        window.location = "/";
      } else {
        alert(res.data);
      }
    });
  };

  return (
    <div>
      <h1>Створення офіціанта</h1>
      <input
        value={name}
        onChange={nameHandler}
        type="text"
        placeholder={"Ім`я"}
      />{" "}
      <br />
      <input
        value={lastname}
        onChange={lastnameHandler}
        type="text"
        placeholder={"Прізвище"}
      />{" "}
      <br />
      <select defaultValue="" onChange={cityHandler} name="city" id="city">
        <option value="" disabled hidden>
          Виберіть місто
        </option>
        {cityList.map((oneCity) => (
          <option key={oneCity} value={oneCity}>
            {oneCity}
          </option>
        ))}
      </select>
      <select
        defaultValue=""
        onChange={restorantHandler}
        name="restorant"
        id="restorant"
      >
        <option value="" disabled hidden>
          Виберіть ресторан
        </option>
        {restorantList.map((oneRestorant) => (
          <option key={oneRestorant} value={oneRestorant}>
            {oneRestorant}
          </option>
        ))}
      </select>
      <br />
      <input onChange={imgUrlHandler} type="file" /> <br />
      <button onClick={submitHandler}>Додати офіціанта</button>
    </div>
  );
}
