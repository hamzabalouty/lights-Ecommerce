import React from "react";
import "./Account.css";

const Account = () => {
  return (
    <div className="account">
      <div className="account-title">
        <h4>ACCOUNT</h4>
        <p>Home / Account</p>
      </div>
      <div className="account-form">
        <div className="account-input">
          <input type="text" placeholder="Email" />
        </div>
        <div className="account-input">
          <input type="text" placeholder="Password" />
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Account;
