import React from 'react'
import { Link } from 'react-router-dom';
import { getPatients } from '../../utils/getPatients';
function Patients() {
  const patients = getPatients();
  
  return (
    <section className="p-4 m-4 bg-white shadow-lg rounded-lg">
      {patients && (
        <>
        
        <h1 className="py-4 font-300">Patients</h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Type</th>
                <th>DOB</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
  
              {patients.map((patient, index) => (
                <tr>
                <th>{index}</th>
                <td>{patient.first_name} {patient.last_name}</td>
                <td>{patient._type}</td>
                <td>{patient.date_of_birth}</td>
                <td>
                  <Link to={`/patients/${patient.id}`} className="text-blue-600 underline">
                    view
                  </Link>
                  <br />
                </td>
              </tr>
              ))}
  
            </tbody>
          </table>
        </div>
        </>
      )}
      
    </section>
  );
}

export default Patients