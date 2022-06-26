import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { email, password } = input;
  //
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!email || !password) {
        setLoading(false);
        toast.error("Please fillup all the fields", {
          position: "bottom-right",
          autoClose: 1500,
          pauseOnHover: true,
        });
      } else {
        setTimeout(async () => {
          const { data } = await axios.post(
            `${process.env.REACT_APP_SERVER}auth/user/signin`,
            {
              email,
              password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          // error
          if (data && data.error) {
            setLoading(false);
            toast.error(data.message, {
              position: "bottom-right",
              autoClose: 1500,
              pauseOnHover: true,
            });
          }

          // success
          if (data && data.success) {
            setLoading(false);
            setInput({ ...input, email: "", password: "" });
            Swal.fire({
              title: `${data.message} You will be redirected to the main page`,
              icon: "success",
              timer: 1200,
            });
            setTimeout(() => {
              localStorage.setItem("userInfo", JSON.stringify(data));
              history.push("/");
            }, 1500);
          }
        }, 1500);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 1500,
        pauseOnHover: true,
      });
    }
  };
  //
  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_SERVER}auth/google/callback`, "_self");
  };
  //
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      history.push("/");
    }
  }, [history]);
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-[40px] font-semibold text-[#2c444e] relative flex items-center justify-center after:content-[''] after:w-[400px] after:h-1 after:rounded-[1px] after:-bottom-5 after:bg-[#2c444e] after:absolute">
        Log in Form
      </h1>
      <div className="flex p-16 mt-[45px] w-[800px] h-[450px] bg-white shadow-formContainer rounded-[30px]">
        <div className="flex-[1.5] overflow-hidden relative rounded-tl-[50px] rounded-bl-[50px]">
          <img
            className="w-[160%] absolute -left-[150px] -top-[50px]"
            src="./images/login.jpg"
            alt="login"
          />
        </div>
        <div className="flex flex-col items-center justify-center flex-2">
          <h2 className="text-[25px] font-normal text-[#2c444e] mb-[30px]">
            Members Log in
          </h2>
          <input
            type="email"
            className="w-[320px] h-[35px] p-[5px] my-[5px] mx-0 outline-none border border-[#dbdbdb] rounded-[5px] text-[13px]"
            placeholder="Email"
            value={email}
            name="email"
            onChange={handleInput}
          />
          <input
            type="password"
            className="w-[320px] h-[35px] p-[5px] my-[5px] mx-0 outline-none border border-[#dbdbdb] rounded-[5px] text-[13px]"
            placeholder="Password"
            value={password}
            name="password"
            onChange={handleInput}
          />
          <Button
            className="text-lg font-medium py-3 px-[25px] text-white bg-[#ffc801] rounded-[12px] mt-[10px] mr-0 mb-0 ml-0 outline-none border-none cursor-pointer"
            colorScheme="btn"
            borderRadius="12px"
            isLoading={loading}
            onClick={handleSubmit}
          >
            Login
          </Button>
          <p className="text-sm text-[#2c444e] m-[5px] mx-0 p-0">or</p>
          <button
            className="w-[230px] h-10 rounded-[5px] border-none outline-none bg-white shadow-googleBtn text-base font-medium mt-0 mr-0 mb-5 ml-0 text-[#2c444e] pointer flex items-center justify-center relative p-1"
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
            <Link
              to="/register"
              className="text-base font-medium text-[#ffc801]"
            >
              Sing Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
