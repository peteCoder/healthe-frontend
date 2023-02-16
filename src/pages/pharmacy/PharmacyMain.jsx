import React from 'react'
import { DefaultNavbar } from "../../components/DefaultNavbar";
import DispenseDrugs from './DispenseDrugs';
import PharmacySidebar from './PharmacySidebar';
import GeneralHome from '../../GeneralHome';
import {Routes, Route } from 'react-router-dom'
import DashboardData from '../DashboardData';
import { ProtectedRoute } from '../../context/Routes';
import Patients from '../patients/Patients';
import PatientDetails from '../patients/PatientDetails';


function PharmacyMain({user}) {
  return (
    <ProtectedRoute>
      <section className="flex gap-6 overflow-x-hidden">
      <div>
        <PharmacySidebar  user={user} />
      </div>
      <div className="text-xl text-black w-full bg-backgroundGray font-semibold">
        <div>
          {/* Navbar */}
          <DefaultNavbar user={user} />

          <section className="px-4">
            <Routes>
              <Route path='/drugs' element={<DispenseDrugs user={user}  />} />
              <Route path="/" element={<DashboardData user={user} />} />
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

export default PharmacyMain