import React, { useEffect, useState } from "react";

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
    <div>
      <h1>Admin</h1>
      <ul className="ul">
        {user.map((user, index) => (
          <li className="list" key={index}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
