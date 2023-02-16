import React from 'react'
import { DefaultNavbar } from "../../components/DefaultNavbar";
import NurseSidebar from './NurseSidebar';
import VitalsHistory from './VitalsHistory';
import TakeVitals from './TakeVitals';
import AdministerDrug from './AdministerDrug';
import DashboardData from '../../components/DashboardData'
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../../context/Routes';

function NurseMain({user}) {

  return (
    <ProtectedRoute>
      <section className="flex gap-6 overflow-x-hidden">
      <div>
        <NurseSidebar />
      </div>
      <div className="text-xl text-black w-full bg-backgroundGray font-semibold">
        <div>
          {/* Navbar */}
          <DefaultNavbar user={user}  />

          <section className="px-4">
            {/* main content */}
            <Routes>
              <Route path='/' element={<DashboardData user={user} />} />
              <Route path='/take-vitals' element={<TakeVitals user={user} />} />
              <Route path='/vital-history' element={<VitalsHistory user={user} />} />
              <Route path='/administer-drug' element={<AdministerDrug user={user} />} />
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

export default NurseMain