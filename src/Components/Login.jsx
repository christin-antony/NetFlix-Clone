import React, { useState } from "react";
import image3 from "./image/logo.png";
import './Login.css'
import { IoLanguageOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email == "admin@123" && password == "admin") {
      navigate('/page2')
    } else {
      alert("Please enter valid email and password.");
    }
  };

  return (
    <div>
  
      <div className="Fdiv00">
      <img src={image3} alt="" className="Fimage1" />
      <div className="body1">
      <form >
          <h1 className="h1">Sign in</h1>
          <table className="table">
            <tr>
              <td className="td">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email or mobil number"
                  size="40"
                  class="email1"
                />
              </td>
            </tr>

            <tr>
              <td className="td">
                <input
                  type="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  size="40"
                  class="pass2"
                />
              </td>
            </tr>
            <tr>
              <td className="td">
                <button type="button" onClick={handleLogin} className="btn">
                Sign in
                </button>
              </td>
            </tr>
            <p className="Tp1"> OR</p>
            <tr>
              <td className="td">
                <button type="button" className="btnt1">
                Use a sign-in code
                </button>
              </td>
            </tr>
            
          </table>
          <div>
            <p className="Tp2">Forgot password?</p>
            <div style={{display:"flex",justifyContent:"left",gap:"10px",marginLeft:'80px',marginBottom:"10px"}}>
            <input type="checkbox" style={{marginBottom:"5px", backgroundColor:"transparent"}} />
            <p className="Tp5">Remember me</p>
            </div>
            <p className="Tp3"> <span style={{color:" rgb(105, 105, 107)"}}>New to Netflix?</span> Sign up now.</p>
            <p className="Tp4">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more</a>.</p>
          </div>
        </form>
        </div>
        
      </div>
      <div className="Logindiv2">

      </div>
      <div className="container-fluid re-b-c text-white pt-0 px-5 ps-5 pb-0">
        <div className="row p-5">
          <p className="Fp6">Questions? Call 000-800-919-1694</p>
          <div className="col-lg-2 col-md-6  pt-0  ps-5  pb-0 mx-5 ms-0">
            <a className="Fp7">FAQ</a> <br /> <br />
          
           
            <a className="Fp7">Cookie Preference</a> <br />
            <select className="select">
              <option>
                <p>
                  <IoLanguageOutline /> English
                </p>
              </option>

              <option>हिन्दी</option>
            </select>{" "}
            <br /> <br />
            
          </div>
          <div className="col-lg-2 col-md-6  pt-0  mx-5 ps-5 pb-0 ms-0">
            <a className="Fp7">Help Centre</a> <br /> <br />
            <a className="Fp7">Corporate Information</a> <br /> <br />
            
          </div>
          <div className="col-lg-2 col-md-6  pt-0  mx-5 ps-5 pb-0 ms-0">
          <a className="Fp7">Terms of Use</a> <br /> <br />
           
          </div>
          <div className="col-lg-2 col-md-6  pt-0  mx-5 ps-5 ms-0 pb-0">
          <a className="Fp7">Privacy</a> <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
