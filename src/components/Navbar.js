import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Головна</Link><br/>
      <Link to="/">Офіціанти</Link><br/>
      <Link to="/create">Створити офіціанта</Link><br/>
      <Link to="/user">Створити користувача</Link><br/>
    </div>
  );
}
