import React from "react";
import ReceptionistSidebar from "./ReceptionistSidebar";
import { DefaultNavbar } from "../../components/DefaultNavbar";
import SheduleAppointments from "./SheduleAppointments";
import PatientsRegistration from "./PatientsRegistration";
import PatientData from "./PatientData";
import { Routes, Route } from "react-router-dom";
import DashboardData from "../DashboardData";
import { useState } from "react";

import { ProtectedRoute } from '../../context/Routes';
import Patients from "../patients/Patients";
import PatientDetails from "../patients/PatientDetails";

function ReceptionistMain({user}) {

  return (
    <ProtectedRoute>
      <section className="flex gap-6 overflow-x-hidden">
      <div>
        <ReceptionistSidebar />
      </div>
      <div className="text-xl text-black w-full bg-backgroundGray font-semibold">
        <div>
          {/* Navbar */}
          <DefaultNavbar user={user} />

          <section className="px-4">
            <Routes>
              <Route path="/" element={<DashboardData user={user} />} />
              <Route path="/appointments" element={<SheduleAppointments user={user} />} />
              <Route
                path="/register-patient"
                element={<PatientsRegistration user={user}  />}
              />
              <Route path="/patient-data" element={<PatientData user={user}  />} />
              <Route path='/patients' element={<Patients user={user} />} />
              <Route path='/patients/:id' element={<PatientDetails user={user} />} />
            </Routes>
          </section>
        </div>
      </div>
    </section>
    </ProtectedRoute>
    
  );
}

export default ReceptionistMain;
