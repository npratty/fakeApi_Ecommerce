import React, { useState } from "react";
import { signIn } from "./services";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const SignIn = async () => {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const emailValidate = userName.match(pattern);

    if (!emailValidate) {
      setErrMsg("Enter valid email");
      return;
    }
    const url = "https://bundl.one/api/users/authenticate";
    const data = {
      email: userName,
      password: passWord,
    };
    const response = await signIn(url, data);

    if (response.success) {
      navigate("/home");
      console.log("successful");
    } else {
      setErrMsg(response.message);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#2f4050",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#2f4050",
          height: "100vh",
        }}
      >
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "250px",
              width: "400px",
              backgroundColor: "white",
              marginTop: "100px",

              padding: "20px 20px",
            }}
          >
            <h4 style={{ marginLeft: "150px" }}>Sigin</h4>
            {errMsg && (
              <Alert style={{ height: "55px" }} key="danger" variant="danger">
                {errMsg}
              </Alert>
            )}
            <div>
              <input
                style={{
                  width: " 260px",
                  height: "30px",
                  border: "1px solid transparent",
                  marginLeft: "40px",
                }}
                type={"text"}
                placeholder={"Username"}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </div>
            <div
              style={{
                marginTop: "10px",
              }}
            >
              <input
                style={{
                  width: " 260px",
                  height: "30px",
                  border: "1px solid transparent",
                  marginLeft: "40px",
                }}
                type={showPassword ? "text" : "password"}
                placeholder={"Password"}
                onChange={(e) => setPassWord(e.target.value)}
              ></input>{" "}
              {showPassword ? (
                <i
                  class="fa fa-eye-slash"
                  aria-hidden="true"
                  onClick={() => setShowPassword(false)}
                ></i>
              ) : (
                <i
                  class="fa fa-eye"
                  aria-hidden="true"
                  onClick={() => setShowPassword(true)}
                ></i>
              )}
            </div>
            <div style={{ marginTop: "10px" }}>
              <button
                style={{
                  width: " 270px",
                  height: "35px",
                  backgroundColor: "#0d6efd",
                  color: "white",
                  border: "1px solid transparent",
                  marginLeft: "40px",
                }}
                onClick={SignIn}
              >
                Signin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
