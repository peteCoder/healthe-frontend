import React from "react";
import doctor from "../../assets/doctor.jpg";

const SignUp = () => {
  return (
    <div>
      <div className="grid grid-cols-12 w-full h-screen">
        <div className="col-span-6 p-4 h-full">
          <h1 className="font-semibold text-2xl">
            Health<span className="text-red-500">e</span>
          </h1>

          <div className="flex justify-center items-center mt-8 mx-6">
            <form action="">
              <h1 className="text-xl text-black font-semibold py-3">Sign up</h1>
              <div className="flex flex-row gap-4">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">What is your Firstname?</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Firstname"
                    className="input input-bordered w-full max-w-xs text-xs"
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
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Enter Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="**********"
                    className="input input-bordered w-full max-w-xs text-xs"
                  />
                </div>
              </div>

              <div>
                <div className="form-control w-full max-w-lg">
                  <label className="label">
                    <span className="label-text">select department</span>
                  </label>
                  <select className="select select-bordered">
                    <option disabled selected>
                      Pick one
                    </option>
                    <option>Admin</option>
                    <option>Pharmacy</option>
                    <option>Doctor</option>
                    <option>Nurse</option>
                    <option>Accountant</option>
                  </select>
                </div>

                <div className="form-control w-full max-w-lg">
                  <label className="label">
                    <span className="label-text">select Gender</span>
                  </label>
                  <select className="select select-bordered">
                    <option disabled selected>
                      Pick one
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <label className="label">
                <p className="label-text-alt">
                  Already have an account?{" "}
                  <a href="#" className=" link link-hover text-blue-700">
                    Sign-in
                  </a>
                </p>
              </label>

              <button
                type="submit"
                className="btn my-3 w-full capitalize btn-primary"
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

export default SignUp;
