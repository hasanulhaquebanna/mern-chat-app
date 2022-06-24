import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const fileRef = useRef();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const [picture, setPicture] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = input;
  //
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  //
  const handlePicture = (e) => {
    let img = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = (readerEvent) => {
      setFile((image) => [...image, readerEvent.target.result]);
    };
  };
  const handleImage = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "chat-app");
      formData.append("cloud_name", "hasanulhaquebanna");
      fetch("https://api.cloudinary.com/v1_1/hasanulhaquebanna/image/upload", {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setPicture(data.url);
          setFile("");
          fileRef.current.value = "";
          setLoading(false);
          !loading &&
            toast.success(
              "Succesfully uploaded! You can create your account now.",
              {
                position: "bottom-right",
                autoClose: 1500,
                pauseOnHover: true,
              }
            );
        })
        .catch((err) => console.log(err));
    }, 2000);
  };
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!name || !email || !password || !picture) {
        setLoading(false);
        toast.error("Please fillup all the fields", {
          position: "bottom-right",
          autoClose: 1500,
          pauseOnHover: true,
        });
      } else {
        setTimeout(async () => {
          const { data } = await axios.post(
            `${process.env.REACT_APP_SERVER}/auth/user/signup`,
            {
              name,
              email,
              password,
              picture,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          data && data.success && setLoading(false);
          data &&
            data.success &&
            setInput({ ...input, name: "", email: "", password: "" });
          data &&
            data.success &&
            Swal.fire({
              title: data.message,
              icon: "success",
            });
        }, 1500);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: error.message,
        icon: "error",
      });
    }
  };
  //
  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_SERVER}auth/google/callback`, "_self");
  };
  //
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-[40px] font-semibold text-[#2c444e] relative flex items-center justify-center after:content-[''] after:w-[400px] after:h-1 after:rounded-[1px] after:-bottom-5 after:bg-[#2c444e] after:absolute">
        Sign up Form
      </h1>
      <div className="flex p-16 mt-[45px] w-[800px] h-[450px] bg-white shadow-formContainer rounded-[30px]">
        <div className="flex-[1.5] overflow-hidden relative rounded-tl-[50px] rounded-bl-[50px]">
          <img
            className="w-[160%] absolute -left-[150px] -top-[50px]"
            src="./images/signup.jpg"
            alt="signup"
          />
        </div>
        <div className="flex flex-col items-center justify-center flex-2">
          <h2 className="text-[25px] font-normal text-[#2c444e] mb-[30px]">
            Create Account
          </h2>
          <input
            type="text"
            className="w-[320px] h-[35px] p-[5px] my-[5px] mx-0 outline-none border border-[#dbdbdb] rounded-[5px] text-[13px]"
            placeholder="Username"
            value={name}
            name="name"
            onChange={handleInput}
          />
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
          <div className="w-[320px] h-[30px] p-[5px] my-[5px] mx-0 flex items-center border-[#dbdbdb] rounded-[5px] text-[13px] relative">
            <label
              htmlFor="file"
              className="w-[135px] text-[#ffc801] font-semibold cursor-pointer"
            >
              Profile picture
            </label>
            <input
              ref={fileRef}
              type="file"
              id="file"
              name="file"
              multiple={false}
              accept="image/*"
              className="cursor-pointer"
              onChange={handlePicture}
            />
            {file && (
              <div className="relative group">
                <div className="w-[35px] h-[35px] absolute -right-[35px] -top-[18px] overflow-hidden rounded-full border border-[lavender]">
                  <img
                    src={file}
                    alt="profile"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-[260px] hidden group-hover:flex h-[260px] absolute -right-[35px] -top-[100px] overflow-hidden rounded-full border border-[lavender] z-10 shadow-2xl">
                  <img
                    src={file}
                    alt="profile"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>
          {file && (
            <span
              className="w-4/5 p-1 border border-[lavender] rounded-[8px] text-center shadow-googleBtn cursor-pointer text-sm"
              onClick={handleImage}
            >
              Click here to upload profile picture!
            </span>
          )}

          <Button
            className="text-lg font-medium py-3 px-[25px] text-white bg-[#ffc801] rounded-[12px] mt-[10px] mr-0 mb-0 ml-0 outline-none border-none cursor-pointer"
            colorScheme="btn"
            borderRadius="12px"
            isLoading={loading}
            onClick={handleSubmit}
          >
            Sign Up
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
            <span className="ml-[10px]">Sing up with Google</span>
          </button>
          <p className="text-sm text-[#2c444e] m-[5px] mx-0 p-0">
            Already Have Account ?{" "}
            <Link to="/login" className="text-base font-medium text-[#ffc801]">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
