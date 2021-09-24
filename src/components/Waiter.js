import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import cls from './waiterList.module.css'


export default function Waiter() {
  const { id } = useParams();

  const [waiter, setWaiter] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/waiters/${id}`).then((res) => {
      setWaiter(res.data);
    });
  }, [id]);

  return (
    <div>
      <h1>Сторінка офіціанта</h1>
      <div className={cls.waiters}>
        
          <div key={waiter._id} className={cls.waiterCard}>
            <div className={cls.waiterCard__img}>
              <img src={`../images/waitersLogo/${waiter.imgUrl}`} alt="logo" />
            </div>
            <div className={cls.waiterCard__info}>
              <div className={cls.waiterCard__name}>
                {waiter.name} {waiter.lastname}
              </div>
              <div className={cls.waiterCard__city}>Місто: {waiter.city}</div>
              <div className={cls.waiterCard__restorant}>
                Ресторан: {waiter.restorant}
              </div>
              <button>Залишити чайові</button>
            </div>
          </div>
      </div>
    </div>
  );
}
