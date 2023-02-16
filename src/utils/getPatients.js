import { useState, useEffect } from "react";
import { BASE_URL } from "./request";

export const getPatients = () => {
    const access_token = localStorage.getItem("token") !== null || localStorage.getItem("token") !== 'undefined' ? JSON.parse(localStorage.getItem("token")) : localStorage.clear();

    const token = access_token.token;

    const [patient, setPatient] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/patient/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            }
        })
        .then(response => response.json())
        .then(data => {
            setPatient(data);
        })
        .catch(error => console.log(error))
    }, [])

    return patient
}