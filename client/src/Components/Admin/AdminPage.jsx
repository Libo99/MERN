import React, { useEffect, useState } from "react";
import './Admin.css';
import Footer from "../Footer";


const AdminPage = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const url = "http://localhost:6592/user";

    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setUser(data);
    };

    getData();
  }, []);

  

  return (
    <div className="admin">
      <h1 className="admin-header">Admin</h1>
      <ul className="ul">
        {user.map((user, index) => (
          <li className="list" key={index}>{user.mail}</li>
        ))}
      </ul>
      <Footer/>
    </div>
  );
};

export default AdminPage;
