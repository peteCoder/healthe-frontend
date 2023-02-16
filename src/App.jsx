import GeneralHome from './GeneralHome'
import DoctorsMain from './pages/doctors/DoctorsMain'
import NurseMain from './pages/nurse/NurseMain'
import ReceptionistMain from './pages/receptionist/ReceptionistMain'
import PharmacyMain from './pages/pharmacy/PharmacyMain'
import {Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signin from './pages/Signin'
import {getUser} from './utils/getUser';
import { ProtectedRoute, UnProtectedRoute } from './context/Routes'


function App() {

  const user = getUser();

  const userprofile = 'pharmacy';
  console.log(user)

  let Component;

  if (userprofile === 'nurse'){
    Component = NurseMain 
  } else if (userprofile === 'reception'){
    Component = ReceptionistMain 
  } else if (userprofile === 'doctor'){
    Component = DoctorsMain
  } else if (userprofile === 'pharmacy'){
    Component = PharmacyMain
  } else {
    Component = GeneralHome
  }
  

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={
          <UnProtectedRoute>
            <Login />
          </UnProtectedRoute>
          
        } />
        <Route path='/signin' element={
          <UnProtectedRoute>
          <Signin />
        </UnProtectedRoute>
          
        } />
        <Route path='/*' element={
          <ProtectedRoute>
            <Component user={user} />
          </ProtectedRoute>
          
        } />
      </Routes>
      
    </div>
  )
}

export default App
