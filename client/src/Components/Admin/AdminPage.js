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
      <ul>
        {user.map((user) => (
          <li key={`${user._id}`}>{`${user.username}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
