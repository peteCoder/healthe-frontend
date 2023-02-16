import React, { useState } from 'react'
import doctor from '../assets/doctor.jpg'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigation = useNavigate()


  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");


  const LoginUser = (e) => {
    console.log(user)
    const data = new FormData()
    if (user.username !== "" || user.password !== ""){
      data.append("password", user.password);
      data.append("username", user.username);

      fetch("http://127.0.0.1:8000/api/api-token-auth/", {
        method: "POST",
        body: data,
      }).then((response) => {
        setError("");
        return response.json()
      })
      .then(data => {
        console.log(data)
        console.log("data: ", data.token)
        if (data.error){
          setError("Wrong email or password. ");
        } else {
          setError("");
        }
        if (data.token) {
          localStorage.setItem("token", JSON.stringify(data))
          navigation("/")
        }else {
          localStorage.setItem("token", JSON.stringify({"token":""}))
        }
        
      })
      .catch(error => console.log(error))
    } else {
      setError("All fields are required! ");
      setNotification("");
      localStorage.setItem("token", JSON.stringify({"token":""}))
    }
    
  }


  return (
    <div>
      <div className="grid grid-cols-12 w-full h-screen">
        <div className="col-span-6 p-4 h-full">
          <h1 className="font-semibold text-2xl">
            Health<span className="text-red-500">e</span>
          </h1>
          <div className="flex w-full h-[90%] relative justify-center items-center">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                {error && <p className='text-red-500 text-sm'>{error}</p>}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }))
                    }
                    value={user.username}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"

                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    value={user.password}
                  />
                  <label className="label">
                    <p className="label-text-alt">
                      Don't have an account?{" "}
                      <Link to="/signin" className=" link link-hover text-blue-700">
                        Sign Up
                      </Link>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button onClick={(e) => LoginUser(e)} className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 bg-slate-600 w-full h-screen">
            <img src={doctor} alt="female-doctor with stethoscope"  className='relative object-cover h-screen w-full' />
        </div>
      </div>
    </div>
  );
}

export default Login