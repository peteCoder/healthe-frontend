import React, { useEffect, useState } from "react";
import { csrftoken } from "../../utils/csrftoken";
import { getToken } from '../../utils/getToken'
import { BASE_URL } from "../../utils/request";
function PatientsRegistration() {
  const [patient, setPatient] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    patient_type: "",
    photo: null,
    gender: "",
  });

  const token = getToken()

  const [error, setError] = useState("");
  const [notification, setNotification] = useState("")

  const [patientStatus, setPatientStatus] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "api/patient-type/")
      .then((response) => response.json())
      .then((mydata) => setPatientStatus(mydata));
  }, []);

  const SubmitPatientForm = (e) => {
    console.log(patient)
    e.preventDefault();
    if (
      patient.first_name !== "" ||
      patient.last_name !== "" ||
      patient.email !== "" ||
      patient.phone !== "" ||
      patient.date_of_birth !== "" ||
      patient.patient_type !== "" ||
      patient.photo !== null ||
      patient.gender !== ""
    ) {
      const formData = new FormData();
      formData.append("first_name", patient.first_name);
      formData.append("last_name", patient.last_name);
      formData.append("email", patient.email);
      formData.append("phone", patient.phone);
      formData.append("date_of_birth", patient.date_of_birth);
      formData.append("patient_type", patient.patient_type);
      formData.append("photo", patient.photo);
      formData.append("gender", patient.gender);

      const options = {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,
          'X-CSRFToken': csrftoken
        },
        body: formData
      };


      fetch(BASE_URL+"api/patient/", options)
        .then((response) =>  {
          response.json()
          setNotification("Patient was successfully added..")
        })
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
    } else {
      setError("All fields are required! ")
      setNotification("")
    }
  };

  return (
    <div className="p-4 m-4 rounded-lg shadow-lg bg-white">
      {error && <p className="text-red-500">{error}</p> }
      {notification && <p className="text-green-500">{notification}</p> }
      <h2 className="py-4">Patient's registration</h2>
      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-3">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Firstname</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) =>
                setPatient((prev) => ({ ...prev, first_name: e.target.value }))
              }
              value={patient.first_name}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Lastname</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) =>
                setPatient((prev) => ({ ...prev, last_name: e.target.value }))
              }
              value={patient.last_name}
            />
          </div>
        </div>

        <div className="flex flex-row gap-3 my-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) =>
                setPatient((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={patient.phone}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Date of birth</span>
            </label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) =>
                setPatient((prev) => ({
                  ...prev,
                  date_of_birth: e.target.value,
                }))
              }
              value={patient.date_of_birth}
            />
          </div>
        </div>

        <div className="flex flex-row gap-3 my-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Patient type</span>
            </label>
            <select
              className="select select-bordered"
              value={patient.patient_type}
              onChange={(e) =>
                setPatient((prev) => ({
                  ...prev,
                  patient_type: e.target.value,
                }))
              }
            >
              <option disabled>Pick one</option>
              {patientStatus.map((status) => (
                <option key={status.id} value={status.id}>
                  {status.type_name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Upload image</span>
            </label>
            <input
              accept="image/jpeg,image/png,image/gif"
              type="file"
              onChange={(e) =>
                setPatient((prev) => ({ ...prev, photo: e.target.files[0] }))
              }
              className="file-input w-full max-w-xs"
            />
          </div>
        </div>

        <div className="flex flex-row gap-3 my-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <select
              className="select select-bordered"
              onChange={(e) =>
                setPatient((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option disabled selected>
                select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              className="file-input w-full max-w-xs"
              onChange={(e) =>
                setPatient((prev) => ({ ...prev, email: e.target.value }))
              }
              value={patient.email}
            />
          </div>
        </div>

        <div className="flex">
          <button onClick={(e) => SubmitPatientForm(e)} className="btn btn-secondary">
            save user
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientsRegistration;
