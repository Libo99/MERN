import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profilecard">
          <div className="cardheader">
            <img className="pic" src={picture} alt={name} />
          </div>
          {/* <div className="card-content"> */}
            <h3>
              Name: {name}
            </h3>

            <h3>
              Age: 21
            </h3>
          {/* </div> */}
          <div className="card-bottom">
            <p>Mail: {email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
