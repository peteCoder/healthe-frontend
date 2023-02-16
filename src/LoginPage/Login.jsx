import React from 'react'
import doctor from '../../assets/doctor.jpg'

const Login = () => {
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
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
                  />
                  <label className="label">
                    <p className="label-text-alt">
                      Don't have an account?{" "}
                      <a href="#" className=" link link-hover text-blue-700">Sign-up</a>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
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