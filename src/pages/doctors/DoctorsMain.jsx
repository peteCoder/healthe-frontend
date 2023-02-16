import React from 'react'
import { DefaultNavbar } from "../../components/DefaultNavbar";
import DoctorsSidebar from './DoctorsSidebar';
import DashboardData from '../DashboardData';
import Appointments from "./Appointments"
import Consultation from "./Consultation"
import PatientsHistory from "./PatientsHistory"
import {Routes, Route} from 'react-router-dom'  
import { ProtectedRoute } from '../../context/Routes';
import Patients from '../patients/Patients';
import PatientDetails from '../patients/PatientDetails';


function DoctorsMain({user}) {
  return (
    
    <ProtectedRoute>
      <section className="flex gap-6 overflow-x-hidden">
      <div>
        <DoctorsSidebar />
      </div>
      <div className="text-xl text-black w-full bg-backgroundGray font-semibold">
        <div>
          {/* Navbar */}
          <DefaultNavbar user={user} />

          <section>
            <Routes>
              <Route path='/' element={<DashboardData user={user} />} />
              <Route path='/appointments' element={<Appointments user={user} />} />
              <Route path='/consultation' element={<Consultation user={user} />} />
              <Route path='/patient-history' element={<PatientsHistory user={user} />} />
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

export default DoctorsMain