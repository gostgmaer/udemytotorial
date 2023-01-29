import React, { useEffect, useState } from "react";
import "./login.scss";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [passValid, setPassValid] = useState({});
  const [emailValid, setEmailValid] = useState({});
  const [formValid, setFormValid] = useState(true);
  const [isloggedIn, setIsloggedIn] = useState(false);

  const strodUserInfo = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (strodUserInfo === "1") {
      setIsloggedIn(true);
    }
  }, []);

  const validEmail = () => {
    if (user.includes("@")) {
      setEmailValid({});
    } else {
      setEmailValid({ borderColor: "red" });
    }
  };
  const validPass = () => {
    if (pass.length >= 6) {
      setPassValid({});
    } else {
      setPassValid({ borderColor: "red" });
    }
  };
  const validFormData = () => {
    setFormValid(pass.length >= 6 && user.includes("@"));
  };

  useEffect(() => {
    validEmail();
    validPass();
  }, [pass, user]);
  useEffect(() => {
    const identify = setTimeout(() => {
      validFormData();
      console.log("executing");
    }, 1000);
    return () => {
      console.log("CleanUp");
      clearTimeout(identify);
    };
  }, [pass, user]);

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(e);
    localStorage.setItem("isLoggedIn", "1");
    setIsloggedIn(true);
  };
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    setIsloggedIn(false);
  };
  return (
    <div className="Login">
      <div className="loginWrapper">
        {isloggedIn ? (
          <div className="afterLogedIn">
            <h3>You have Logged In</h3>{" "}
            <button onClick={logoutHandler} className="btn btn-primary">
              Logout
            </button>{" "}
          </div>
        ) : (
          <form>
            <div className="mb-3">
              <input
                type="email"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="email"
                className="form-control"
                id="exampleInputEmail1"
                style={emailValid}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={pass}
                style={passValid}
                onChange={(e) => setPass(e.target.value)}
                placeholder="**********"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              type="submit"
              onClick={loginHandler}
              disabled={!formValid}
              className="btn btn-primary">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
