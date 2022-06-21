import React from "react";
import { Link } from "react-router-dom";

const Login = ({ styles }) => {
  const googleAuth = () => {};
  return (
    <div className={styles.container}>
      <h1 className="text-[40px] font-semibold text-[#2c444e] relative flex items-center justify--center after:content-[''] after:w-[400px] after:h-1 after:rounded-[1px] after:-bottom-5 after:bg-[#2c444e] after:absolute">
        Log in Form
      </h1>
      <div className="flex  mt-[45px] w-[800px] h-[450px] bg-white shadow-formContainer">
        <div className="flex-[1.5] overflow-hidden relative rounded-tl-[50px] rounded-bl-[50px]">
          <img
            className="w-[160%] absolute -left-[150px] -top-[50px]"
            src="./images/login.jpg"
            alt="login"
          />
        </div>
        <div className="flex-2 flex flex-col items-center justify-center">
          <h2 className="text-[25px] font-normal text-[#2c444e] mb-[30px]">
            Members Log in
          </h2>
          <input
            type="text"
            className="w-[320px] h-[35px] p-[5px] my-[5px] mx-0 outline-none border border-[#2c444e] rounded-[2px] text-[13px]"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-[320px] h-[35px] p-[5px] my-[5px] mx-0 outline-none border border-[#2c444e] rounded-[2px] text-[13px]"
            placeholder="Password"
          />
          <button className="text-lg font-medium py-3 px-[25px] text-white bg-[#ffc801] rounded-[12px] mt-[10px] mr-0 mb-0 ml-0 outline-none border-none cursor-pointer">
            Log In
          </button>
          <p className="text-sm text-[#2c444e] m-[5px] mx-0 p-0">or</p>
          <button
            className="w-[230px] h-10 rounded-[5px] border-none outline-none bg-white shadow-googleBtn text-base font-medium mt-0 mr-0 mb-5 ml-0 text-[#2c444e] pointer flex items-center justify-center relative"
            onClick={googleAuth}
          >
            <img
              src="./images/google.png"
              className="w-[30px] h-[30px] object-cover"
              alt="google icon"
            />
            <span className="ml-[10px]">Sing in with Google</span>
          </button>
          <p className="text-sm text-[#2c444e] m-[5px] mx-0 p-0">
            New Here ?{" "}
            <Link to="/signup" className="text-base font-medium text-[#ffc801]">
              Sing Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
