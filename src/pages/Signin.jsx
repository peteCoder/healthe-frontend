import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { csrftoken } from "../utils/csrftoken";

import doctor from "../assets/doctor.jpg";

const UsersRegistration = () => {

  const navigation = useNavigate()

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    profession: "",
    photo: null,
    username: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");

  const [userStatus, setUserStatus] = useState([]);

  const [errorList, setErrorList] = useState([])

  
  const submitUserForm = (e) => {
    console.log(user)
    e.preventDefault();

    const formData = new FormData()
  
    formData.append("photo", user.photo)
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("email", user.email);
    formData.append("phone", user.phone);
    formData.append("profession", user.profession);
    formData.append("password", user.password);
    formData.append("username", user.username);

    const options = {
      method: 'POST',
      headers: {
        // 'Authorization': `Token ${token}`,
        'X-CSRFToken': csrftoken
      },
      body: formData
    };

    
    
    fetch('http://localhost:8000/api/user/', options)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setUser({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          profession: "",
          photo: null,
          username: "",
          password: ""
        });
        if (data.error){
          setError("Ensure user does not exist and form is filled correctly.")
        } else {
          setError("")
          navigation('/login')
        }
      })
      .catch(err => console.error(err[1]));
    };



    return (
      <div>
        <div className="grid grid-cols-12 w-full h-screen">
          <div className="col-span-6 p-4 h-full">
            <h1 className="font-semibold text-2xl">
              Health<span className="text-red-500">e</span>
            </h1>
            
            
            {notification && <p className="text-green-500">{notification}</p>}
  
            <div className="flex justify-center items-center mt-8 mx-6">
              <form action="">
                <h1 className="text-xl text-black font-semibold py-3">Sign up</h1>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="flex flex-row gap-4">
                
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">What is your Firstname?</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Firstname"
                      className="input input-bordered w-full max-w-xs text-xs"
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          first_name: e.target.value,
                        }))
                      }
                      value={user.first_name}
                    />
                  </div>
  
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">What is your Lastname?</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Lastname"
                      className="input input-bordered w-full max-w-xs text-xs"
                      onChange={(e) =>
                        setUser((prev) => ({ ...prev, last_name: e.target.value }))
                      }
                      value={user.last_name}
                    />
                  </div>
                </div>
  
                <div className="w-full flex gap-4 my-3 relative">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Enter username?</span>
                    </label>
                    <input
                      type="text"
                      placeholder="username"
                      className="input input-bordered w-full max-w-xs text-xs"
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          username: e.target.value,
                        }))
                      }
                      value={user.username}
                    />
                  </div>
  
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="text"
                      placeholder="phone"
                      className="input input-bordered w-full max-w-xs text-xs"
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      value={user.phone}
                    />
                  </div>
                </div>
                <div className="w-full flex gap-4 my-3 relative">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Enter Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="**********"
                      className="input input-bordered w-full max-w-xs text-xs"
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      value={user.password}
                    />
                  </div>
                </div>
                <div className="w-full flex gap-4 my-3 relative">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Upload image</span>
                  </label>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/gif"
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, photo: e.target.files[0] }))
                    }
                    className="file-input w-full max-w-xs"
                  />
                </div>
  
                
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Enter Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered w-full max-w-xs text-xs"
                      onChange={(e) =>
                        setUser((prev) => ({ ...prev, email: e.target.value }))
                      }
                      value={user.email}
                    />
                  </div>
                </div>
  
                <div>
                  <div className="form-control w-full max-w-lg">
                    <label className="label">
                      <span className="label-text">select department</span>
                    </label>
                    <select className="select select-bordered"
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          profession: e.target.value,
                        }))
                      }
                    >
                      <option disabled selected>
                        Pick one
                      </option>
                      <option value="admin">admin</option>
                      <option value="pharmacy">pharmacy</option>
                      <option value="doctor">doctor</option>
                      <option value="nurse">nurse</option>
                      <option value="accountant">accountant</option>
                    </select>
                  </div>
  
                  <div className="form-control w-full max-w-lg">
                    <label className="label">
                      <span className="label-text">select Gender</span>
                    </label>
                    <select className="select select-bordered"
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          gender: e.target.value,
                        }))
                      }
                    >
                      <option disabled selected>
                        Pick one
                      </option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                    </select>
                  </div>
                </div>
  
                <label className="label">
                  <p className="label-text-alt">
                    Already have an account?{" "}
                    <Link to="/login" className=" link link-hover text-blue-700">
                      Log in
                    </Link>
                  </p>
                </label>
  
                <button
                  type="submit"
                  className="btn my-3 w-full capitalize btn-primary"
                  onClick={(e) => submitUserForm(e)}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
          <div className="col-span-6 bg-slate-600 w-full h-screen">
            <img
              src={doctor}
              alt="female-doctor with stethoscope"
              className="relative object-cover h-screen w-full"
            />
          </div>
        </div>
      </div>
    );


};





export default UsersRegistration;
